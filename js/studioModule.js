import {createSVG} from './graph_base/make_svg.js'
import {addNodes} from './graph_base/nodes.js'
import {addSideBar} from './graph_base/sideBar.js'

export function newStudioModule(parent, studioSize){
	const [width, height] = studioSize? studioSize : [window.innerWidth*0.9, window.innerHeight*0.8]
	const sideBarWidth = 0.25 // as a percentage
	const holder = d3.select(parent)
		.append('div').classed('studioHolder', true)
	const svg = createSVG(holder, [(1-sideBarWidth)*width, height])
		.call(addSideBar, [sideBarWidth*width, height])
		.call(addNodes)
}
