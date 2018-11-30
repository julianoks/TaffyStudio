import {d3} from '../../deps/d3/index'
import {makeManipulationCard, makeOpDocCards, makeLiteralsCard, makeFunctionCard} from './nodeMetaDataManipulation.js'
import {makeInputDescCard} from './inputDescriptions.js'
import {makeCompileButton} from './compileModuleModal.js'
import {makeModuleDocCard} from './moduleDocumentation.js'

export function addSideBar(svgSelection, size){
	svgSelection.nodes().forEach(svgEle => {
		const sideBar = d3.select(svgEle.closest('.moduleHolder'))
			.insert('div', 'svg').classed('sideBar', true)
			.style('float', 'left')
			.style('max-width', size[0])
			.style('min-width', size[0])
			.style('max-height', size[1])
			.style('min-height', size[1])
			.style('background-color', 'ffffff')
			.style('border', '1px solid black')
			.style('overflow', 'scroll')
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

	if(op === 'literals'){
		sideBar.appendChild(makeLiteralsCard(ownerSVG, vertexName))
		ownerSVG.__data__.setNodeColor(vertexName, 'rgba(255,255,255,0.5)')
	}

	if(op === 'js_function'){
		sideBar.appendChild(makeFunctionCard(ownerSVG, vertexName))
	}

	if(op === 'INPUTS'){
		sideBar.appendChild(makeInputDescCard(ownerSVG, vertexName))
	}

	if(op === 'INPUTS' || op === 'OUTPUTS'){
		sideBar.append(makeModuleDocCard(ownerSVG))
		const button = makeCompileButton(ownerSVG)
		button.style = 'margin-left: auto; margin-right: auto; display: table;'
		sideBar.appendChild(button)
	}

	sideBar.__data__.rollbackCheckpoint = () => sideBarNodeManipulation(ownerSVG, vertexName)
}
