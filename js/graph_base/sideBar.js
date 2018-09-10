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
	const firstOption = '<option value="" disabled selected>Select...</option>'
	select.appendChild(document.createRange().createContextualFragment(firstOption))
	const operations = Object.entries(primitives)
		.map(([a,{name}]) => [a, name])
		.sort(([,a],[,b]) => a<b? -1 : 1)
	operations.forEach(([identifier, name]) => {
		let option = document.createElement('option')
		option.value = identifier
		option.innerHTML = name
		if(identifier === ownerSVG.__data__.nodeMetaData[vertexName].op){
			option.selected = 'selected'
		}
		select.appendChild(option)
	})
	select.oninput = function(){
		ownerSVG.__data__.nodeMetaData[vertexName].op = this.value
		sideBarNodeManipulation(ownerSVG, vertexName)
	}
	return select
}

function makeNodeNameBox(ownerSVG, vertexName){
	const initValue = ownerSVG.__data__.nodeMetaData[vertexName].userProvidedName
	const html = `<input class="form-control" id="vertexName" value="${initValue}">`
	const box = document.createRange().createContextualFragment(html).firstChild
	box.oninput = function(){
		ownerSVG.__data__.nodeMetaData[vertexName].userProvidedName = this.value
	}
	return box
}

function makeManipulationCard(ownerSVG, vertexName){
	let card = document.createElement('div')
	card.className = 'card'
	const listItems = [
		['Name ', makeNodeNameBox(ownerSVG, vertexName)],
		['Operation ', makeOperationDropdown(ownerSVG, vertexName)],
		['Change Arity ', makeSubtractInputButton(ownerSVG, vertexName), makeAddInputButton(ownerSVG, vertexName)],
		['Delete Node ', makeDeleteButton(ownerSVG, vertexName)],
	]
	const list = _makeListFromItems(listItems)
	list.className += ' list-group-flush'

	card.appendChild(list)
	return card
}




function _makeListFromItems(listItems){
	let list = document.createElement('ul')
	list.className = 'list-group'
	listItems
		.map(e => Array.isArray(e)? e : [e])
		.forEach(cols => {
			let li = document.createElement('li')
			li.className = 'list-group-item'
			cols
				.map(e => typeof e === 'string'? document.createTextNode(e) : e)
				.forEach(e => li.appendChild(e))
			list.appendChild(li)
		})
	return list
}

function makeOpDocCards(ownerSVG, vertexName){
	const op = ownerSVG.__data__.nodeMetaData[vertexName].op
	if(!primitives.hasOwnProperty(op)){
		const div = document.createElement('div')
		div.style.display = 'none'
		return div
	}
	const {doc, input, output} = primitives[op].doc
	const html = `
	<div class="panel panel-default">
	  <div class="panel-heading">Documentation for <b><i>${op}</i></b></div>
	  <div class="panel-body">
	    <p>${doc}</p>
	  </div>
	  <ul class="list-group">
	    <li class="list-group-item">Input <br>
	    	<div id="inputListHolder"></div>
	    </li>
	    <li class="list-group-item">Output <br>
	    	<div id="outputListHolder"></div>
	    </li>
	  </ul>
	</div>`
	const opdoc = document.createRange().createContextualFragment(html)
	opdoc.querySelector('#inputListHolder').appendChild(_makeListFromItems(input))
	opdoc.querySelector('#outputListHolder').appendChild(_makeListFromItems(output))
	return opdoc
}

export function sideBarNodeManipulation(ownerSVG, vertexName){
	const sideBarContent = ownerSVG.querySelector('.sideBarContent')
	sideBarContent.innerHTML = ''
	sideBarContent.appendChild(makeManipulationCard(ownerSVG, vertexName))
	sideBarContent.appendChild(makeOpDocCards(ownerSVG, vertexName))
}
