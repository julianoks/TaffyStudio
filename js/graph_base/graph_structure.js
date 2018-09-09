function JSONSet(){
	this.set = new Set()
	this.add = (...elements) => {
		elements.map(JSON.stringify)
			.forEach(s => this.set.add(s))
	}
	this.delete = (...elements) => {
		elements.map(JSON.stringify)
			.forEach(s => this.set.delete(s))
	}
	this.has = ele => this.set.has(JSON.stringify(ele))
	this.values = () => [...this.set].map(JSON.parse)
}


export function graphStructure(){
	// dictionary of vertices, with keys as names, values as arbitrary objects (intented for html elements)
	this.V = {}
	// nested dictionary, eg this.E['node1']['node2'] is an array of edge elements from node1 to node2
	this.E = {}
	// given the name of a vertex, returns all associated edge relations (as a set)
	this.vertexToEdges = {}
	// counter for generating unique IDs
	this.vertexCreationCounter = 0

	this.getVertexElement = vertex => this.V[vertex]
	this.getEdgeElements = (v1, v2) => this.E[v1][v2]
	this.getIncidentEdges = vertex => this.vertexToEdges[vertex].values()
	this.getIncidentEdgeElements = vertex => {
		const edgeBundles = this.getIncidentEdges(vertex)
			.map(edge => this.getEdgeElements(...edge))
		return [].concat(...edgeBundles)
	}

	// add a vertex
	this.addVertex = function(element, name=undefined){
		const givenName = name || "vertex_" + ++this.vertexCreationCounter
		if(this.V.hasOwnProperty(givenName)){
			if(name==undefined){
				this.vertexCreationCounter += 1
				return this.addVertex(element)
			}else{
				throw("Vertex name already taken")
			}
		}
		this.V[givenName] = element
		this.E[givenName] = {}
		this.vertexToEdges[givenName] = new JSONSet([])
		return givenName
	}

	// add an edge
	this.addEdge = function(element, v1, v2){
		if(!this.V.hasOwnProperty(v1)){throw(`v1, ${v1}, isn't a registered vertex`)}
		if(!this.V.hasOwnProperty(v2)){throw(`v2, ${v2}, isn't a registered vertex`)}
		// add edge to this.E
		if(!this.E.hasOwnProperty(v1)){ this.E[v1] = {} }
		if(!this.E[v1].hasOwnProperty(v2)){ this.E[v1][v2] = [] }
		this.E[v1][v2].push(element)
		// add edge to this.vertexToEdges, for both vertices
		this.vertexToEdges[v1].add([v1, v2])
		this.vertexToEdges[v2].add([v1, v2])
		return [v1, v2]
	}

	// delete edges going from v1 to v2
	this.deleteEdge = function(v1, v2){
		// remove edge from vertexToEdges
		this.vertexToEdges[v1].delete([v1, v2])
		this.vertexToEdges[v2].delete([v1, v2])
		// remove edge from this.E
		const elements = this.E[v1][v2]
		delete(this.E[v1][v2])
		return elements
	}

	// delete vertex
	this.deleteVertex = function(name){
		const edges = this.getIncidentEdges(name),
		edgeElements = [].concat(...edges.map(p => this.deleteEdge(...p))),
		vertexElement = this.V[name],
		elements = [vertexElement, ...edgeElements]
		// delete vertex from this.V and this.vertexToEdges
		delete(this.V[name])
		delete(this.E[name])
		delete(this.vertexToEdges[name])
		edges.forEach(edge => {
			const neighbor = edge.find(v => v != name)
			this.vertexToEdges[neighbor].delete(edge)
		})
		
		return elements
	}
}



/*
function test_graphStructure(){
	let graph = new graphStructure()

	// test assignment (addVertex, addEdge)
	const one = graph.addVertex("1st vertex"),
	two = graph.addVertex("2nd vertex"),
	three = graph.addVertex("3rd vertex")

	graph.addEdge("between 1 and 3", one, three)
	graph.addEdge("between 2 and 3", two, three)

	const isSame = (a,b) => JSON.stringify(a) == JSON.stringify(b)
	const expectedV = {vertex_1: "1st vertex", vertex_2: "2nd vertex", vertex_3: "3rd vertex"},
	verticesCorrect = isSame(graph.V, expectedV)

	const expectedE = {vertex_1: {vertex_3: ["between 1 and 3"]}, vertex_2: {vertex_3: ["between 2 and 3"]}, vertex_3: {}},
	edgesCorrect = isSame(graph.E, expectedE)

	const formattedVertToEdge = Object.entries(graph.vertexToEdges).map(([k,v]) => [k,v.values()]),
	expectedVTE = [["vertex_1", [["vertex_1","vertex_3"]]],
		["vertex_2", [["vertex_2","vertex_3"]]],
		["vertex_3", [["vertex_1","vertex_3"], ["vertex_2","vertex_3"]]]],
	vertexToEdgesCorrect = isSame(formattedVertToEdge, expectedVTE)

	const assignedCorrect = verticesCorrect && edgesCorrect && vertexToEdgesCorrect

	// test deletion (deleteEdge, deleteVertex)
	// test deleteEdge
	let edgesRemovedCorrect;
	{
		const returnVal = graph.deleteEdge("vertex_1", "vertex_3")
		const expectedV = {vertex_1: "1st vertex", vertex_2: "2nd vertex", vertex_3: "3rd vertex"},
		verticesCorrect = isSame(graph.V, expectedV)
		const expectedE = {vertex_1: {}, vertex_2: {vertex_3: ["between 2 and 3"]}, vertex_3: {}},
		edgesCorrect = isSame(graph.E, expectedE)
		const formattedVertToEdge = Object.entries(graph.vertexToEdges).map(([k,v]) => [k,v.values()]),
		expectedVTE = [["vertex_1", []],
			["vertex_2", [["vertex_2","vertex_3"]]],
			["vertex_3", [["vertex_2","vertex_3"]]]],
		vertexToEdgesCorrect = isSame(formattedVertToEdge, expectedVTE),
		returnCorrect = isSame(returnVal, ["between 1 and 3"])
		edgesRemovedCorrect = returnCorrect && verticesCorrect && edgesCorrect && vertexToEdgesCorrect
		graph.addEdge("between 1 and 3", one, three)
	}

	// test deleteVertex
	let vertexRemovedCorrect;
	{
		const returnVal = graph.deleteVertex(three)
		const expectedV = {vertex_1: "1st vertex", vertex_2: "2nd vertex"},
		verticesCorrect = isSame(graph.V, expectedV)
		const expectedE = {vertex_1: {}, vertex_2: {}},
		edgesCorrect = isSame(graph.E, expectedE)
		const formattedVertToEdge = Object.entries(graph.vertexToEdges).map(([k,v]) => [k,v.values()]),
		expectedVTE = [["vertex_1", []], ["vertex_2", []]],
		vertexToEdgesCorrect = isSame(formattedVertToEdge, expectedVTE),
		expectedReturn = ["3rd vertex", "between 2 and 3", "between 1 and 3"],
		returnCorrect = isSame(returnVal, expectedReturn)
		vertexRemovedCorrect = returnCorrect && verticesCorrect && edgesCorrect && vertexToEdgesCorrect
	}
	const deletedCorrect = edgesRemovedCorrect && vertexRemovedCorrect
	return assignedCorrect && deletedCorrect
}
console.log("test graphStructure successful?", test_graphStructure())
*/
