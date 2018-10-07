import {graphStructure as protoGraphStructure} from './graph_structure.js'
import {makeGridLines, addMarkerDef} from './svg_utils.js'
import {giveNodePorts} from './give_ports.js'
import {constructors as taffyConstructors} from '../../deps/Taffy/src/index.js'

function zoomSelection(selection) {
	const {k,x,y} = d3.event.transform,
	transform = `translate(${x},${y})scale(${k})`
	selection.attr("transform", transform)
}

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


const createOpDoc = (moduleInputs, moduleOutputs, moduleName) => {
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
		while(inputs.length && inputs[inputs.length-1]===undefined){ inputs.pop() }
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
	moduleDoc = createOpDoc(moduleInputs, moduleOutputs, moduleName)
	return new module(moduleName, moduleInputs, moduleOutputs, nodes, moduleImport, moduleDoc)
}

function pullModule(){
	const {name, inputDescriptions} = this.moduleMetaData
	const {pullModule} = this.svgElement.closest('.studio').__data__
	try {
		return pullModule(name, inputDescriptions)
	} catch(e){
		if(e.hasOwnProperty('node') && e.hasOwnProperty('error')){
			const {node, error} = e
			this.nodeAlert(node, JSON.stringify(error))
		}
		else{console.log(e)}
	}
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

function nodeAlert(vertex, message, duration=10000){
	getVertexByName(this, vertex)
		.select('.nodeGuts').each(function(){
			let inp = document.createElement('input')
			inp.style.width = '1vw'
			inp.style.height = '1vh'
			inp.style.margin = '0px'
			inp.style.padding = '0px'
			inp.style.border = '0px'
			inp.style.opacity = '0'
			this.appendChild(inp)
			inp.setCustomValidity(message)
			inp.reportValidity()
			const interval = setInterval(() => {inp.reportValidity()}, 2000)
			inp.onclick = ()=>{clearInterval(interval); inp.remove()}
			setTimeout(()=>{clearInterval(interval); inp.remove()}, duration)
		})
}

export function createSVG(selection, size=[1000,500], make_grid=true){
	const svgData = {
		graphStructure: new protoGraphStructure(),
		lastPortHovered: undefined,
		nodeMetaData: {},
		getTaffyModule: undefined,
		moduleMetaData: {
			name: undefined,
			inputDescriptions: {},
			imports: []
		},
		pullModule,
		getGraph,
		givePorts,
		setNodeColor,
		getTaffyModule,
		nodeAlert
	}
	// create svg
	const svg = selection
		.append("svg")
		.style("border", "1px solid black")
		.style("float", "right")
		.attr("width", size[0])
		.attr("height", size[1])
		.datum(svgData)
	svg.each(function(){this.__data__.svgElement = this})
	// create drawCanvas, to hold elements that will transform (scale and translate)
	const drawCanvas = svg.append("g")
		.classed("drawCanvas", true)
		.attr("transform", "translate(0,0)scale(1)")
	// possibly draw gridlines on drawCanvas
	if(make_grid){makeGridLines(drawCanvas, size, 100)}
	// create groups for nodes and edges
	drawCanvas.append("g").classed("edgesGroup", true)
	drawCanvas.append("g").classed("nodesGroup", true)
	// add zoom behavior to svg
	const zoom = d3.zoom().on("zoom", () => zoomSelection(drawCanvas))
	svg
		.call(zoom)
		.call(addMarkerDef)
	return svg
}
