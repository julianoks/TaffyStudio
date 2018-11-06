function makeTemplate(overview, inputs, outputs){
    const makeRow = text => `<tr style="border: none;"><td style="border: none;"><textarea class="form-control">${text}</textarea></td></tr>`
    const templateHTML = `<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Module Documentation</h3></div> <div class="panel-body"><ul class="list-group">
    <li class="list-group-item" id="overviewDoc"><h4>Overview</h4>    
        <table><tbody><tr style="border: none;"><td style="border: none;"><textarea class="form-control">${overview}</textarea></td></tr></tbody></table>
    </li><li class="list-group-item" id="inputsDoc"><h4>Inputs</h4>    
        <table><tbody>${inputs.map(makeRow).join('')}</tbody></table>
    </li><li class="list-group-item" id="outputsDoc"><h4>Outputs</h4>    
        <table><tbody>${outputs.map(makeRow).join('')}</tbody></table>
    </li></ul></div> </div>`
    const node = document.createRange().createContextualFragment(templateHTML).firstChild
    return node
}

const makeOnInput = (svgData, card) => () => {
    const overview = card.querySelector('#overviewDoc textarea').value
    const inputs = Array.from(card.querySelectorAll('#inputsDoc textarea')).map(t=>t.value)
    const outputs = Array.from(card.querySelectorAll('#outputsDoc textarea')).map(t=>t.value)
    let opDoc = svgData.moduleMetaData.doc
    opDoc.doc = overview
    opDoc.input = inputs
    opDoc.output = outputs
}

function getCurrentOpDoc(svgData){
    const nInputs = svgData.moduleMetaData.inputNode.querySelector('.nodeOutPort').childElementCount-1
    const nOutputs = svgData.moduleMetaData.outputNode.querySelector('.nodeInPort').childElementCount-1
    const inputs = Object.assign(Array(nInputs).fill(''), svgData.moduleMetaData.doc.input)
    const outputs = Object.assign(Array(nOutputs).fill(''), svgData.moduleMetaData.doc.output)
    const overview = svgData.moduleMetaData.doc.doc
    return {overview, inputs, outputs}
}

export function makeModuleDocCard(svgElement){
    const svgData = svgElement.__data__
    const {overview, inputs, outputs} = getCurrentOpDoc(svgData)
    const card = makeTemplate(overview, inputs, outputs)
    const oninput = makeOnInput(svgData, card)
    Array.from(card.querySelectorAll('textarea')).forEach(t => {
        t.addEventListener('input', oninput)
    })
    return card
}
