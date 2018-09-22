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
	const svgScale = Math.min(+svgSelection.node().getAttribute('width'), +svgSelection.node().getAttribute('height')),
	defaultNodeParam = Object.entries({width: 0.08, height: 0.04, rounding: 0.005})
		.reduce((acc,[k,v]) => Object.assign(acc, {[k]: v*svgScale}), {}),
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
	nodeContainer.each(({vertexName}) => {
		// add node's metadata to the graph
		svgSelection.node().__data__.nodeMetaData[vertexName] = {
			userProvidedName: vertexName,
			op: undefined,
			literal: []
		}
		// focus the sidebar on the newly created node
		sideBarNodeManipulation(svgSelection.node(), vertexName)
	})
	// upon completion call populateNode callback on node, rescale ports
	if(typeof populateNode === "function"){
		nodeContainer.call(populateNode)
	}
}

const _nodeEventHandlers = {
	mouseEnter: ele => {
		const s = d3.select(ele)
		s.select(".nodeGuts")
			.transition().style("opacity", 1)
			//.style('visibility', 'inherit')
		s.select(".nodePorts")
			.transition().style("opacity", 1)
	},
	mouseLeave: ele => {
		const s = d3.select(ele)
		s.select(".nodeGuts")
			.transition().style("opacity", 0.5)
			//.style('visibility', 'hidden')
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


function addInputOutputNodes(svgSelection){
	const unscaledNodeParam = {width: 0.15, height: 0.05, rounding: 0.005}
	svgSelection.each(function(){
		const svgEle = this
		const width = +svgEle.getAttribute('width')
		const height = +svgEle.getAttribute('height')
		const svgScale = Math.min(width, height)
		const nodeParam = Object.entries(unscaledNodeParam)
			.reduce((acc,[k,v]) => Object.assign(acc, {[k]: v*svgScale}), {})
		const xPos = (width/2)
		const bottomYPos = height - (nodeParam.height / 2)
		const topYPos = nodeParam.height/2
		// input
		const populateInput = container => {
			container
				.call(s => giveNodePorts(s, 0, 1))
				.each(function({vertexName}){
					this.ownerSVGElement.__data__.nodeMetaData[vertexName].op = "INPUTS"
				})
			container.select(".nodeBody").attr("fill", "red")
			container.select('.nodeGuts').append('xhtml:span')
				.text('Inputs')
		}
		addNode(d3.select(svgEle), [xPos, bottomYPos], nodeParam, _nodeEventHandlers, populateInput)
		// output
		const populateOutput = container => {
			container
				.call(s => giveNodePorts(s, 1, 0))
				.each(function({vertexName}){
					this.ownerSVGElement.__data__.nodeMetaData[vertexName].op = "OUTPUTS"
				})
			container.select(".nodeBody").attr("fill", "red")
			container.select('.nodeGuts').append('xhtml:span')
				.text('Outputs')
		}
		addNode(d3.select(svgEle), [xPos, topYPos], nodeParam, _nodeEventHandlers, populateOutput)
	})
}

// add click event to SVG for creating nodes
export function addNodeCreationClick(svg){
	svg.on("click", () => {
		const screenCoord = d3.mouse(d3.event.currentTarget)
		d3.select(d3.event.currentTarget)
			.selectAll(".drawCanvas").each(function(){
				const inverted = inverseRelativeTransform(this, "svg")(screenCoord)
				addNode(svg, inverted, {}, _nodeEventHandlers, _populateNode)
			})
	})
	.call(addInputOutputNodes)
}
