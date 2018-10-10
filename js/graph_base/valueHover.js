function getValue(ele){
    let ports, outIndex;
    if(ele.tagName === 'line'){
        const {node, index} = ele.__data__.edgeRelation.from
        outIndex = index
        ports = ele.ownerSVGElement.__data__
            .graphStructure.V[node].querySelector('.nodePorts')
    } else if(ele.tagName === 'circle'){
        ports = ele.closest('.nodePorts')
        outIndex = ele.__data__.index
    } else {return false}
    if(!(ports.__data__.hasOwnProperty('outputVals') &&
        ports.__data__.outputVals.hasOwnProperty(outIndex))){return false}
    const value = ports.__data__.outputVals[outIndex]
    return {value}
}

function valueToHTML(value){
    if(value.constructor.name === 'tensor_description'){
        const shape = value.shape
        const dtype = value.dtype
        return '<style>.tensorDescTable td{color:#fff;padding:0 5px 0 5px;}</style>' +
            `<table class="tensorDescTable"><tr><td>Shape: <td>${JSON.stringify(shape)}<tr><td>Size: <td>${shape.reduce((acc,x)=>acc*x, 1)}<tr><td>DType: <td>${dtype}</table>`
    }
    return JSON.stringify(value)
}

function getInner(ele){
    const res = getValue(ele)
    if(res === false){ return '' }
    const {value} = res
    const inside = valueToHTML(value)
    return `<style>.valueTooltip{width:20vw;max-width:20vw;font-size:12px;position:absolute;line-height:1;font-weight:700;padding:12px;background:rgba(0,0,0,1);color:#fff;border-radius:2px}</style><div class="valueTooltip">${inside}</div>`
}

export function addValueHover(selection){
    selection
        .on('mouseover', function(){
            d3.selectAll('.outputValueTooltipHolder').remove()
            d3.select(this.ownerSVGElement.parentElement)
                .append('div').classed('outputValueTooltipHolder', true)
                .html(getInner(this))
                .style('left', d3.event.pageX + 'px')		
                .style('top', d3.event.pageY + 'px')
                .style('position', 'absolute')
                .style('pointer-events', 'none')
            
        })
        .on('mouseout', function(){
            d3.selectAll('.outputValueTooltipHolder')
                .transition()
                .style('opacity', 0)
                .remove()
        })
}
