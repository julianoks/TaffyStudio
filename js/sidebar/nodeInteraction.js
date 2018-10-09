import {resetSideBar, sideBarNodeManipulation} from './sideBar.js'

export function getNumInputsOutputs(ownerSVG, vertexName){
	const container = ownerSVG.__data__.graphStructure.V[vertexName]
	const nIn = container.querySelector('.nodeInPort').querySelectorAll('circle').length
	const nOut = container.querySelector('.nodeOutPort').querySelectorAll('circle').length
	return {nIn, nOut}
}

export function makeChangePortButton(ownerSVG, vertexName, isAddition, isInput){
	const html = '<button type="button" class="btn btn-default"> <span style="color:black;" class="glyphicon glyphicon-'
	 + (isAddition? 'plus' : 'minus')
	 +'" aria-hidden="true"></span> </button>'
	const button = document.createRange().createContextualFragment(html).firstChild
	const inc = (x) => isAddition? x+1 : Math.max(0,x-1)
	button.onclick = () => {
		const {nIn, nOut} = getNumInputsOutputs(ownerSVG, vertexName)
		ownerSVG.__data__.givePorts(vertexName,
			isInput? inc(nIn) : nIn,
			isInput? nOut : inc(nOut))
		sideBarNodeManipulation(ownerSVG, vertexName)
	}
	return button
}

export function makeDeleteButton(ownerSVG, vertexName){
	const html = '<button type="button" class="btn btn-default"> <span style="color:red;" class="glyphicon glyphicon-trash" aria-hidden="true"></span> </button>'
	const button = document.createRange().createContextualFragment(html).firstChild
	button.onclick = () => {
		const deletes = ownerSVG.__data__.graphStructure.deleteVertex(vertexName)
		deletes.forEach(e => e.remove())
		resetSideBar(ownerSVG)
		ownerSVG.__data__.debugModule()
	}
	return button
}
