import {relativeTransform, makeSVGCircles} from './svg_utils.js'

function createEdge(svgSelection){
	return svgSelection.select(".edgesGroup")
		.append("line")
		.attr("stroke-width", "0.5%")
		.attr("stroke", "black")
		.attr("marker-end", "url(#arrowEnd)") //"url(#circleEnd)")
}
function positionEdge(edgeSelection, x1,y1, x2,y2){
	edgeSelection
		.attr("x1",x1).attr("y1",y1)
		.attr("x2",x2).attr("y2",y2)
}




const portDragBehavior = d3.drag()
    .on("start", function(d){
    	//d3.event.sourceEvent.stopPropagation()
    	this.__dragCache = {
    		isOutgoing: null,
    		relativePosition: null,
    		edgeElement: null,
    		setPosition: null,
    		mouseEnterAction: null,
    		mouseLeaveAction: null
    	}
    	let cache = this.__dragCache

    	cache.isOutgoing = this.parentElement.matches(".nodeOutPort")
    	cache.relativePosition = relativeTransform(this, ".drawCanvas")
    	cache.edgeElement = createEdge(d3.select(this.ownerSVGElement))

    	const startPos = cache.relativePosition([+this.getAttribute("cx"), +this.getAttribute("cy")])
    	if(cache.isOutgoing){
    		cache.setPosition = endPos => positionEdge(cache.edgeElement, ...startPos, ...endPos)
    	}else{
    		cache.setPosition = endPos => positionEdge(cache.edgeElement, ...endPos, ...startPos)
    	}
    	cache.setPosition(startPos)

    	const nodeContainer = this.parentElement.parentElement.parentElement,
    	mouseEnterFn = nodeContainer.__on.find(({type}) => type=='mouseenter').value,
    	mouseLeaveFn = nodeContainer.__on.find(({type}) => type=='mouseleave').value
    	cache.mouseEnterAction = () => mouseEnterFn(nodeContainer, true)
    	cache.mouseLeaveAction = () => mouseLeaveFn(nodeContainer, true)
	})
    .on("drag", function(d){
    	const cache = this.__dragCache,
    	currentPos = cache.relativePosition([d3.event.x, d3.event.y])
    	cache.setPosition(currentPos)
    	cache.mouseEnterAction()
	})
    .on("end", function(d){
    	const cache = this.__dragCache
    	cache.mouseLeaveAction()
    	const lastPort = this.ownerSVGElement.__data__.lastPortHovered
    	const portType = e => e.parentElement.className.baseVal
    	const edge = cache.isOutgoing? [this, lastPort] : [lastPort, this]
    	const alreadyIngoing = () => {
    		const inGoing = edge[1]
    		const inName = inGoing.parentElement.parentElement.parentElement.__data__.vertexName
    		const edgeElements = inGoing.ownerSVGElement.__data__.graphStructure.getIncidentEdgeElements(inName)
    		return edgeElements.some(e => {
    			const {node, index} = e.__data__.edgeRelation.to
    			return node === inName && index === inGoing.__data__.index
    		})
    	}
    	if(portType(lastPort) === portType(this) ||
    		this.parentElement.parentElement === lastPort.parentElement.parentElement || 
    		alreadyIngoing()){
    		cache.edgeElement.remove()
    	} else {
	    	finalizeEdge(edge, cache.edgeElement)
    	}
    	delete(this.__dragCache)
    })

