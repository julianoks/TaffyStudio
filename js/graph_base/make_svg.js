import {graphStructure as protoGraphStructure} from './graph_structure.js'
import {makeGridLines, addMarkerDef} from './svg_utils.js'
import {giveNodePorts} from './give_ports.js'

const makeGetGraph = graphStructure => () => {
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

function zoomSelection(selection) {
	const {k,x,y} = d3.event.transform,
	transform = `translate(${x},${y})scale(${k})`
	selection.attr("transform", transform)
}

export function createSVG(selection, size=[1000,500], make_grid=true){
	const [width, height] = size
	const graphStructure = new protoGraphStructure(),
	svgData = {
		graphStructure: graphStructure,
		lastPortHovered: undefined,
		lastNodeClicked: undefined,
		getGraph: makeGetGraph(graphStructure),
		givePorts: (vertex, nIn, nOut) => getVertexByName(vertex)
			.call(s => giveNodePorts(s, nIn, nOut)),
		setNodeColor: (vertex, color) => getVertexByName(vertex)
			.select('.nodeBody').attr('fill', color)
	}
	function getVertexByName(vertex){
		if(!svgData.graphStructure.V.hasOwnProperty(vertex)){
				throw(`Graph doesn't have vertex: "${vertex}"`)
			}
		return d3.select(svgData.graphStructure.V[vertex])
	}
	// create svg
	const svg = selection
		.append("svg")
		.style("border", "1px solid black")
		.attr("width", width)
		.attr("height", height)
		.datum(svgData)
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
