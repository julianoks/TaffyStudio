import {primitives} from '../../deps/Taffy/src/index.js'
import {makeChangePortButton, makeDeleteButton} from './nodeInteraction.js'


export function addSideBar(svgSelection, size){
	svgSelection.nodes().forEach(svgEle => {
		const sideBar = d3.select(svgEle.parentElement)
			.insert('div', 'svg').classed('sideBar', true)
			.style('float', 'left')
			.style('width', size[0])
			.style('height', size[1])
			.style('background-color', 'ffffff')
			.style('border', '1px solid black')
		resetSideBar(svgEle)
	})
}

function resetSideBar(ownerSVG){
	const sideBar = ownerSVG.parentElement.querySelector('.sideBar')
	sideBar.innerHTML = ''
}

function makeOperationDropdown(ownerSVG, vertexName){
	let select = document.createElement('select')
	select.className = 'custom-select'
	const firstOption = '<option value="" disabled selected>Select...</option>'
	select.appendChild(document.createRange().createContextualFragment(firstOption))
	const operations = Object.entries(primitives)
		.map(([a,{name}]) => [a, name])
		.filter(([,name]) => name !== 'placeholder')
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
		const nInputs = primitives[this.value].doc.input.length,
		nOutputs = primitives[this.value].doc.output.length
		ownerSVG.__data__.givePorts(vertexName, nInputs, nOutputs)
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
	<div class="panel-heading">
		<h3 class="panel-title">Documentation for <b><i>${op}</i></b></h3>
	</div>
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
	const listNoClass = items => {
		const list = _makeListFromItems(items)
		list.className = ''
		Array.from(list.children).forEach(li => {li.className = ''})
		return list
	}
	opdoc.querySelector('#inputListHolder').appendChild(listNoClass(input))
	opdoc.querySelector('#outputListHolder').appendChild(listNoClass(output))
	return opdoc
}


function makeLiteralsCard(ownerSVG, vertexName){
	// make initial list
	const list = _makeListFromItems([])
	const addListItem = () => {
		let li = document.createElement('li')
		li.className = 'list-group-item'
		const textbox = document.createElement('input')
		textbox.className = 'form-control'
		textbox.oninput = function(){
			ownerSVG.__data__.nodeMetaData[vertexName].literal = Array.from(
				this.parentElement.parentElement.children)
					.map(e => e.firstChild.value)
		}
		li.appendChild(textbox)
		list.appendChild(li)
		return li
	}
	if(ownerSVG.__data__.nodeMetaData[vertexName].literal.length === 0){
		addListItem()
	} else {
		ownerSVG.__data__.nodeMetaData[vertexName].literal
			.map(v => {addListItem().value = v})
	}
	// put the list in a panel
	const panelHTML = '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Literals</h3></div> <div class="panel-body"></div> </div>'
	const panel = document.createRange().createContextualFragment(panelHTML).firstChild
	const buttonHTML = '<button style="float:right;" type="button" class="btn btn-default"> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> New Literal</button>'
	const button = document.createRange().createContextualFragment(buttonHTML).firstChild
	button.onclick = addListItem
	panel.querySelector('.panel-body').appendChild(list)
	panel.querySelector('.panel-body').appendChild(button)
	return panel
}



function makeManipulationCard(ownerSVG, vertexName, op){
	let card = document.createElement('div')
	card.className = 'card'
	let listItems = []
	if(op === "INPUTS"){
		listItems = [
			['Module Inputs'],
			['Number of Inputs ', makeChangePortButton(ownerSVG, vertexName, false, false), makeChangePortButton(ownerSVG, vertexName, true, false)]
		]
	} else if (op === "OUTPUTS"){
		listItems = [
			['Module Outputs'],
			['Number of Outputs ', makeChangePortButton(ownerSVG, vertexName, false, true), makeChangePortButton(ownerSVG, vertexName, true, true)]
		]
	} else {
		listItems = [
			['Name ', makeNodeNameBox(ownerSVG, vertexName)],
			['Operation ', makeOperationDropdown(ownerSVG, vertexName)],
			['Change Arity ', makeChangePortButton(ownerSVG, vertexName, false, true), makeChangePortButton(ownerSVG, vertexName, true, true)],
			['Delete Node ', makeDeleteButton(ownerSVG, vertexName)],
		]
	}
	const list = _makeListFromItems(listItems)
	list.className += ' list-group-flush'

	card.appendChild(list)
	return card
}

export function sideBarNodeManipulation(ownerSVG, vertexName){
	const sideBar = ownerSVG.parentElement.querySelector('.sideBar')
	sideBar.innerHTML = ''
	const op = ownerSVG.__data__.nodeMetaData[vertexName].op // may be "INPUTS", "OUTPUTS", "literals", or others
	
	sideBar.appendChild(makeManipulationCard(ownerSVG, vertexName, op))

	if(op !== "INPUTS" && op !== "OUTPUTS"){
		sideBar.appendChild(makeOpDocCards(ownerSVG, vertexName))
	}

	if(op === "literals"){
		sideBar.appendChild(makeLiteralsCard(ownerSVG, vertexName))
	}
}
