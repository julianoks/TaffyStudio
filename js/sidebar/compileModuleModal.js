import {packagers} from '../../deps/Taffy/src/index.js'

function makeModal(svgElement){
    let pulled = false
    try {
        Object.entries(svgElement.__data__.moduleMetaData.inputDescriptions)
	        .filter(([,{selectedType}]) => selectedType !== 'tensor')
            .forEach(([name,]) => {throw {metaDataIdentifier: 'input_not_tensor', message: `Input #${name.slice(6)} is not a tensor`}})
        pulled = svgElement.__data__.pullModule()
    } catch(e){
        if(e.metaDataIdentifier === 'input_not_tensor'){
            alert("To compile a module, inputs and outputs must be tensors:\n"+e.message)
            return false
        }
    }
    if(pulled === false){ return false }
    const html = `<div class="modal" style="display: block; padding-left: 0px; background-color: rgba(0, 0, 0, 0.5);">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="this.closest('.modal').remove()"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title" id="myModalLabel">Compile Module<a class="anchorjs-link" href="#myModalLabel"><span class="anchorjs-icon"></span></a></h4>
            </div>
            <div class="modal-body">
            <p>
            Select backend to compile to: 
            <select><option value="" disabled="" selected=""></option></select> 
            <a id="copy" style="display: none;" class="btn btn-primary btn-sm" role="button">copy code</a>
            <br><br>
            <textarea style="visibility: hidden;" class="form-control" rows="3"></textarea>
            </p>
            </div>
        </div><!-- /.modal-content -->
        </div>
    </div>`
    const modal = document.createRange().createContextualFragment(html).firstChild
    const textarea = modal.querySelector('textarea')
    let selector = modal.querySelector('select')
    let copyButton = modal.querySelector('#copy')
    const backends = Array.from(Object.keys(packagers))
    backends.sort().forEach(name => {
        const option = document.createElement('option')
        option.value = name
        option.innerText = name
        selector.appendChild(option)
    });
    copyButton.onclick = () => {
        textarea.select()
        document.execCommand('copy')
    }
    selector.oninput = () => {
        const code = packagers[selector.value](pulled)
        textarea.value = code
        textarea.style.visibility = 'visible'
        copyButton.style.display = 'initial'
    }
    svgElement.parentElement.appendChild(modal)
}

export function makeCompileButton(svgElement){
    const html = '<a class="btn btn-primary btn-lg" role="button">Compile Module</a>'
    const button = document.createRange().createContextualFragment(html).firstChild
    button.onclick = () => makeModal(svgElement)
    return button
}
