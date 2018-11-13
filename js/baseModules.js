const crossEntropyLoss = {"name":"cross_entropy_loss","input":["INPUT_0","INPUT_1"],"output":["vertex_7:0"],"nodes":[{"name":"vertex_1","op":"softmax","input":["INPUT_0:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"vertex_2","op":"gather_rows","input":["vertex_1:0","INPUT_1:0"],"literal":[]},{"name":"vertex_4","op":"log","input":["vertex_2:0"],"literal":[]},{"name":"vertex_6","op":"reduce_avg","input":["vertex_4:0"],"literal":[]},{"name":"vertex_7","op":"negate","input":["vertex_6:0"],"literal":[]}],"module_import":[],"doc":{"input":["2D Tensor, shape of (N,D)","Indices, shape (D), dtype \"int32\""],"output":["Loss (a scalar)"],"doc":"Implements the cross-entropy loss."}}
const getWeight = {"name":"get_weight","input":["INPUT_0","INPUT_1"],"output":["final:0"],"nodes":[{"name":"multiplier_params","op":"js_function","input":["INPUT_0:0"],"literal":["tensor => [[], Math.sqrt(2/tensor.shape.slice(1).reduce((a,b)=>a*b,1)), tensor.dtype]"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"weight_params","op":"js_function","input":["INPUT_0:0","INPUT_1:0"],"literal":["(tensor, units) => [[...tensor.shape.slice(1), units], \"normal\"]"]},{"name":"multiplier","op":"get_tensor","input":["multiplier_params:0","multiplier_params:1","multiplier_params:2"],"literal":[]},{"name":"unscaled_weight","op":"get_tensor","input":["weight_params:0","weight_params:1","multiplier_params:2"],"literal":[]},{"name":"scaled","op":"multiply","input":["multiplier:0","unscaled_weight:0"],"literal":[]},{"name":"final","op":"variable","input":["scaled:0","collections:0"],"literal":[]},{"name":"collections","op":"literals","input":[],"literal":[["trainable","regularization"]]}],"module_import":[],"doc":{"input":["Input tensor","Number of units"],"output":["Weight tensor"],"doc":"Gets weight tensor using he initialization"}}
const getBias = {"name":"get_bias","input":["INPUT_0"],"output":["vertex_3:0"],"nodes":[{"name":"vertex_2","op":"get_tensor","input":["get_shape:0","vertex_1:0","INPUT_0:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"get_shape","op":"js_function","input":["INPUT_0:0"],"literal":["t => [t.shape.slice(1)]"]},{"name":"vertex_3","op":"variable","input":["vertex_2:0","vertex_1:1"],"literal":[]},{"name":"vertex_1","op":"literals","input":[],"literal":["zeros",["trainable"]]}],"module_import":[],"doc":{"input":["Input 1"],"output":["Output 1"],"doc":"Implements module \"get_bias\""}}
const dense = {"name":"denseLayer","input":["INPUT_0","INPUT_1"],"output":["XW_b:0"],"nodes":[{"name":"ingest","op":"js_function","input":["INPUT_0:0","INPUT_1:0"],"literal":["(tensor, givenUnits) => {\nif(!(tensor.shape && tensor.shape.length>=2)){\nthrow(\"First input must be tensor of rank>=2\");}\nconst units = givenUnits || tensor.shape.slice(-1)[0];\nif(!(Number.isInteger(units) && units>0)){\nthrow(\"Second input, units, must be a positive integer.\");}\nreturn [tensor, units];\n}"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"XW","op":"matmul","input":["ingest:0","weight:0"],"literal":[]},{"name":"weight","op":"get_weight","input":["ingest:0","ingest:1"],"literal":[]},{"name":"XW_b","op":"add","input":["XW:0","bias:0"],"literal":[]},{"name":"bias","op":"get_bias","input":["XW:0"],"literal":[]}],"module_import":["get_weight","get_bias"],"doc":{"input":["Input tensor","Number of units"],"output":["Result, XW+b"],"doc":"Implements a dense layer, without an activation"}}
const denseReLU = {"name":"denseReluLayer","input":["INPUT_0","INPUT_1"],"output":["vertex_2:0"],"nodes":[{"name":"vertex_1","op":"denseLayer","input":["INPUT_0:0","INPUT_1:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"vertex_2","op":"relu","input":["vertex_1:0"],"literal":[]}],"module_import":["denseLayer"],"doc":{"input":["Input tensor","Number of units"],"output":["Result, ReLU(XW+b)"],"doc":"Implements a dense layer with a ReLU activation"}}

const get_conv_weight = {"name":"get_conv_weight","input":["INPUT_0","INPUT_1","INPUT_2"],"output":["weight_var:0"],"nodes":[{"name":"scale_calc","op":"js_function","input":["INPUT_0:0"],"literal":["(tensor) => [[], Math.sqrt(2/tensor.shape.slice(1).reduce((a,b)=>a*b,1)), tensor.dtype]"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"shape","op":"js_function","input":["INPUT_0:0","INPUT_1:0","INPUT_2:0"],"literal":["(tensor, filter, units) => {\nconst inDepth = tensor.shape.slice(-1)[0];\nconst newShape = [...filter, inDepth, units || inDepth];\nreturn [newShape, \"normal\", tensor.dtype];\n}"]},{"name":"vertex_2","op":"get_tensor","input":["shape:0","shape:1","shape:2"],"literal":[]},{"name":"scale_tensor","op":"get_tensor","input":["scale_calc:0","scale_calc:1","scale_calc:2"],"literal":[]},{"name":"weight_var","op":"variable","input":["scaling:0","collections:0"],"literal":[]},{"name":"scaling","op":"multiply","input":["vertex_2:0","scale_tensor:0"],"literal":[]},{"name":"collections","op":"literals","input":[],"literal":[["trainable","regularization"]]}],"module_import":[],"doc":{"input":["Input tensor","Filter shape (array of positive integers)","Out Channels"],"output":["Weight tensor"],"doc":"Gets a weight tensor (ie filter) for convolution."}}
const layer_conv = {"name":"convLayer","input":["INPUT_0","INPUT_1","INPUT_2","INPUT_3","INPUT_4"],"output":["vertex_6:0"],"nodes":[{"name":"ingest","op":"js_function","input":["INPUT_0:0","INPUT_1:0","INPUT_2:0","INPUT_3:0","INPUT_4:0"],"literal":["(...args) => {\nlet [tensor, filter, channels, strides, padding] = args;\nif(!(tensor.shape && tensor.shape.length >= 3)){throw(\"First input, tensor, must be tensor of rank>=3\");}\nfilter = Number.isInteger(filter)? Array(tensor.shape.length-2).fill(filter) : filter;\nchannels = channels || tensor.shape.slice(-1)[0];\nif(!(Array.isArray(filter) && filter.every(x=>Number.isInteger(x)))){throw(\"Second input, filter, must be an array of positive integers\");}\nif(!Number.isInteger(channels)){throw(\"Third input, channels, must be an integer.\");}\nreturn [tensor, filter, channels, strides, padding];\n}"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_3","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_4","op":"placeholder","input":[],"literal":[]},{"name":"vertex_2","op":"get_conv_weight","input":["ingest:0","ingest:1","ingest:2"],"literal":[]},{"name":"vertex_1","op":"js_function","input":["ingest:0","ingest:2"],"literal":["(input, units) => [[units], \"zeros\", input.dtype, [\"trainable\"]]"]},{"name":"vertex_10","op":"convolution","input":["ingest:0","vertex_2:0","ingest:3","ingest:4"],"literal":[]},{"name":"vertex_3","op":"get_tensor","input":["vertex_1:0","vertex_1:1","vertex_1:2"],"literal":[]},{"name":"bias","op":"variable","input":["vertex_3:0","vertex_1:3"],"literal":[]},{"name":"vertex_6","op":"add","input":["bias:0","vertex_10:0"],"literal":[]}],"module_import":["get_conv_weight"],"doc":{"input":["Input tensor","Filter shape (array of positive integers)","Output Channels","(optional) Strides","(optional) Padding"],"output":["Convolution"],"doc":"Implements a convolution with bias, no activation"}}
const convReluLayer = {"name":"convReluLayer","input":["INPUT_0","INPUT_1","INPUT_2","INPUT_3","INPUT_4"],"output":["ReLU:0"],"nodes":[{"name":"conv","op":"convLayer","input":["INPUT_0:0","INPUT_1:0","INPUT_2:0","INPUT_3:0","INPUT_4:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_3","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_4","op":"placeholder","input":[],"literal":[]},{"name":"ReLU","op":"relu","input":["conv:0"],"literal":[]}],"module_import":["convLayer"],"doc":{"input":["Input tensor","Filter shape (array of positive integers)","Output Channels","(optional) Strides","(optional) Padding"],"output":["Convolution with ReLU applied"],"doc":"Implements a convolution with bias, followed by a ReLU activation"}}

const sum_squares = {"name":"sum_squares","input":["INPUT_0"],"output":["vertex_6:0"],"nodes":[{"name":"vertex_2","op":"pow","input":["INPUT_0:0","vertex_5:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"vertex_6","op":"reduce_sum","input":["vertex_2:0"],"literal":[]},{"name":"vertex_5","op":"get_tensor","input":["vertex_4:0","vertex_4:1"],"literal":[]},{"name":"vertex_4","op":"literals","input":[],"literal":[[],2]}],"module_import":[],"doc":{"input":["Input 1"],"output":["Output 1"],"doc":"Implements module \"sum_squares\""}}
const l2 = {"name":"L2_regularization","input":["INPUT_0"],"output":["sum_l2s:0"],"nodes":[{"name":"vertex_2","op":"get_collection","input":["vertex_3:0","INPUT_0:0"],"literal":[]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"sum_l2s","op":"apply","input":["vertex_1:0"],"literal":["add"]},{"name":"vertex_1","op":"map","input":["vertex_2:0"],"literal":["sum_squares"]},{"name":"vertex_3","op":"literals","input":[],"literal":[["regularization"]]}],"module_import":["sum_squares"],"doc":{"input":["Input 1"],"output":["Output 1"],"doc":"Implements module \"L2_regularization\""}}
const loss = {"name":"CrossEntropyL2Loss","input":["INPUT_0","INPUT_1","INPUT_2"],"output":["totalLoss:0"],"nodes":[{"name":"regStrength","op":"js_function","input":["INPUT_2:0"],"literal":["strength => strength || 0.001"]},{"name":"INPUT_0","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_1","op":"placeholder","input":[],"literal":[]},{"name":"INPUT_2","op":"placeholder","input":[],"literal":[]},{"name":"regLoss","op":"L2_regularization","input":["INPUT_0:0","regStrength:0"],"literal":[]},{"name":"dataLoss","op":"cross_entropy_loss","input":["INPUT_0:0","INPUT_1:0"],"literal":[]},{"name":"totalLoss","op":"add","input":["regLoss:0","dataLoss:0"],"literal":[]}],"module_import":["L2_regularization","cross_entropy_loss"],"doc":{"input":["Logits","Labels (indices)","(optional) regularization strength, defaults to 0.001"],"output":["Total loss"],"doc":"Calculates cross entropy loss + L2 regularization loss"}}

export const baseModules = [crossEntropyLoss,sum_squares,l2,loss,
    getWeight, getBias, dense, denseReLU,
    get_conv_weight, layer_conv, convReluLayer]
export const defaultImports = ["denseLayer","denseReluLayer","convLayer","convReluLayer",
    "CrossEntropyL2Loss"]
