
export function addSideBar(svgSelection){
	svgSelection.nodes().forEach(svgEle => {
		const sideBar = d3.select(svgEle).append('foreignObject')
			.classed('sideBar', true)
			.attr('x', 0).attr('y', 0)
			.attr('width', (_,i) => svgSelection.nodes()[i].getAttribute('width')*0.25)
			.attr('height', (_,i) => svgSelection.nodes()[i].getAttribute('height'))
			.on('click', () => d3.event.stopPropagation())
			.on('dblclick', () => d3.event.stopPropagation())
			.call(d3.drag().on('start', () => d3.event.sourceEvent.preventDefault()))
		const sideBarContent = sideBar.append('xhtml:div')
			.classed('sideBarContent', true)
			.style('width', '100%')
			.style('height', '100%')
			.style('background-color', 'f5f5f5')
		resetSideBarContent(svgEle)
	})
}

function resetSideBarContent(ownerSVG){
	const sideBarContent = ownerSVG.querySelector('.sideBarContent')
	sideBarContent.innerHTML = ''
}

function makeDeleteButton(ownerSVG, vertexName){
	const html = '<button type="button" class="btn btn-default btn-lg"> <span style="color:red;" class="glyphicon glyphicon-trash" aria-hidden="true"></span> </button>'
	const button = document.createRange().createContextualFragment(html).firstChild
	button.onclick = () => {
		const deletes = ownerSVG.__data__.graphStructure.deleteVertex(vertexName)
		deletes.forEach(e => e.remove())
		resetSideBarContent(ownerSVG)
	}
	return button
}

function makeAddInputButton(ownerSVG, vertexName){
	const html = '<button type="button" class="btn btn-default btn-lg"> <span style="color:black;" class="glyphicon glyphicon-plus" aria-hidden="true"></span> </button>'
	const button = document.createRange().createContextualFragment(html).firstChild
	button.onclick = () => {
		const container = ownerSVG.__data__.graphStructure.V[vertexName]
		const nIn = container.querySelector('.nodeInPort').querySelectorAll('circle').length
		const nOut = container.querySelector('.nodeOutPort').querySelectorAll('circle').length
		ownerSVG.__data__.givePorts(vertexName, nIn+1, nOut)
	}
	return button
}

function makeSubtractInputButton(ownerSVG, vertexName){
	const html = '<button type="button" class="btn btn-default btn-lg"> <span style="color:black;" class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button>'
	const button = document.createRange().createContextualFragment(html).firstChild
	button.onclick = () => {
		const container = ownerSVG.__data__.graphStructure.V[vertexName]
		const nIn = container.querySelector('.nodeInPort').querySelectorAll('circle').length
		const nOut = container.querySelector('.nodeOutPort').querySelectorAll('circle').length
		ownerSVG.__data__.givePorts(vertexName, Math.max(0,nIn-1), nOut)
	}
	return button
}

export function sideBarNodeManipulation(ownerSVG, vertexName){
	const sideBarContent = ownerSVG.querySelector('.sideBarContent')
	sideBarContent.innerHTML = ''
	sideBarContent.innerText = vertexName
	sideBarContent.appendChild(makeDeleteButton(ownerSVG, vertexName))
	sideBarContent.appendChild(makeSubtractInputButton(ownerSVG, vertexName))
	sideBarContent.appendChild(makeAddInputButton(ownerSVG, vertexName))
}