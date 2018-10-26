import {relativeTransform, makeSVGCircles} from './svg_utils.js'
import {valueHover} from './valueHover.js'

function createEdge(svgSelection){
	return svgSelection.select(".edgesGroup")
		.append("path")
		.attr("stroke-width", "0.5%")
		.attr("stroke", "black")
		.attr("marker-end", "url(#arrowEnd)") //"url(#circleEnd)")
		.style('fill', 'none')
}
function positionEdge(edgeSelection, x1,y1, x2,y2){
	const xBetween = Math.min(x1,x2) + (Math.abs(x2-x1) / 2)
	edgeSelection
		.attr('d', `M${x1},${y1} C${xBetween},${y1} ${xBetween},${y2} ${x2},${y2}`)
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
			const inContainer = inGoing.closest('.nodeContainer')
			const inName = inContainer.__data__.vertexName
    		const edgeElements = inGoing.ownerSVGElement.__data__.graphStructure.getIncidentEdgeElements(inName)
    		return edgeElements.some(e => {
    			const {node, index} = e.__data__.edgeRelation.to
    			return node === inContainer && index === inGoing.__data__.index
    		})
    	}
		if(lastPort === undefined ||
			portType(lastPort) === portType(this) ||
    		this.parentElement.parentElement === lastPort.parentElement.parentElement || 
    		alreadyIngoing()){
    		cache.edgeElement.remove()
    	} else {
	    	finalizeEdge(edge, cache.edgeElement, true)
    	}
    	delete(this.__dragCache)
    })

function finalizeEdge(edge, edgeElement, runDebug){
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
    		const getContainer = e => e.closest('.nodeContainer'),
			nodes = edge.map(getContainer),
			nodeNames = nodes.map(e => e.__data__.vertexName),
    		edgeRelation = {
    			from: 	{node: nodes[0], index: edge[0].__data__.index},
    			to: 	{node: nodes[1], index: edge[1].__data__.index}
    		}
    		// update edge position and register edge
    		updatePosition()
    		this.ownerSVGElement.__data__.graphStructure.addEdge(this, ...nodeNames)
    		return {updatePosition, edgeRelation}
		})
		.transition().attr("stroke-width", "0.25%")
	edgeElement.on('mouseover', function(){
		valueHover.mouseover(this)
		d3.select(this).transition()
				.attr("stroke-width", "1.5%").duration(100)
	})
	edgeElement.on('mouseout', function(){
		valueHover.mouseout()
		d3.select(this).transition()
				.attr("stroke-width", "0.25%").duration(100)
	})
	edgeElement.on('click', function(){
		d3.event.stopPropagation()
		const name = ft => this.__data__.edgeRelation[ft].node.__data__.vertexName
		this.ownerSVGElement.__data__.graphStructure.deleteEdge(name('from'), name('to'))
		if(runDebug){this.ownerSVGElement.__data__.debugModule()}
		this.remove()
		valueHover.mouseout()
	})
	if(runDebug){edgeElement.each(function(){this.ownerSVGElement.__data__.debugModule()})}
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
		const inScaleX = pd(bodyW, inBbox.width),
		inScaleY = Math.min(inScaleX, pd(bodyH, inBbox.height)),
		inTransY = (bodyH + inBbox.height) / inScaleY
		d3.select(inPort)
			.attr("transform", `scale(${[inScaleX, inScaleY]})translate(0,${inTransY})`)
		// transform .nodeOutPort
		const outScaleX = pd(bodyW, outBbox.width),
		outScaleY = Math.min(outScaleX, pd(bodyH, outBbox.height)),
		outTransY = -1 * outBbox.height
		d3.select(outPort)
			.attr("transform", `scale(${[outScaleX, outScaleY]})translate(0,${outTransY})`)
	})
}

// add node ports
export function giveNodePorts(nodeContainer, nInPorts, nOutPorts, runDebug=true){
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
		.on("mouseover", function(){
			this.ownerSVGElement.__data__.lastPortHovered = this
			valueHover.mouseover(this)
		})
		.on("mouseout", valueHover.mouseout)
	nodeContainer.call(scaleAndTranslatePorts)
	// remove old edge elements, add preexisting edge relations
	nodeContainer.each(function(){
		const container = this
		const {graphStructure, moduleMetaData} = container.ownerSVGElement.__data__
		if(moduleMetaData.inputNode === container){
			for(let i=0;i<nOutPorts;i++){
				const name = `INPUT_${i}`
				if(!moduleMetaData.inputDescriptions.hasOwnProperty(name)){
					moduleMetaData.inputDescriptions[name] = {
						selectedType: "tensor", shape: [], dtype: "float32", JSONtext: ""}
				}
			}
		}
		const edges = graphStructure.getIncidentEdgeElements(container.__data__.vertexName)
		const edgeRelations = edges.map(e => e.__data__.edgeRelation)
		const getName = v => v.__data__.vertexName
		edgeRelations.forEach(({from,to}) => graphStructure.deleteEdge(getName(from.node), getName(to.node)))
		edges.forEach(e => e.remove())
		edgeRelations.forEach(({from,to}) => {
			if(to.node === container && to.index >= nInPorts){ return; }
			if(from.node === container && from.index >= nOutPorts){ return; }
			const edgeElement = createEdge(d3.select(container.ownerSVGElement))
			const circleOut = graphStructure.V[getName(from.node)].querySelector('.nodeOutPort').children[1+from.index]
			const circleIn = graphStructure.V[getName(to.node)].querySelector('.nodeInPort').children[1+to.index]
			finalizeEdge([circleOut, circleIn], edgeElement, false)
		})
		if(runDebug){ container.ownerSVGElement.__data__.debugModule() }
	})
	return {inCircles, outCircles}
}

/**
 * 
 * @param {String} fromValRef of the form `node:index` 
 * @param {String} toValRef of the form `node:index`  
 * @param {boolean} debug whether to run debug or not 
 */
export function addEdge(fromValRef, toValRef, debug=false){
	const {svgElement} = this
	let [from, fromI] = fromValRef.split(':')
	from = svgElement.__data__.graphStructure.V[from]
	fromI = parseInt(fromI)
	let [to, toI] = toValRef.split(':')
	to = svgElement.__data__.graphStructure.V[to]
	toI = parseInt(toI)
	const edgeEle = createEdge(d3.select(svgElement))
	{
		const nOut = from.querySelector('.nodeOutPort').childElementCount-1
		if(nOut <= fromI){
			const nIn = from.querySelector('.nodeInPort').childElementCount-1
			giveNodePorts(d3.select(from), nIn, fromI+1, debug)
		}
	}
	{
		const nIn = to.querySelector('.nodeInPort').childElementCount-1
		if(nIn <= toI){
			const nOut = to.querySelector('.nodeOutPort').childElementCount-1
			giveNodePorts(d3.select(to), toI+1, nOut, debug)
		}
	}
	const fromCirc = from.querySelector('.nodeOutPort').children[fromI+1]
	const toCirc = to.querySelector('.nodeInPort').children[toI+1]
	finalizeEdge([fromCirc, toCirc], edgeEle, debug)
}
