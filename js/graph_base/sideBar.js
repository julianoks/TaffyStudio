
export function addSideBar(svg){
	svg.nodes().forEach(svgEle => {
		const sideBar = d3.select(svgEle).append('foreignObject')
			.classed('sideBar', true)
			.attr('x', 0).attr('y', 0)
			.attr('width', (_,i) => svg.nodes()[i].getAttribute('width')*0.25)
			.attr('height', (_,i) => svg.nodes()[i].getAttribute('height'))
			.on('click', () => d3.event.stopPropagation())
		const sideBarContent = sideBar.append('xhtml:div')
			.classed('sideBarContent', true)
			.style('width', '100%')
			.style('height', '100%')
			.style('background-color', 'f5f5f5')
	})
}
