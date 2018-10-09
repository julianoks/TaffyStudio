import {giveNodePorts} from './give_ports.js'
import {constructors as taffyConstructors} from '../../deps/Taffy/src/index.js'
import {puller as taffyPuller} from '../../deps/Taffy/src/index.js'
import {graphStructure as protoGraphStructure} from './graph_structure.js'

function getGraph(){
	const {graphStructure} = this
	const e = graphStructure.E,
	lines = [].concat(...[].concat(...Object.values(e).map(Object.values))),
	relations = lines.map(l => l.__data__.edgeRelation),
	g = relations.reduce((acc,{from,to}) => {
		if(!acc.hasOwnProperty(to.node)){acc[to.node]=[]}
		if(!acc.hasOwnProperty(from.node)){acc[from.node]=[]}
		acc[to.node][to.index] = from
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
	inputNodeName = Object.entries(svgData.nodeMetaData).find(([n,{op}])=>op==='INPUTS')[0],
	nodes = Object.entries(graphSkeleton).reduce((acc, [name, inputsRaw]) => {
		let inputs = inputsRaw.slice()
		// remove trailing empty, replace others with undefineds
		while(inputs.length && inputs[inputs.length-1]===undefined){ inputs.pop() }
		for(let i=0; i<inputs.length; i++){
			if(inputs[i]===undefined){
				throw({error: {message: `input #${i} is undefined`}, node: name})
			}
		}
		const {op, literal} = svgData.nodeMetaData[name]
		inputs = inputs
			.map(({node, index}) => node===inputNodeName? ['INPUT_'+index, 0] : [node,index])
			.map(([node, index]) => node+':'+index)
		if(op === 'INPUTS'){
			const nOutputs = svgData.graphStructure.V[inputNodeName].querySelector('.nodeOutPort').childElementCount-1
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


const handleFailedPull = (svgData, e) => {
	if(e.hasOwnProperty('node') && e.hasOwnProperty('error')){
		const {node, error} = e
		svgData.nodeAlert(node, error.message)
	}
	else{console.log(e)}
	return false
}

function pullModule(){
	const {name, inputDescriptions} = this.moduleMetaData
	const pullFn = this.svgElement.closest('.studio').__data__.pullModule
	try {
		return pullFn(name, inputDescriptions)
	} catch(e){ return handleFailedPull(this, e) }
}

function debugModule(){
	const {name, inputDescriptions} = this.moduleMetaData
	try {
		const library = this.svgElement.closest('.studio').__data__.getTaffyLibrary()
		// use every node as an output
		library.modules.forEach((mod, i) => {
			if(mod.name !== name){return}
			library.modules[i].output = mod.nodes.map(n => n.name+':0')
		})
		taffyPuller(library, name, inputDescriptions, true)
		return true
	} catch(e){ return handleFailedPull(this, e) }
}

function getVertexByName(svgData, vertex){
	if(!svgData.graphStructure.V.hasOwnProperty(vertex)){
			throw(`Graph doesn't have vertex: "${vertex}"`)
		}
	return d3.select(svgData.graphStructure.V[vertex])
}

function givePorts(vertex, nIn, nOut){
	return getVertexByName(this, vertex)
		.call(s => giveNodePorts(s, nIn, nOut))
}

function setNodeColor(vertex, color){
	return getVertexByName(this, vertex)
		.select('.nodeBody').attr('fill', color)
}

function nodeAlert(vertex, message){
    const tooltipHTML = `<div><style>.nodeAlertTooltip{width:20vw;max-width:20vw;font-size:12px;position:absolute;pointer-events:all;line-height:1;font-weight:700;padding:12px;background:rgba(100,0,0,.8);color:#fff;border-radius:2px}.nodeAlertTooltip:after{box-sizing:border-box;display:inline;font-size:10px;width:100%;line-height:1;color:rgba(100,0,0,.8);content:"\\25BC";position:absolute;text-align:center;margin:-1px 0 0 0;top:100%;left:0}.closeTooltip:before{content:'✕'}.closeTooltip{position:absolute;top:0;right:0;cursor:pointer}</style><div class=nodeAlertTooltip></div></div>`
    getVertexByName(this, vertex)
		.select('.nodeGuts').each(function(){
            const ele = document.createRange().createContextualFragment(tooltipHTML).firstElementChild
			this.appendChild(ele)
			const tool = ele.querySelector('.nodeAlertTooltip')
            tool.innerText = message
			tool.style.bottom = this.parentElement.querySelector('.nodeBody').height.baseVal.value+'px'
			const bodyWidth = this.parentElement.querySelector('.nodeBody').width.baseVal.value
			tool.style.left = ((bodyWidth-tool.offsetWidth)/2)+'px'
			const close = tool.appendChild(document.createElement('span'))
			close.className = 'closeTooltip'
			tool.addEventListener('mousedown', function(e){e.stopPropagation()})
			close.onclick = function(){ele.remove()}
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
			imports: []
		},
		pullModule,
		debugModule,
		getGraph,
		givePorts,
		setNodeColor,
		getTaffyModule,
		nodeAlert
	}
}