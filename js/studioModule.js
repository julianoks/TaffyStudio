import {createSVG} from './graph_base/make_svg.js'
import {addNodes} from './graph_base/nodes.js'
import {addSideBar} from './graph_base/sideBar.js'

const makeNewTabFn = (navbarList, modulesHolder) => () => {
	const svg = newStudioModule(modulesHolder).node()
	const focus = () => {
		navbarList.selectAll('li').each(function(){this.className=''})
		navbarItem.classed('active', true)
		d3.selectAll(modulesHolder.childNodes)
			.style('display', 'none')
		svg.parentElement.style.display = 'initial'
	}
	const navbarItem = navbarList.insert('li', function(){return this.lastElementChild})
	const itemInner = navbarItem.append('a')
		.attr('href', '#')
		.text(svg.__data__.moduleName)
		.on('click', focus)
	focus()
}

export function newStudio(parent, studioSize){
	const [width, height] = studioSize? studioSize : [window.innerWidth*0.9, window.innerHeight*0.8]
	const studio = d3.select(parent).append('div')
		.classed('studio', true)
		.datum({moduleCounter: 0})
	
	const navbarList = studio.append('nav')
		.classed('navbar navbar-default', true)
		.style('margin-bottom', '0px')
		.style('width', width)
		.append('div').classed('navbar-collapse collapse', true)
		.append('ul').classed('nav navbar-nav', true)

	const modulesHolder = studio.append('div')
		.classed('modulesHolder', true)
		.style('width', width)
		.style('height', height)
		.node()
	
	const newTabFn = makeNewTabFn(navbarList, modulesHolder)
	const newTabItem = navbarList.append('li').append('a')
		.attr('href', '#')
		.on('click', newTabFn)
		.html('<span style="color:green;" class="glyphicon glyphicon-plus" aria-hidden="true"></span>')
	newTabFn()
	return modulesHolder
}

function newStudioModule(parent, size){
	const [width, height] = size? size : [parent.clientWidth, parent.clientHeight]
	const sideBarWidth = 0.25 // as a percentage
	const holder = d3.select(parent)
		.append('div')
		.classed('moduleHolder', true)
	const svg = createSVG(holder, [(1-sideBarWidth)*width, height])
		.call(addSideBar, [sideBarWidth*width, height])
		.call(addNodes)
		.each(function(){
			this.__data__.moduleName = `module_${++parent.__data__.moduleCounter}`})
	return svg
}