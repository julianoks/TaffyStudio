import {giveNodePorts} from './give_ports.js'
import {inverseRelativeTransform} from './svg_utils.js'
import {sideBarNodeManipulation} from './sideBar.js'

// node drag behavior
const __nodeOnDrag = function(ele){
	ele.__dragCache.mouseLeaveAction(ele)
	const nodeBody = d3.select(ele).select(".nodeBody").node(),
	{width, height} = nodeBody.getBBox(),
	[cx,cy] = [d3.event.x - (width / 2), d3.event.y - (height / 2)]
	d3.select(ele).attr("transform", `translate(${cx},${cy})`)
	ele.ownerSVGElement.__data__.graphStructure
		.getIncidentEdgeElements(ele.__data__.vertexName)
		.forEach(e => e.__data__.updatePosition())
}
const nodeDragBehavior = d3.drag()
    .on("start", function(d){
    	d3.event.sourceEvent.stopPropagation()
    	const mouseLeaveFn = this.__on.find(({type}) => type=='mouseleave').value,
    	mouseEnterFn = this.__on.find(({type}) => type=='mouseenter').value
    	this.__dragCache = {
    		mouseLeaveAction: ele => mouseLeaveFn(ele, true),
    		mouseEnterAction: ele => mouseEnterFn(ele, true)
    	}
    	__nodeOnDrag(this)
	})
    .on("drag", function(d){__nodeOnDrag(this)})
    .on("end", function(d){
    	__nodeOnDrag(this)
    	this.__dragCache.mouseEnterAction(this)
    	delete(this.__dragCache)
    })

// add node to SVG
function addNode(svgSelection, coords, nodeParam, eventHandlers, populateNode){
	// unpack nodeParam and eventHandlers
	const defaultNodeParam = {width: 50, height: 25, rounding: 5},
	{width, height, rounding} = Object.assign({}, defaultNodeParam, nodeParam)
	// see ```_nodeEventHandlers``` for the eventHandlers being used
	const defaultEventHandlers = {click: ()=>{}, mouseEnter: ()=>{}, mouseLeave: ()=>{}},
	{click, mouseEnter, mouseLeave} = Object.assign({}, defaultEventHandlers, eventHandlers)
	const [mx, my] = coords
	// create elements
	const nodeContainer = svgSelection.selectAll(".drawCanvas > .nodesGroup").append("g"),
	nodePorts = nodeContainer.append("g"),
	nodeInPort = nodePorts.append("g"),
	nodeOutPort = nodePorts.append("g"),
	nodeBody = nodeContainer.append("rect"),
	nodeGuts = nodeContainer.append('foreignObject')
	// populate elements and attach event handlers
	nodeContainer
		.classed("nodeContainer", true)
		.attr("transform", `translate(${mx - (width / 2)},${my - (height / 2)})`)
		.on("mouseenter", function(ele, override=false){mouseEnter(override? ele : this)})
		.on("mouseleave", function(ele, override=false){mouseLeave(override? ele : this)})
		.on("click", function(){d3.event.stopPropagation();click(this);})
		.call(nodeDragBehavior)
		.datum(function(){
			const name = this.ownerSVGElement.__data__.graphStructure.addVertex(this)
			return {vertexName: name}
		})
	nodePorts
		.classed("nodePorts", true)
	nodeInPort.classed("nodeInPort", true).style("pointer-events", "all")
	nodeOutPort.classed("nodeOutPort", true).style("pointer-events", "all")
	nodeBody
		.classed("nodeBody", true)
		.attr("width", width)
		.attr("height", height)
		.attr("rx", rounding)
		.attr("ry", rounding)
	nodeGuts
		.classed('nodeGuts', true)
		.style('width', width)
		.style('height', height)
	// call populateNode callback on node upon completion, rescale ports
	if(typeof populateNode === "function"){
		nodeContainer.call(populateNode)
	}
	return nodeContainer
}

const _nodeEventHandlers = {
	mouseEnter: ele => {
		const s = d3.select(ele)
		s.select(".nodeGuts")
			.transition().style("opacity", 1)
			.style('visibility', 'inherit')
		s.select(".nodePorts")
			.transition().style("opacity", 1)
	},
	mouseLeave: ele => {
		const s = d3.select(ele)
		s.select(".nodeGuts")
			.transition().style("opacity", 0)
			.style('visibility', 'hidden')
		s.select(".nodePorts")
			.transition().style("opacity", 0.5)
	},
	click: ele => {
		sideBarNodeManipulation(ele.ownerSVGElement, ele.__data__.vertexName)
	}
}
const _populateNode = container => {
	container
		.call(s => giveNodePorts(s, 0, 0))
		.select(".nodeBody").attr("fill", "blue")
}

// add click event to SVG for creating nodes
export function addNodeCreationClick(svg){
	svg.on("click", () => {
		const screenCoord = d3.mouse(d3.event.currentTarget)
		d3.select(d3.event.currentTarget)
			.selectAll(".drawCanvas").each(function(){
				const inverted = inverseRelativeTransform(this, "svg")(screenCoord)
				addNode(svg, inverted, {}, _nodeEventHandlers, _populateNode)
					.each(({vertexName}) => sideBarNodeManipulation(svg.node(), vertexName))
			})
	})
}
