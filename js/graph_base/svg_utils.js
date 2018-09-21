export function makeGridLines(selection, svgSize, minGridLines=100){
	const [width, height] = svgSize,
	increment = Math.min(...svgSize) / minGridLines,
	style = "fill: none; stroke: #ddd; shape-rendering: crispEdges; vector-effect: non-scaling-stroke;"
	const grid = selection.append("g").classed("gridLines", true)
	grid.append("g").selectAll("line")
		.data(d3.range(0, width + (increment/2), increment))
		.enter().append("line")
		.attr("x1", d=>d).attr("x2", d=>d)
		.attr("y1", 0).attr("y2", height)
		.attr("style", style)
	grid.append("g").selectAll("line")
		.data(d3.range(0, height + (increment/2), increment))
		.enter().append("line")
			.attr("y1", d=>d).attr("y2", d=>d)
			.attr("x1", 0).attr("x2", width)
			.attr("style", style)
}

export function addMarkerDef(svgSelection){
	const markers = {
		arrowEnd: s => s.append("path").attr("d", "M 0,0 m -5,-5 L 5,0 L -5,5 Z"),
		circleEnd: s => s.append("circle").attr("cx",0).attr("cy",0).attr("r",5)
	}
	svgSelection.append("defs").selectAll("marker")
		.data(Object.entries(markers))
			.enter().append("marker")
			.attr("id", d=>d[0])
			.attr("refX", 0).attr("refY", 0)
			.attr("orient", "auto")
			.attr("viewBox", "-5 -5 10 10")
			.attr("markerWidth", 3).attr("markerHeight", 3)
			.each(function(d){d[1](d3.select(this))})
}

// make n circles
export function makeSVGCircles(selection, n, diameterBetweenCircles=0.5){
	const xPos = i => 0.5+(0.5*diameterBetweenCircles)+(i*(1+diameterBetweenCircles))
	selection
		.append("rect")
		.attr("height", 1)
		.attr("width", Math.max(2,n) * (1+diameterBetweenCircles))
		.attr("fill", "none")
	return selection.selectAll("circle")
		.data(d3.range(n))
		.enter()
		.append("circle")
		.attr("cx", n==1? xPos(0.5) : xPos)
		.attr("cy", 0.5)
		.attr("r", 0.5)
		.datum(d => ({index: d}))
}




const _makePointTransformer = (svgEle, matrix) => ([x,y]) => {
	let point = svgEle.createSVGPoint()
	point.x = x
	point.y = y
	point = point.matrixTransform(matrix)
	return [point.x, point.y]
}
const _getCTMs = (target, endSelector) => {
	let end = target
	while(!end.matches(endSelector)){ end = end.parentElement }
	return {endT: end.getScreenCTM(), targetT: target.getScreenCTM()}
}

export function inverseRelativeTransform(target, endSelector="svg"){
	const {endT, targetT} = _getCTMs(target, endSelector),
	inv = targetT.inverse().multiply(endT) // is equivalent to `endT.inverse().multiply(targetT).inverse()`, but avoids an inverse
	return _makePointTransformer(target.ownerSVGElement, inv)
}

export function relativeTransform(target, endSelector="svg"){
	const {endT, targetT} = _getCTMs(target, endSelector),
	inv = endT.inverse().multiply(targetT)
	return _makePointTransformer(target.ownerSVGElement, inv)
}
