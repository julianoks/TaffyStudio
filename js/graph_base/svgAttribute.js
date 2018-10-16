import {giveNodePorts, addEdge} from './give_ports.js'
import {addNodeNoGUI as addNode} from './nodes.js'
import {constructors as taffyConstructors} from '../../deps/Taffy/src/index.js'
import {puller as taffyPuller} from '../../deps/Taffy/src/index.js'
import {graphStructure as protoGraphStructure} from './graph_structure.js'

function getGraph(){
	const getName = v => v.__data__.vertexName,
	{graphStructure} = this,
	e = graphStructure.E,
	lines = [].concat(...[].concat(...Object.values(e).map(Object.values))),
	relations = lines.map(l => l.__data__.edgeRelation),
	g = relations.reduce((acc,{from,to}) => {
		if(!acc.hasOwnProperty(getName(to.node))){acc[getName(to.node)]=[]}
		if(!acc.hasOwnProperty(getName(from.node))){acc[getName(from.node)]=[]}
		acc[getName(to.node)][to.index] = {node: getName(from.node), index: from.index}
		return acc
	}, {})
	return g
}

const _createOpDoc = (moduleInputs, moduleOutputs, moduleName) => {
	const inputs = moduleInputs.map((_,i) => `Input ${i+1}`)
	const outputs = moduleOutputs.map((_,i) => `Output ${i+1}`)
	const doc = `Implements module "${moduleName}"`
	return new taffyConstructors.op_doc(inputs, outputs, doc)
}
function getTaffyModule(){
	const svgData = this
	let moduleInputs = [],
	moduleOutputs = []
	const {node, module} = taffyConstructors,
	graphSkeleton = svgData.getGraph(),
	moduleName = svgData.moduleMetaData.name,
	moduleImport = svgData.moduleMetaData.imports,
	inputNodeName = svgData.moduleMetaData.inputNode.__data__.vertexName,
	nodes = Object.entries(graphSkeleton).reduce((acc, [name, inputsRaw]) => {
		let inputs = inputsRaw.slice()
		// remove trailing empty, replace others with undefineds
		while(inputs.length && inputs[inputs.length-1]===undefined){ inputs.pop() }
		for(let i=0; i<inputs.length; i++){
			if(inputs[i]===undefined){
				throw({error: {message: `input #${i} is undefined`}, node: moduleName+'/'+name})
			}
		}
		const {op, literal} = svgData.nodeMetaData[name]
		inputs = inputs
			.map(({node, index}) => node===inputNodeName? ['INPUT_'+index, 0] : [node,index])
			.map(([node, index]) => node+':'+index)
		if(op === 'INPUTS'){
			const nOutputs = svgData.moduleMetaData.inputNode.querySelector('.nodeOutPort').childElementCount-1
			const newInputNodes = Array(nOutputs).fill().map((_,i) => {
				moduleInputs.push('INPUT_'+i)
				return new node('INPUT_'+i, 'placeholder', [], [])
			})
			return acc.concat(newInputNodes)
		}
		if(op === 'OUTPUTS'){
			moduleOutputs = inputs
			return acc
		}
		return acc.concat([new node(name, op, inputs, literal)])
	}, []),
	moduleDoc = _createOpDoc(moduleInputs, moduleOutputs, moduleName)
	return new module(moduleName, moduleInputs, moduleOutputs, nodes, moduleImport, moduleDoc)
}


function handleFailedPull(e){
	const svgData = this
	if(e.hasOwnProperty('node') && e.hasOwnProperty('error')){
		const {node, error} = e
		svgData.nodeAlert(node, error.message)
		if(e.hasOwnProperty('valueTrace')){
			bindValuesToPorts(svgData, e.valueTrace, e.node)
		}
	}
	else{
		console.log(e)
		if(e.hasOwnProperty('valueTrace')){
			bindValuesToPorts(svgData, e.valueTrace)
		}
	}
	return false
}
const clearNodeAlerts = ({svgElement}) =>
	Array.from(svgElement.closest('.studio').querySelectorAll('.nodeAlertTooltip'))
		.forEach(p => p.parentElement.remove())

