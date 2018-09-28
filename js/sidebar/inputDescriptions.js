import {getNumInputsOutputs} from './nodeInteraction.js'

function parseToIntArray(str){
	const ints = str.replace(/\[|\]|\(|\)/g, '')
		.replace(/,/g,' ')
		.split(/\s+/).filter(s=>s !== '')
		.map(i => parseInt(i))
	return ints.includes(NaN)? false : ints
}

function makeInputDescRow(oninput, shape=[], dtype='float32'){
	let li = document.createElement('li')
	li.className = 'list-group-item'
	// dtypeSelector
	let dtypeSelector = document.createElement('select')
	const options = ['float32', 'int32']
	options.forEach(name => {
		const option = document.createElement('option')
		option.value = name
        option.innerText = name
        if(dtype===name){ option.selected = true }
		dtypeSelector.appendChild(option)
	})
	dtypeSelector.oninput = oninput
	// shapeTextBox
	let shapeTextBox = document.createElement('input')
    shapeTextBox.setAttribute('placeholder', 'e.g. "1, 2, 3"')
    shapeTextBox.value = shape.join(', ')
	shapeTextBox.oninput = oninput
	// table
	let table = document.createElement('table')
	table.style.border = 'none'
	for(let i=0; i<2; i++){
		let tr = document.createElement('tr')
		tr.style.border = 'none'
		for(let j=0; j<2; j++){
			let td = document.createElement('td')
			td.style.border = 'none'
			tr.appendChild(td)
        }
        table.appendChild(tr)
	}
	table.children[0].children[0].innerText = 'Shape:'
	table.children[0].children[1].appendChild(shapeTextBox)
	table.children[1].children[0].innerText = 'dtype:'
	table.children[1].children[1].appendChild(dtypeSelector)
	li.appendChild(table)
	return li
}

const makeOnInput = (descList, ownerSVG) => () => {
    ownerSVG.__data__.moduleMetaData.inputDescriptions = {}
    Array.from(descList.children).forEach((li, i) => {
        const name = `INPUT_${i}`
        const shape = parseToIntArray(li.querySelector('input').value)
        const dtype = li.querySelector('select').value
        ownerSVG.__data__.moduleMetaData.inputDescriptions[name] = {shape, dtype}
    })
}

export function makeInputDescCard(ownerSVG, vertexName){
    let list = document.createElement('ul')
    list.className = 'list-group'
    const {inputDescriptions} = ownerSVG.__data__.moduleMetaData
    const nInputs = getNumInputsOutputs(ownerSVG, vertexName).nOut
    const oninput = makeOnInput(list, ownerSVG)
    for(let i=0; i<nInputs; i++){
        if(inputDescriptions.hasOwnProperty(`INPUT_${i}`)){
            const {shape, dtype} = inputDescriptions[`INPUT_${i}`]
            list.appendChild(makeInputDescRow(oninput, shape, dtype))
        } else {
            list.appendChild(makeInputDescRow(oninput, [], 'float32'))
        }
    }
    const panelHTML = '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Input Descriptions</h3></div> <div class="panel-body"></div> </div>'
	const panel = document.createRange().createContextualFragment(panelHTML).firstChild
    panel.querySelector('.panel-body').appendChild(list)
    return panel
}