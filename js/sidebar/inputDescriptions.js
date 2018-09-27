function parseToIntArray(str){
	const ints = str.replace(/\[|\]|\(|\)/g, '')
		.replace(/,/g,' ')
		.split(/\s+/).filter(s=>s !== '')
		.map(i => parseInt(i))
	return ints.includes(NaN)? false : ints
}

function makeInputDescRow(onchange){
	let li = document.createElement('li')
	li.className = 'list-group-item'
	// dtypeSelector
	let dtypeSelector = document.createElement('select')
	const options = ['float32', 'int32']
	options.forEach(name => {
		const option = document.createElement('option')
		option.value = name
		option.innerText = name
		dtypeSelector.appendChild(option)
	})
	dtypeSelector.onchange = onchange
	// shapeTextBox
	let shapeTextBox = document.createElement('input')
	shapeTextBox.setAttribute('placeholder', 'e.g. "1, 2, 3"')
	shapeTextBox.onchange = onchange
	// table
	let table = document.createElement('table')
	table.style.border = 'none'
	for(let i=0; i<2; i++){
		let tr = document.createElement('tr')
		tr.style.border = 'none'
		for(let j=0; j<2; i++){
			let td = document.createElement('td')
			td.style.border = 'none'
			tr.appendChild(td)
		}
	}
	table.children[0].children[0].innerText = 'Shape:'
	table.children[0].children[1].appendChild(shapeTextBox)
	table.children[1].children[0].innerText = 'dtype:'
	table.children[1].children[1].appendChild(dtypeSelector)
	li.appendChild(table)
	return li
}