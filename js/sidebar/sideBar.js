import {makeManipulationCard, makeOpDocCards, makeLiteralsCard} from './nodeMetaDataManipulation.js'
import {makeInputDescCard} from './inputDescriptions.js'

export function addSideBar(svgSelection, size){
	svgSelection.nodes().forEach(svgEle => {
		const sideBar = d3.select(svgEle.closest('.moduleHolder'))
			.insert('div', 'svg').classed('sideBar', true)
			.style('float', 'left')
			.style('width', size[0])
			.style('height', size[1])
			.style('background-color', 'ffffff')
			.style('border', '1px solid black')
		resetSideBar(svgEle)
		sideBar.node().__data__.rollbackCheckpoint = () => resetSideBar(svgEle)
	})
}

export function resetSideBar(ownerSVG){
	const sideBar = ownerSVG.parentElement.querySelector('.sideBar')
	sideBar.innerHTML = ''
}

export function sideBarNodeManipulation(ownerSVG, vertexName){
	resetSideBar(ownerSVG)
	const sideBar = ownerSVG.closest('.moduleHolder').querySelector('.sideBar')
	const op = ownerSVG.__data__.nodeMetaData[vertexName].op // may be "INPUTS", "OUTPUTS", "literals", or others
	
	sideBar.appendChild(makeManipulationCard(ownerSVG, vertexName, op))

	if(op !== "INPUTS" && op !== "OUTPUTS" && op !== undefined){
		// op may be undefined if sideBar is called before INPUT or OUTPUT are populated
		sideBar.appendChild(makeOpDocCards(ownerSVG, vertexName))
	}

	if(op === "literals"){
		sideBar.appendChild(makeLiteralsCard(ownerSVG, vertexName))
	}

	if(op === 'INPUTS'){
		sideBar.appendChild(makeInputDescCard(ownerSVG, vertexName))
	}

	sideBar.__data__.rollbackCheckpoint = () => sideBarNodeManipulation(ownerSVG, vertexName)
}
