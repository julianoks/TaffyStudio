import {d3} from '../../deps/d3/index'

function getValue(ele){
    let node, outIndex;
    if(ele.tagName === 'path'){
        const {index} = ele.__data__.edgeRelation.from
        outIndex = index
        node = ele.__data__.edgeRelation.from.node
    } else if(ele.tagName === 'circle'){
        node = ele.closest('.nodeContainer')
        outIndex = ele.__data__.index
    } else {return false}
    if(!(node.__data__.hasOwnProperty('outputVals') &&
        node.__data__.outputVals.hasOwnProperty(outIndex))){return false}
    const value = node.__data__.outputVals[outIndex]
    return {value}
}

function valueToHTML(value){
    if(value.constructor.name === 'tensor_description'){
        const shape = value.shape
        const dtype = value.dtype
        let size = shape.filter(Number.isInteger).reduce((acc,x)=>acc*x, 1)
        size += shape.filter(isNaN).reduce((acc,s)=>`${acc}*${s}`, '')
        return '<style>.tensorDescTable td{color:#fff;padding:0 5px 0 5px;}</style>' +
            `<table class="tensorDescTable"><tr><td>Shape: <td>${JSON.stringify(shape)}<tr><td>Size: <td>${size}<tr><td>DType: <td>${dtype}</table>`
    }
    return JSON.stringify(value)
}

function getInner(ele){
    const res = getValue(ele)
    if(res === false){ return '' }
    const {value} = res
    const inside = valueToHTML(value)
    return `<style>.valueTooltip{max-width:20vw;font-size:12px;position:absolute;line-height:1;font-weight:700;padding:12px;background:#37364d;color:#fff;border-radius:2px}</style><div class="valueTooltip">${inside}</div>`
}

export const valueHover = {
    mouseover: (ele) => {
        d3.selectAll('.outputValueTooltipHolder').remove()
        d3.select(ele.ownerSVGElement.parentElement)
            .append('div').classed('outputValueTooltipHolder', true)
            .html(getInner(ele))
            .style('left', d3.event.pageX + 'px')		
            .style('top', d3.event.pageY + 'px')
            .style('position', 'absolute')
            .style('pointer-events', 'none')
        
    },
    mouseout: () => {
        d3.selectAll('.outputValueTooltipHolder')
            .transition()
            .style('opacity', 0)
            .remove()
    }
}
