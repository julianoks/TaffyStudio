import {primitives} from '../../deps/Taffy/src/index.js'
import {makeChangePortButton, makeDeleteButton} from './nodeInteraction.js'
import {sideBarNodeManipulation} from './sideBar.js'

function _makeListFromItems(listItems){
    let list = document.createElement('ul')
    list.className = 'list-group'
    listItems
        .map(e => Array.isArray(e)? e : [e])
        .forEach(cols => {
            let li = document.createElement('li')
			li.className = 'list-group-item'
			let table = document.createElement('table')
			let tr = document.createElement('tr')
            cols
                .map(e => typeof e === 'string'? document.createTextNode(e) : e)
                .forEach(e => {
					let td = document.createElement('td')
					td.appendChild(e)
					tr.appendChild(td)
				})
			table.appendChild(tr)
			li.appendChild(table)
            list.appendChild(li)
        })
    return list
}

function getOpDoc(ownerSVG, opName){
	if(primitives.hasOwnProperty(opName)){
		return primitives[opName].doc
	}
	// otherwise we find the module's opDoc
	const moduleSVG = Array.from(ownerSVG.closest('.studio').querySelectorAll('.modulesHolder > .moduleHolder > svg'))
		.map(svg => svg.__data__).find(d => d.moduleMetaData.name===opName)
	if(moduleSVG===undefined){throw `Operation "${opName}" is not a primitive or module`}	
	return moduleSVG.getTaffyModule().doc
}

export function makeOperationDropdown(ownerSVG, vertexName){
	let select = document.createElement('select')
	select.className = 'custom-select'
	const firstOption = '<option value="" disabled selected>Select...</option>'
	select.appendChild(document.createRange().createContextualFragment(firstOption))
	const importedOps = ownerSVG.__data__.moduleMetaData.imports.map(a=>[a,a])
	const primitiveOps = Object.entries(primitives)
		.map(([a,{name}]) => [a, name])
		.filter(([,name]) => name !== 'placeholder')
		.sort(([,a],[,b]) => a<b? -1 : 1)
	importedOps.concat(primitiveOps)
		.forEach(([identifier, name]) => {
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
		const opdoc = getOpDoc(ownerSVG, this.value)
		const nInputs = opdoc.input.length
		const nOutputs = opdoc.output.length
		ownerSVG.__data__.givePorts(vertexName, nInputs, nOutputs)
		sideBarNodeManipulation(ownerSVG, vertexName)
		ownerSVG.__data__.debugModule()
	}
	return select
}


export function makeNodeNameBox(ownerSVG, vertexName){
	const initValue = ownerSVG.__data__.nodeMetaData[vertexName].userProvidedName
	const html = `<input class="form-control" id="vertexName" value="${initValue}">`
	const box = document.createRange().createContextualFragment(html).firstChild
	box.oninput = function(){
		ownerSVG.__data__.nodeMetaData[vertexName].userProvidedName = this.value
	}
	return box
}

export function makeManipulationCard(ownerSVG, vertexName, op){
	let card = document.createElement('div')
	card.className = 'card'
	let listItems = []
	const makePB = (isAdd, isIn) => makeChangePortButton(ownerSVG, vertexName, isAdd, isIn)
	const space = () => document.createTextNode('\u00A0')
	if(op === "INPUTS"){
		listItems = [
			['Module Inputs'],
			['Number of Inputs',space(), makePB(false, false), makePB(true, false)]
		]
	} else if (op === "OUTPUTS"){
		listItems = [
			['Module Outputs'],
			['Number of Outputs',space(), makePB(false, true), makePB(true, true)]
		]
	} else {
		listItems = [
			['Name',space(), makeNodeNameBox(ownerSVG, vertexName)],
			['Operation',space(), makeOperationDropdown(ownerSVG, vertexName)],
			['Change Arity',space(), makePB(false, true), makePB(true, true)],
			['Delete Node',space(), makeDeleteButton(ownerSVG, vertexName)],
		]
	}
	const list = _makeListFromItems(listItems)
	list.className += ' list-group-flush'

	card.appendChild(list)
	return card
}



export function makeOpDocCards(ownerSVG, vertexName){
	const op = ownerSVG.__data__.nodeMetaData[vertexName].op
	const {doc, input, output} = getOpDoc(ownerSVG, op)
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

export function makeLiteralsCard(ownerSVG, vertexName){
	// make initial list
	const list = _makeListFromItems([])
	const addListItem = () => {
		let li = document.createElement('li')
		li.className = 'list-group-item'
		const textbox = document.createElement('input')
		textbox.className = 'form-control'
		textbox.oninput = () => {
			const nLiteralsCommited = ownerSVG.__data__.nodeMetaData[vertexName].literal
			if(list.childElementCount !== nLiteralsCommited){
				ownerSVG.__data__.givePorts(vertexName, 0, list.childElementCount)
			}
			ownerSVG.__data__.nodeMetaData[vertexName].literal = 
				Array.from(list.children).map(e => e.firstChild.value)
		}
		li.appendChild(textbox)
		list.appendChild(li)
		const nLiteralsCommited = ownerSVG.__data__.nodeMetaData[vertexName].literal.length
		ownerSVG.__data__.givePorts(vertexName, 0, nLiteralsCommited)
		return textbox
	}
	if(ownerSVG.__data__.nodeMetaData[vertexName].literal.length === 0){
		addListItem()
	} else {
		ownerSVG.__data__.nodeMetaData[vertexName].literal
			.forEach(v => { addListItem().value = v })
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