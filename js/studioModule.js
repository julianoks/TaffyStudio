import {createSVG} from './graph_base/make_svg.js'
import {addNodes} from './graph_base/nodes.js'
import {addSideBar} from './sidebar/sideBar.js'
import {makeModuleImporter} from './sidebar/moduleImporter.js'
import {puller as taffyPuller, constructors as taffyConstructors} from '../deps/Taffy/src/index.js'
import {addBaseModule} from './addBaseModule.js'
import {baseModules} from './baseModules.js'
import {addMarkerDef} from './graph_base/svg_utils.js'

const makeNewTabFn = (navbarList, modulesHolder) => (name=undefined, imports=[]) => {
	const svgSize = undefined
	const svg = newStudioModule(modulesHolder, svgSize, name).node()
	const focus = () => {
		navbarList.selectAll('li')
			.classed('active', false)
			.select('.btn-group').remove()
		navbarItem.classed('active', true)
		d3.selectAll(modulesHolder.childNodes)
			.style('display', 'none')
		svg.parentElement.style.display = 'initial'
		navbarItem.each(function(){this.appendChild(makeModuleImporter(svg))})
	}
	const navbarItem = navbarList.insert('li', function(){return this.lastElementChild})
	const itemInner = navbarItem.append('a')
		.attr('href', '#')
		.attr('id', svg.__data__.moduleMetaData.name)
		.text(svg.__data__.moduleMetaData.name)
		.on('click', focus)
	svg.__data__.moduleMetaData.imports = imports
	focus()
	return {svg, navbarItem}
}

const makeGetTaffyLibrary = studioEle => () => {
	const modules = Array.from(studioEle.querySelector('.modulesHolder').children)
		.map(e => e.querySelector('svg').__data__.getTaffyModule())
	return new taffyConstructors.library(modules)
}

export function newStudio(studioParent, studioSize){
	const [width, height] = studioSize? studioSize : [window.outerWidth*1, window.outerHeight*0.8]
	const studio = d3.select(studioParent).append('div')
		.classed('studio', true)
		.datum(function(){return {
			moduleCounter: 0,
			moduleHolders: {},
			addBaseModule,
			baseModules,
			getTaffyLibrary: makeGetTaffyLibrary(this),
			pullModule: (module_name, input_descriptions, prune=true) => 
				taffyPuller(this.__data__.getTaffyLibrary(), module_name, input_descriptions, prune),
		}})
	studio.append('svg').call(addMarkerDef).attr('width', 0).attr('height', 0)
	studio.append('style').html('li.defaultModule{display:none;}li.defaultModule.active{display:inherit;}')
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
	studio.each(function(){
		this.__data__.newTabFn = newTabFn
		baseModules.forEach(mod => this.__data__.addBaseModule(mod))
	})
	const newTabItem = navbarList.append('li').append('a')
		.attr('href', '#')
		.on('click', () => newTabFn(undefined, baseModules.map(({name})=>name)))
		.html('<span style="color:green;" class="glyphicon glyphicon-plus" aria-hidden="true"></span>')
	newTabFn(undefined, baseModules.map(({name})=>name))
	return modulesHolder
}

function newStudioModule(parent, size, moduleName){
	const [width, height] = size? size : [parent.clientWidth, parent.clientHeight]
	const sideBarWidth = 0.25 // as a percentage
	const holder = d3.select(parent)
		.append('div')
		.classed('moduleHolder', true)
	const svg = createSVG(holder, [(1-sideBarWidth)*width, height], false)
		.call(addSideBar, [sideBarWidth*width, height])
		.call(addNodes)
		.each(function(){
			const name = moduleName? moduleName : `module_${++parent.__data__.moduleCounter}`
			parent.closest('.studio').__data__.moduleHolders[name] = holder.node()
			this.__data__.moduleMetaData.name = name
		})
	return svg
}
