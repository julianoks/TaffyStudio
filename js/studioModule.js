import {createSVG} from './graph_base/make_svg.js'
import {addNodes} from './graph_base/nodes.js'
import {addSideBar} from './sidebar/sideBar.js'
import {makeModuleImporter} from './sidebar/moduleImporter.js'
import {puller as taffyPuller, constructors as taffyConstructors} from '../deps/Taffy/src/index.js'
import {addBaseModule} from './addBaseModule.js'
import {baseModules, defaultImports} from './baseModules.js'
import {addMarkerDef} from './graph_base/svg_utils.js'
import {primitives} from '../deps/Taffy/src/index.js'

function valid_C_identifier(str){
	const match = str.match(/[_a-zA-Z][_a-zA-Z0-9]*/)
	return match !== null && str === str.match(/[_a-zA-Z][_a-zA-Z0-9]*/)[0]
}

function validModuleName(studio, name){
	if(!valid_C_identifier(name)){
		return 'Must be a valid C identifier'
	}
	if(studio.__data__.moduleHolders.hasOwnProperty(name)){
		return 'Module name already exists'
	}
	if(primitives.hasOwnProperty(name) || name === 'INPUTS' || name === 'OUTPTUS'){
		return 'Cannot be named after an operation'
	}
	return true
}

function applyModuleNameChange(aTag, textbox){
	const studio = aTag.node().closest('.studio')
	const oldName = aTag.node().innerText
	const proposedName = textbox.value
	textbox.remove()
	if(validModuleName(studio, proposedName) !== true
		|| proposedName === oldName){ return }
	aTag.text(proposedName)
	aTag.attr('id', proposedName)
	const holder = studio.__data__.moduleHolders[oldName]
	delete studio.__data__.moduleHolders[oldName]
	studio.__data__.moduleHolders[proposedName] = holder
	holder.querySelector('svg').__data__.moduleMetaData.name = proposedName
	Array.from(Object.values(studio.__data__.moduleHolders))
		.map(h => h.querySelector('svg'))
		.filter(svg => svg.__data__.moduleMetaData.imports.includes(oldName))
		.forEach(svg => {
			const data = svg.__data__
			data.moduleMetaData.imports = data.moduleMetaData.imports
				.map(n => n===oldName? proposedName : n)
			Array.from(Object.entries(data.nodeMetaData))
				.forEach(([node, {op}]) => {
					if(op === oldName){
						data.nodeMetaData[node].op = proposedName
						const container = data.graphStructure.V[node]
						if(container.querySelector('foreignObject').textContent === oldName){
							container.__data__.addText(proposedName)
						}
					}
				})
			svg.parentElement.querySelector('.sideBar').__data__.rollbackCheckpoint()
		})
}

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
		.attr('id', svg.__data__.moduleMetaData.name)
		.text(svg.__data__.moduleMetaData.name)
		.on('click', focus)
		.on('dblclick', function(){
			focus()
			itemInner.style('display', 'none')
			const commitChange =  function(){
				itemInner.style('display', 'inherit')
				applyModuleNameChange(itemInner, this)
			}
			navbarItem.insert('input', ':first-child')
				.classed('form-control', true)
				.attr('type', 'text')
				.attr('value', itemInner.node().innerText)
				.on('input', function(){
					const valid = validModuleName(this.closest('.studio'), this.value)
					this.setCustomValidity(valid===true? '' : valid)
					this.reportValidity()
				})
				.on('focusout', commitChange)
				.on('change', commitChange)
				.each(function(){this.focus()})
		})
	svg.__data__.moduleMetaData.imports = imports
	focus()
	return {svg, navbarItem}
}

const makeGetTaffyLibrary = studioEle => () => {
	const modules = Array.from(studioEle.querySelector('.modulesHolder').children)
		.map(e => e.querySelector('svg').__data__.getTaffyModule())
	return new taffyConstructors.library(modules)
}

export function newStudio(studioParent, studioSize, givenModsImports){
	d3.select(studioParent).style('display','block')
		.style('margin-left', 'auto').style('margin-right', 'auto')
	const [width, height] = studioSize || (n=>[n.clientWidth, n.clientHeight])(d3.select(studioParent).node())
	d3.select(studioParent).style('display','table')
	const defaultModsImports = givenModsImports ? givenModsImports :
		{base: baseModules, imports: defaultImports, invisible: true}
	const studio = d3.select(studioParent).append('div')
		.classed('studio', true)
		.datum(function(){return {
			moduleCounter: 0,
			moduleHolders: {},
			addBaseModule,
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
		.style('display', 'flex').style('flex-direction', 'row').style('flex-wrap', 'wrap')

	const modulesHolder = studio.append('div')
		.classed('modulesHolder', true)
		.style('width', width)
		.style('height', height)
		.node()
	
	const newTabFn = makeNewTabFn(navbarList, modulesHolder)
	{
		const {base, imports, invisible} = defaultModsImports
		studio.each(function(){
			this.__data__.newTabFn = newTabFn
			base.forEach(mod => this.__data__.addBaseModule(mod, invisible))
		})
		const newTabItem = navbarList.append('li').append('a')
			.on('click', () => newTabFn(undefined, imports))
			.html('<span style="color:green;" class="glyphicon glyphicon-plus" aria-hidden="true"></span>')
		newTabFn(undefined, imports)
	}
	return modulesHolder
}

function newStudioModule(parent, size, moduleName){
	const [width, height] = size? size : [parent.clientWidth, parent.clientHeight]
	const sideBarWidth = 0.25 // as a percentage
	const holder = d3.select(parent)
		.append('div')
		.classed('moduleHolder', true)
	const svg = createSVG(holder, [Math.floor((1-sideBarWidth)*width), height], false)
		.call(addSideBar, [Math.floor(sideBarWidth*width), height])
		.call(addNodes)
		.each(function(){
			const name = moduleName? moduleName : `module_${++parent.__data__.moduleCounter}`
			parent.closest('.studio').__data__.moduleHolders[name] = holder.node()
			this.__data__.moduleMetaData.name = name
		})
	return svg
}
