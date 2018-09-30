function makeSingleList(texts, ownerTable, update){
    let list = document.createElement('ul')
    list.className = 'list-group'
    texts.forEach(t => {
        let li = document.createElement('li')
        li.ondblclick = () => {
            const movingTo = li.closest('td').id === 'available'? '#selected' : '#available'
            li.remove()
            ownerTable.querySelector(movingTo).querySelector('ul').appendChild(li)
            update(ownerTable.querySelector('#selected'))
        }
        li.className = 'list-group-item'
        li.innerText = t
        list.appendChild(li)
    })
    return list
}

function makeLists(textsAvail, textsSelected, update){
    const tableHTML = '<table> <tr> <th>Available</th> <th>Imported</th> </tr> <tr> <td id="available" valign="top"></td> <td id="selected" valign="top"></td> </tr> </table>'
    const table = document.createRange().createContextualFragment(tableHTML).firstChild
    table.querySelector('#available').appendChild(makeSingleList(textsAvail, table, update))
    table.querySelector('#selected').appendChild(makeSingleList(textsSelected, table, update))
    return table
}

function makeDropdown(textsAvail, textsSelected, update){
    const dropdownHTML = '<div class="btn-group" style="width:100%;"> <button type="button" style="width:100%;" class="btn btn-default dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Imports <span class="glyphicon glyphicon-transfer" aria-hidden="true"></span> </button> <ul class="dropdown-menu"> <li id="tableHolder"></li> </ul> </div>'
    const dropdown = document.createRange().createContextualFragment(dropdownHTML).firstChild
    const table = makeLists(textsAvail, textsSelected, update)
    table.style.marginLeft = 'auto'
    table.style.marginRight = 'auto'
    table.style.borderSpacing = '1em'
    table.style.borderCollapse = 'separate'
    table.onclick = e => e.stopPropagation()
    dropdown.querySelector('#tableHolder').appendChild(table)
    return dropdown
}


function getNotDependents(root, deps){
    let reversedDeps = deps.map(a => a[0])
        .reduce((acc,k) => Object.assign(acc,{[k]:[]}), {})
    let unvisited = new Set(Object.keys(reversedDeps))
    Object.entries(deps).forEach(([k, im]) => 
        im.forEach(i => reversedDeps[i].push(k)))
    let stack = [root]
    while(stack.length > 0){
        const expand = stack.pop()
        stack.push(...reversedDeps[expand])
        unvisited.delete(expand)
    }
    return Array.from(unvisited)
}

export function makeModuleImporter(ownerSVG){
    const moduleName = ownerSVG.__data__.moduleMetaData.name
    const modImports = new Set(ownerSVG.__data__.moduleMetaData.imports)
    const moduleDeps = Array.from(ownerSVG.closest('.studio')
        .querySelector('.modulesHolder').querySelectorAll('svg'))
        .map(svg => svg.__data__.moduleMetaData)
        .map(({name, imports}) => [name, imports])
    const notDependents = getNotDependents(moduleName, moduleDeps)
    const selected = ownerSVG.__data__.moduleMetaData.imports
    const avail = notDependents.filter(d => !modImports.has(d))
    const update = (selectedUl) => {
        ownerSVG.__data__.moduleMetaData.imports = Array.from(selectedUl.children)
            .map(e => e.innerText.split(/\r?\n/)[0])
        ownerSVG.closest('.moduleHolder')
            .querySelector('.sideBar').__data__.rollbackCheckpoint()
    }
    return makeDropdown(avail, selected, update)
}