function finalizeEdge(edge, edgeElement){
	const updatePositionFn = edgeEle => () => {
		const [vin,vout] = edge,
		fromC = [+vin.getAttribute("cx"), +vin.getAttribute("cy")],
		from = relativeTransform(vin, ".drawCanvas")(fromC),
		toC = [+vout.getAttribute("cx"), +vout.getAttribute("cy")],
		to = relativeTransform(vout, ".drawCanvas")(toC)
		positionEdge(d3.select(edgeEle), ...from, ...to)
	}
	edgeElement
		.datum(function(){
    		const updatePosition = updatePositionFn(this)
    		const getContainer = e => e.parentNode.parentNode.parentNode,
    		nodeNames = edge.map(getContainer).map(e => e.__data__.vertexName),
    		edgeRelation = {
    			from: 	{node: nodeNames[0], index: edge[0].__data__.index},
    			to: 	{node: nodeNames[1], index: edge[1].__data__.index}
    		}
    		// update edge position and register edge
    		updatePosition()
    		this.ownerSVGElement.__data__.graphStructure.addEdge(this, ...nodeNames)
    		return {updatePosition, edgeRelation}
		})
		.each(function(){this.ownerSVGElement.__data__.debugModule()})
		.transition().attr("stroke-width", "0.25%")
}

// position ports
function scaleAndTranslatePorts(nodeContainerSelection){
	const pd = (a,b) => b==0? 1 : a/b
	nodeContainerSelection.each(function(){
		const container = this,
		body = d3.select(container).select(".nodeBody").node(),
		bodyW = +body.getAttribute("width"),
		bodyH = +body.getAttribute("height"),
		inPort = d3.select(container).select(".nodeInPort").node(),
		outPort = d3.select(container).select(".nodeOutPort").node(),
		inBbox = inPort.getBBox(),
		outBbox = outPort.getBBox()
		// transform .nodeInPort
		const inScale = pd(bodyW, inBbox.width),
		inTransY = (bodyH + inBbox.height) / inScale
		d3.select(inPort)
			.attr("transform", `scale(${inScale})translate(0,${inTransY})`)
		// transform .nodeOutPort
		const outScale = pd(bodyW, outBbox.width),
		outTransY = -1 * outBbox.height
		d3.select(outPort)
			.attr("transform", `scale(${outScale})translate(0,${outTransY})`)
	})
}

// add node ports
export function giveNodePorts(nodeContainer, nInPorts, nOutPorts){
	// make the circles
	const inPort = nodeContainer.select(".nodeInPort")
	inPort.selectAll('*').remove()
	const inCircles = makeSVGCircles(inPort, nInPorts)
	const outPort = nodeContainer.select(".nodeOutPort")
	outPort.selectAll('*').remove()
	const outCircles = makeSVGCircles(outPort, nOutPorts)
	// stylize circles, add dragging and mouseover behavior
	inCircles
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.call(portDragBehavior)
		.on("mouseover", function(){this.ownerSVGElement.__data__.lastPortHovered = this})
	outCircles
		.attr("fill", "white").attr("stroke", "black").attr("stroke-width", 0.2)
		.call(portDragBehavior)
		.on("mouseover", function(){this.ownerSVGElement.__data__.lastPortHovered = this})
	nodeContainer.call(scaleAndTranslatePorts)
	// remove old edge elements, add preexisting edge relations
	nodeContainer.each(function(){
		const container = this
		const {graphStructure} = container.ownerSVGElement.__data__
		const edges = graphStructure.getIncidentEdgeElements(container.__data__.vertexName)
		const edgeRelations = edges.map(e => e.__data__.edgeRelation)
		edgeRelations.forEach(({from,to}) => graphStructure.deleteEdge(from.node, to.node))
		edges.forEach(e => e.remove())
		edgeRelations.forEach(({from,to}) => {
			if(to.node === container.__data__.vertexName && to.index >= nInPorts){ return; }
			if(from.node === container.__data__.vertexName && from.index >= nOutPorts){ return; }
			const edgeElement = createEdge(d3.select(container.ownerSVGElement))
			const circleOut = graphStructure.V[from.node].querySelector('.nodeOutPort').children[1+from.index]
			const circleIn = graphStructure.V[to.node].querySelector('.nodeInPort').children[1+to.index]
			finalizeEdge([circleOut, circleIn], edgeElement)
		})
		container.ownerSVGElement.__data__.debugModule()
	})
	return {inCircles, outCircles}
}
