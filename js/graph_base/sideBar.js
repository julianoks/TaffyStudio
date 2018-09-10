import {primitives} from '../../deps/Taffy/src/ops/operations.js'

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


function _getNumInputsOutputs(ownerSVG, vertexName){
	const container = ownerSVG.__data__.graphStructure.V[vertexName]
	const nIn = container.querySelector('.nodeInPort').querySelectorAll('circle').length
	const nOut = container.querySelector('.nodeOutPort').querySelectorAll('circle').length
	return {nIn, nOut}
}
function makeAddInputButton(ownerSVG, vertexName){
	const html = '<button type="button" class="btn btn-default btn-med"> <span style="color:black;" class="glyphicon glyphicon-plus" aria-hidden="true"></span> </button>'
	const button = document.createRange().createContextualFragment(html).firstChild
	button.onclick = () => {
		const {nIn, nOut} = _getNumInputsOutputs(ownerSVG, vertexName)
		ownerSVG.__data__.givePorts(vertexName, nIn+1, nOut)
	}
	return button
}
function makeSubtractInputButton(ownerSVG, vertexName){
	const html = '<button type="button" class="btn btn-default btn-med"> <span style="color:black;" class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button>'
	const button = document.createRange().createContextualFragment(html).firstChild
	button.onclick = () => {
		const {nIn, nOut} = _getNumInputsOutputs(ownerSVG, vertexName)
		ownerSVG.__data__.givePorts(vertexName, Math.max(0,nIn-1), nOut)
	}
	return button
}


function makeOperationDropdown(ownerSVG, vertexName){
	let select = document.createElement('select')
	select.className = 'custom-select'
	const operations = Object.entries(primitives)
		.map(([a,{name}]) => [a, name])
		.sort(([,a],[,b]) => a<b? -1 : 1)
	operations.forEach(([identifier, name]) => {
		let option = document.createElement('option')
		option.value = identifier
		option.innerHTML = name
		select.appendChild(option)
	})
	return select
}

function makeNodeNameBox(ownerSVG, vertexName){
	const html = `<input class="form-control" id="vertexName" value="${vertexName}">`
	return document.createRange().createContextualFragment(html).firstChild
}

function makeManipulationCard(ownerSVG, vertexName){
	let card = document.createElement('div')
	card.className = 'card'
	let list = document.createElement('ul')
	list.className = 'list-group list-group-flush'

	const listItems = [
		[document.createTextNode('Name '), makeNodeNameBox(ownerSVG, vertexName)],
		[document.createTextNode('Operation '), makeOperationDropdown(ownerSVG, vertexName)],
		[document.createTextNode('Change Arity '), makeSubtractInputButton(ownerSVG, vertexName), makeAddInputButton(ownerSVG, vertexName)],
		[document.createTextNode('Delete Node '), makeDeleteButton(ownerSVG, vertexName)],
	]
	listItems.forEach(cols => {
		let li = document.createElement('li')
		li.className = 'list-group-item'
		cols.forEach(e => li.appendChild(e))
		list.appendChild(li)
	})

	card.appendChild(list)
	return card
}

export function sideBarNodeManipulation(ownerSVG, vertexName){
	const sideBarContent = ownerSVG.querySelector('.sideBarContent')
	sideBarContent.innerHTML = ''
	sideBarContent.appendChild(makeManipulationCard(ownerSVG, vertexName))
}
