function getPositions(module){
    let g = new dagre.graphlib.Graph()
    g.setGraph({rankdir: 'BT'})
    g.setDefaultEdgeLabel(() => ({}))
    g.setDefaultNodeLabel(() => ({}))
    const inputSet = new Set(module.input)
    module.nodes
        .filter(({name}) => !inputSet.has(name))
        .forEach(({name}) => g.setNode(name, {width:2,height:1}))
    g.setNode('Inputs', {width:4,height:2})
    g.setNode('Outputs', {width:4,height:2})
    module.nodes.forEach(({name, input}) =>
        input.map(s => s.split(':')[0]).forEach(from =>
            g.setEdge(inputSet.has(from)? 'Inputs' : from, name))
    )
    module.output.map(s => s.split(':')[0]).forEach(from => g.setEdge(from, 'Outputs'))
    dagre.layout(g)
    const positions = g.nodes()
        .filter(n => n !== 'Inputs' && n !== 'Outputs')
        .map(n => [...(({x,y})=>[x,y])(g.node(n)), n])
    return positions
}

function transformPositions(positions, svg){
    const width = +svg.getAttribute('width')
    const height = +svg.getAttribute('height')
    const xpad = 0.2 * Math.min(width, height)
    const ypad = 0.2 * Math.min(width, height)
    const [xmin, xmax] = (c => [Math.min(...c),Math.max(...c)])(positions.map(r=>r[0]))
    const [ymin, ymax] = (c => [Math.min(...c),Math.max(...c)])(positions.map(r=>r[1]))
    const protect = x => x==0? 1 : x
    const positionsX = positions.map(r=>r[0])
        .map(x => (x-xmin)/protect(xmax-xmin))
        .map(x => xpad + ((width - (2*xpad)) * x))
    const positionsY = positions.map(r=>r[1])
        .map(y => (y-ymin)/protect(ymax-ymin))
        .map(y => ypad + ((height - (2*ypad)) * y))
    return positions.reduce((acc,[,,name],i) =>
        Object.assign(acc, {[name]: [positionsX[i], positionsY[i]]}), {})
}

export function addBaseModule(module, invisible=true){
    const {svg, navbarItem} = this.newTabFn(module.name)
    // don't show in navbar, don't debug when creating
    navbarItem.classed('defaultModule', invisible)
    //svg.__data__.debugModule = () => {}
    svg.__data__.moduleMetaData.imports = module.module_import
    svg.__data__.moduleMetaData.doc = module.doc
    // add nodes
    const inputSet = new Set(module.input)
    const positions = transformPositions(getPositions(module), svg)
    module.nodes.filter(({name}) => !inputSet.has(name))
        .forEach(({name, op, literal}) => {
            svg.__data__.addNode(positions[name], op, literal, name)
        })
    // add edges
    const outputPsuedoNode = {name: 'Outputs', input: module.output}
    module.nodes.concat([outputPsuedoNode])
        .forEach(({name, input}) => input
            .forEach((inp, toI) => {
                const [f,fromI] = inp.split(':')
                const fromRef = inputSet.has(f)? `Inputs:${module.input.indexOf(f)}` : `${f}:${fromI}`
                svg.__data__.addEdge(fromRef, `${name}:${toI}`)
            }))
}