const bindValuesToPorts = (svgData, valueTrace, failedNode=false) => {
	Array.from(svgData.svgElement.querySelectorAll('.nodePorts'))
		.forEach(e => {e.__data__.outputVals = {}})
	const inputPorts = svgData.moduleMetaData.inputNode.querySelector('.nodePorts')
	inputPorts.__data__.outputVals = {}
	const nodesToIdxsToVals = Object.entries(valueTrace)
		.reduce((acc, [k,v]) => {
			const [name, idx] = k.split(':')
			if(name==='DEBUG'){return acc}
			if(name.startsWith('INPUT_')){
				inputPorts.__data__.outputVals[name.split('_')[1]] = v
				return acc
			}
			if(!acc.hasOwnProperty(name)){ acc[name] = {} }
			acc[name][idx] = v
			return acc
		}, {})
	const subValTrace = {}
	Object.entries(nodesToIdxsToVals).forEach(([node, idxToVal]) => {
		if(node.includes('/')){
			if(failedNode === false){ return }
			const [child, ...grandChildren] = node.split('/')
			if(child === failedNode.split('/')[0]){
				Object.entries(idxToVal).forEach(([idx, val]) => {
					subValTrace[grandChildren.join('/')+':'+idx] = val
				})
			}
			return
		}
		const container = svgData.graphStructure.V[node]
		container.querySelector('.nodePorts').__data__.outputVals = idxToVal
		const displayedOut = container.querySelector('.nodeOutPort').querySelectorAll('circle').length
		const nOut = Object.keys(idxToVal).length
		if(nOut !== displayedOut){
			const nIn = container.querySelector('.nodeInPort').querySelectorAll('circle').length
			svgData.givePorts(node, nIn, nOut, false)
		}
	})
	if(failedNode !== false && failedNode.includes('/')){
		const {op} = svgData.nodeMetaData[failedNode.split('/')[0]]
		const holder = svgData.svgElement.closest('.studio').__data__.moduleHolders[op]
		const subSVGData = holder.querySelector('svg').__data__
		const failedGrandChildren = failedNode.split('/').slice(1).join('/')
		bindValuesToPorts(subSVGData, subValTrace, failedGrandChildren)
	}
}

function pullModule(){
	clearNodeAlerts(this)
	const {name, inputDescriptions} = this.moduleMetaData
	const pullFn = this.svgElement.closest('.studio').__data__.pullModule
	try {
		return pullFn(name, inputDescriptions)
	} catch(e){ return this.handleFailedPull(e) }
}


const _preprocessModuleForDebug = (inputDescriptions, mod) => {
	// move input descriptions that are not tensors into literal nodes
	mod.input = Object.entries(inputDescriptions)
		.filter(([,{selectedType}]) => selectedType === 'tensor')
		.map(([name,]) => name)
	mod.nodes = mod.nodes.filter(node => !inputDescriptions.hasOwnProperty(node) ||
		inputDescriptions[node].selectedType !== 'literal')
	let newInpDesc = Object.entries(inputDescriptions)
		.filter(([,{selectedType}]) => selectedType === 'tensor')
		.reduce((acc,[k,v])=>Object.assign(acc,{[k]:v}),
			{'DEBUG': {shape:[],dtype:'float32',JSONtext:'', selectedType:'tensor'}})
	// move literals to LITERALS node, which are forwarded to a parse_json op with the same name as the input
	let literals = []
	Object.entries(inputDescriptions)
		.filter(([,{selectedType}]) => selectedType === 'literal')
		.forEach(([name, {JSONtext}]) => {
			const parseNode = new taffyConstructors.node(name, 'parse_json', [`LITERALS:${literals.length}`], [])
			mod.nodes.push(parseNode)
			literals.push(JSONtext)
		})
	const literalsNode = new taffyConstructors.node('LITERALS', 'literals', [], literals)
	mod.nodes.push(literalsNode)
	// add debug node
	const debugNode = new taffyConstructors.node('DEBUG', 'placeholder', [], [])
	mod.nodes.push(debugNode)
	mod.output = ['DEBUG:0']
	mod.input.push('DEBUG')
	return {mod, newInpDesc}
}
function debugModule(){
	clearNodeAlerts(this)
	const {name, inputDescriptions} = this.moduleMetaData
	let debugInpDesc = inputDescriptions
	try {
		const library = this.svgElement.closest('.studio').__data__.getTaffyLibrary()
		library.modules.forEach((thisMod, i) => {
			if(thisMod.name !== name){return}
			const {mod, newInpDesc} = _preprocessModuleForDebug(inputDescriptions, thisMod)
			library.modules[i] = mod
			debugInpDesc = newInpDesc
		})
		const pulled = taffyPuller(library, name, debugInpDesc, false)
		Object.keys(pulled.stage_two.val_trace)
			.filter(n => n.startsWith('LITERALS'))
			.forEach(n => {delete pulled.stage_two.val_trace[n]})
		delete pulled.stage_two.val_trace['DEBUG:0']
		bindValuesToPorts(this, pulled.stage_two.val_trace)
		return true
	} catch(e){
		if(e.hasOwnProperty('valueTrace')){
			Object.keys(e.valueTrace)
				.filter(n => n.startsWith('LITERALS'))
				.forEach(n => {delete e.valueTrace[n]})
			delete e.valueTrace['DEBUG:0']
		}
		return this.handleFailedPull(e)
	}
}

