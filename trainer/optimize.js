
function stringify_output(out){
	return Object.entries(out)
		.map(([k,v]) => k+' - '+v.toString().slice(11))
		.join('\n')+'\n\n'
}

const defaultTrainParams = {
    batch_size: 32,
    iterations: 1000,
    example_size: 10,
    train_size: 1000,
    val_size: 100,
}

export function optimize(moduleFn, data, givenTrainParams={}){
    const {batch_size, iterations} = Object.assign({}, defaultTrainParams, givenTrainParams || {})
    const lossHistory = moduleFn.optimize(data, undefined, batch_size, iterations, undefined, false)
    const output = stringify_output(moduleFn.forward(data))
    console.log(lossHistory)
    console.log(output)
}
