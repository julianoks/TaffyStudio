import {giveNodePorts} from './give_ports.js'
import {inverseRelativeTransform} from './svg_utils.js'
import {sideBarNodeManipulation} from '../sidebar/sideBar.js'

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
function addNode(svgSelection, coords, nodeParam, eventHandlers, populateNode, name=undefined){
	// unpack nodeParam and eventHandlers
	const svgScale = Math.min(+svgSelection.node().getAttribute('width'), +svgSelection.node().getAttribute('height')),
	defaultNodeParam = Object.entries({width: 0.12, height: 0.06, rounding: 0.005})
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
			const vertexName = this.ownerSVGElement.__data__.graphStructure.addVertex(this, name)
			return {
				vertexName,
				addText: text => addTextToGuts(d3.select(this), text)
			}
		})
	nodePorts.classed("nodePorts", true)
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
	nodeContainer.each(function({vertexName}){
		// add node's metadata to the graph
		this.ownerSVGElement.__data__.nodeMetaData[vertexName] = {
			op: undefined,
			literal: []
		}
		// focus the sidebar on the newly created node
		sideBarNodeManipulation(this.ownerSVGElement, vertexName)
	})
	// upon completion call populateNode callback on node, rescale ports
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
			//.style('visibility', 'inherit')
		s.select(".nodePorts")
			.transition().style("opacity", 1)
	},
	mouseLeave: ele => {
		/*
		const s = d3.select(ele)
		s.select(".nodeGuts")
			.transition().style("opacity", 0.5)
			//.style('visibility', 'hidden')
		s.select(".nodePorts")
			.transition().style("opacity", 0.5)
		*/
	},
	click: ele => {
		sideBarNodeManipulation(ele.ownerSVGElement, ele.__data__.vertexName)
	}
}
const _populateNode = container => {
	container
		.call(s => giveNodePorts(s, 0, 0))
		.select(".nodeBody")
			.attr("fill", "#bac5dd")
			.attr("stroke-width", "2px")
			.attr("stroke", "#828a9b")
}

const addTextToGuts = (container, text) => {
	container.select('.nodeGuts').html('')
		.append('xhtml:div')
		.style('width', '100%')
		.style('height', '100%')
		.style('display', 'table')
			.append('div')
			.style('display', 'table-cell')
			.style('text-align', 'center')
			.style('vertical-align', 'middle')
			.style('font-weight', '500')
			.text(text)
}


function addInputOutputNodes(svgSelection){
	const unscaledNodeParam = {width: 0.25, height: 0.05, rounding: 0.005}
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
				.call(s => giveNodePorts(s, 0, 1, false))
				.each(function({vertexName}){
					this.ownerSVGElement.__data__.nodeMetaData[vertexName].op = "INPUTS"
				})
			container.select(".nodeBody")
				.attr("fill", "#ebaaea")
				.attr("stroke-width", "2px")
				.attr("stroke", "#897e9f")
			container.call(s => addTextToGuts(s, 'Inputs'))
			svgEle.__data__.moduleMetaData.inputNode = container.node()
		}
		addNode(d3.select(svgEle), [xPos, bottomYPos], nodeParam, _nodeEventHandlers, populateInput, 'Inputs')
		// output
		const populateOutput = container => {
			container
				.call(s => giveNodePorts(s, 1, 0, false))
				.each(function({vertexName}){
					this.ownerSVGElement.__data__.nodeMetaData[vertexName].op = "OUTPUTS"
				})
			container.select(".nodeBody")
				.attr("fill", "#ebaaea")
				.attr("stroke-width", "2px")
				.attr("stroke", "#897e9f")
			container.call(s => addTextToGuts(s, 'Outputs'))
			svgEle.__data__.moduleMetaData.outputNode = container.node()
		}
		addNode(d3.select(svgEle), [xPos, topYPos], nodeParam, _nodeEventHandlers, populateOutput, 'Outputs')
		sideBarNodeManipulation(svgEle, 'Inputs')
	})
}

// add click event to SVG for creating nodes
export function addNodes(svg){
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

export function addNodeNoGUI(coords, op, literal, name){
	const {svgElement, nodeMetaData} = this
	const node = addNode(d3.select(svgElement),
			coords, {}, _nodeEventHandlers, _populateNode, name)
		.call(s => addTextToGuts(s, op))
		.each(({vertexName}) => {
			nodeMetaData[vertexName] = {op, literal}
		})
	if(op==='literals'){svgElement.__data__.setNodeColor(name, 'rgba(255,255,255,0.5)')}
	return node
}