function getVertexByName(svgData, name){
	const vertex = name.startsWith('INPUT_')? svgData.moduleMetaData.inputNode.__data__.vertexName : name
	if(!svgData.graphStructure.V.hasOwnProperty(vertex)){
			throw(`Graph doesn't have vertex: "${vertex}"`)
		}
	return d3.select(svgData.graphStructure.V[vertex])
}

function givePorts(vertex, nIn, nOut, runDebug=true){
	return getVertexByName(this, vertex)
		.call(s => giveNodePorts(s, nIn, nOut, runDebug))
}

function setNodeColor(vertex, color){
	return getVertexByName(this, vertex)
		.select('.nodeBody').attr('fill', color)
}

const alertMalformedModule = (svgData, vertex, message) => {
	const [moduleName, ...children] = vertex.split('/')
	const studio = svgData.svgElement.closest('.studio')
	if(!studio.__data__.moduleHolders.hasOwnProperty(moduleName)){ return false }
	studio.querySelector(`nav li a#${moduleName}`).click()
	const externalData = studio.__data__.moduleHolders[moduleName].querySelector('svg').__data__
	externalData.nodeAlert(children.join('/'), message)
	return true
}
const alertNestedMessage = (svgData, vertex, message) => {
	if(!vertex.includes('/')){ return false }
	const [node, ...children] = vertex.split('/')
	const moduleImp = svgData.nodeMetaData[node].op
	const onclick = `this.closest('.studio').querySelector('nav li a#${moduleImp}').click()`
	svgData.nodeAlert(node, `Error in <a href="#" onclick="${onclick}">${moduleImp}</a>: <br>${message}`)
	const externalData = svgData.svgElement.closest('.studio').__data__
		.moduleHolders[moduleImp].querySelector('svg').__data__
	externalData.nodeAlert(children.join('/'), message)
	return true
}

function nodeAlert(vertex, message){
	if(alertMalformedModule(this, vertex, message) ||
		alertNestedMessage(this, vertex, message)){return}
	const tooltipWidth = window.innerWidth*0.2
	const tooltipHTML = `<div><style>.nodeAlertTooltip{width:${tooltipWidth}px;font-size:12px;position:absolute;pointer-events:all;line-height:1;font-weight:700;padding:12px;background:rgb(244, 67, 54);color:#fff;border-radius:2px}.nodeAlertTooltip:after{box-sizing:border-box;display:inline;font-size:10px;width:100%;line-height:1;color:rgb(244, 67, 54);content:"\\25BC";position:absolute;text-align:center;margin:-1px 0 0 0;top:100%;left:0}.closeTooltip:before{content:'✕'}.closeTooltip{position:absolute;top:0;right:0;cursor:pointer}</style><div class=nodeAlertTooltip></div></div>`
	getVertexByName(this, vertex)
		.select('.nodeGuts').each(function(){
            const ele = document.createRange().createContextualFragment(tooltipHTML).firstElementChild
			ele.style.opacity = 0
			this.appendChild(ele)
			const tool = ele.querySelector('.nodeAlertTooltip')
            tool.innerHTML = message
			tool.style.bottom = this.parentElement.querySelector('.nodeBody').getAttribute('height')+'px'
			const bodyWidth = this.parentElement.querySelector('.nodeBody').getAttribute('width')
			tool.style.left = `${(bodyWidth-tooltipWidth)/2}px`
			const close = tool.appendChild(document.createElement('span'))
			close.className = 'closeTooltip'
			d3.select(ele).transition().style('opacity', 1)
			tool.addEventListener('mousedown', function(e){e.stopPropagation()})
			close.onclick = function(){d3.select(ele).transition().style('opacity', 0).remove()}
		})
}

export function makeSvgData(){
    return {
		graphStructure: new protoGraphStructure(),
		lastPortHovered: undefined,
		nodeMetaData: {},
		moduleMetaData: {
			name: undefined,
			inputDescriptions: {},
			imports: [],
			inputNode: undefined,
			outputNode: undefined
		},
		pullModule,
		debugModule,
		getGraph,
		givePorts,
		setNodeColor,
		getTaffyModule,
		nodeAlert,
		handleFailedPull,
		addEdge,
		addNode,
	}
}