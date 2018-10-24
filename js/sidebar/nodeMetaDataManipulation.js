import {primitives} from '../../deps/Taffy/src/index.js'
import {makeChangePortButton, makeDeleteButton} from './nodeInteraction.js'
import {sideBarNodeManipulation} from './sideBar.js'

function valid_C_identifier(str){
	const match = str.match(/[_a-zA-Z][_a-zA-Z0-9]*/)
	return match !== null && str === str.match(/[_a-zA-Z][_a-zA-Z0-9]*/)[0]
}

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
	const moduleSVG = ownerSVG.closest('.studio').__data__.moduleHolders[opName].querySelector('svg')
	if(moduleSVG===undefined){throw `Operation "${opName}" is not a primitive or module`}
	if(moduleSVG.__data__.moduleMetaData.doc){
		return moduleSVG.__data__.moduleMetaData.doc
	}
	try { return moduleSVG.__data__.getTaffyModule().doc }
	catch(e) {
		ownerSVG.__data__.handleFailedPull(e)
		return {input:[],output:[],doc:'Failure while compiling module'}
	}
}

export function makeOperationDropdown(ownerSVG, vertexName){
	let select = document.createElement('select')
	select.className = 'form-control'
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
		ownerSVG.__data__.graphStructure.V[vertexName].__data__.addText(this.value)
		const opdoc = getOpDoc(ownerSVG, this.value)
		const nInputs = opdoc.input.length
		const nOutputs = opdoc.output.length
		ownerSVG.__data__.givePorts(vertexName, nInputs, nOutputs)
		sideBarNodeManipulation(ownerSVG, vertexName)
		ownerSVG.__data__.debugModule()
	}
	return select
}

function changeVertexName(svgData, oldName, newName){
	// update graphStructure
	svgData.graphStructure.changeVertexName(oldName, newName)
	// update container
	svgData.graphStructure.V[newName].__data__.vertexName = newName
	// update nodeMetaData
	const meta = svgData.nodeMetaData[oldName]
	delete svgData.nodeMetaData[oldName]
	svgData.nodeMetaData[newName] = meta
}
export function makeNodeNameBox(ownerSVG, vertexName){
	const html = `<input class="form-control" id="vertexName" value="${vertexName}">`
	const inp = document.createRange().createContextualFragment(html).firstChild
	inp.oninput = function(){
		inp.setCustomValidity('')
		inp.reportValidity()
		if(this.value === vertexName){
			ownerSVG.__data__.graphStructure.V[this.value].__data__.addText(this.value)
			return
		}
		if(!valid_C_identifier(this.value)){
			inp.setCustomValidity(`"${this.value}" is not a valid C identifier`)
			inp.reportValidity()
			return
		}
		try {
			if(this.value.startsWith('INPUT_') || 
				["DEBUG", "LITERALS", "Inputs", "Outputs"].includes(this.value)){ throw "taken" }
			changeVertexName(ownerSVG.__data__, vertexName, this.value)
			ownerSVG.__data__.graphStructure.V[this.value].__data__.addText(this.value)
		} catch(e){
			inp.setCustomValidity(`The name "${this.value}" is already taken`)
			inp.reportValidity()
			return
		}
		sideBarNodeManipulation(ownerSVG, this.value)
		const nextBox = ownerSVG.closest('.moduleHolder').querySelector('.sideBar #vertexName')
		nextBox.focus()
		nextBox.value = ''
		nextBox.value = this.value
	}
	return inp
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
			['Arguments',space(), makePB(false, true), makePB(true, true)],
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
		const textbox = document.createElement('textarea')
		textbox.className = 'form-control'
		textbox.oninput = () => {
			const nLiteralsCommited = ownerSVG.__data__.nodeMetaData[vertexName].literal
			if(list.childElementCount !== nLiteralsCommited){
				ownerSVG.__data__.givePorts(vertexName, 0, list.childElementCount)
			}
			textbox.setCustomValidity('')
			textbox.reportValidity()
			let newLiterals = []
			for(const box of list.children){
				try {
					newLiterals.push(JSON.parse(box.firstChild.value))
				} catch(e) {
					textbox.setCustomValidity("Couldn't parse JSON")
					textbox.reportValidity()
					return
				}
			}
			ownerSVG.__data__.nodeMetaData[vertexName].literal = newLiterals
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
			.forEach(v => { addListItem().value = JSON.stringify(v) })
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

export function makeFunctionCard(ownerSVG, vertexName){
	if(ownerSVG.__data__.nodeMetaData[vertexName].literal.length == 0){
		ownerSVG.__data__.nodeMetaData[vertexName].literal = ['() => {}']
	}
	const fnVal = ownerSVG.__data__.nodeMetaData[vertexName].literal[0]
	const panelHTML = `<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Function</h3></div> <div class="panel-body"><textarea rows="5" class="form-control">${fnVal}</textarea></div> </div>`
	const panel = document.createRange().createContextualFragment(panelHTML).firstChild
	const textbox = panel.querySelector('textarea')
	textbox.oninput = function(){
		ownerSVG.__data__.nodeMetaData[vertexName].literal = [this.value]
		ownerSVG.__data__.debugModule()
	}
	return panel
}
