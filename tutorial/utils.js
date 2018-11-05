import {newStudio} from '../js/studioModule.js'

export function displayInteractive(holder, focusModule, showOnly, fullBase, inpDesc){
    d3.select(holder).html('')
    const base = fullBase.map(m => m.name!==focusModule? m : 
        Object.assign({}, m, {nodes: m.nodes.filter(({name}) => showOnly.includes(name)),
            output: m.output.filter(s => showOnly.includes(s.split(':')[0]))}))
    const imports = []
    const invisible = false
    let state = {base, imports, invisible}

    let studio = newStudio(holder, [window.innerWidth*0.8,window.innerHeight*0.8,], state)
    d3.select(`${holder} #module_1`).node().parentElement.remove()
    studio.__data__.moduleHolders.module_1.remove()
    delete studio.__data__.moduleHolders.module_1
    d3.select(`${holder} #${focusModule}`).node().click()
    const svgData = studio.__data__.moduleHolders[focusModule].querySelector('svg').__data__
    svgData.moduleMetaData.inputDescriptions = inpDesc
    svgData.givePorts('Inputs', 0, Object.keys(inpDesc).length)
    svgData.sideBarNode(showOnly.length==0? 'Inputs' : showOnly.slice(-1)[0])
    svgData.debugModule()
}
