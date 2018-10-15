import {makeGridLines} from './svg_utils.js'
import {makeSvgData} from './svgAttribute.js'

export function createSVG(selection, size=[1000,500], make_grid=true){
	const svgData = makeSvgData()
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
	drawCanvas.append("g").classed("nodesGroup", true)
	drawCanvas.append("g").classed("edgesGroup", true)
	// add zoom behavior to svg
	const zoom = d3.zoom().on("zoom", () => zoomSelection(drawCanvas))
	svg
		.call(zoom)
	return svg
}

function zoomSelection(selection) {
	const {k,x,y} = d3.event.transform,
	transform = `translate(${x},${y})scale(${k})`
	selection.attr("transform", transform)
}
