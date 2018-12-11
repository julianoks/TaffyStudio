# Provisional Architecture

## TODO

<details>
 <summary>September Sprint</summary>

September Sprint:
- [x] Store node metadata
- [x] Callbacks for sideBar inputs
- [x] Operation Documentation for sidebar
- [x] ```.givePorts``` method must transfer edges to new ports 
- [x] Make Literal (literal) input field for the sidebar
- [x] fix focusing issue in sideBar
- [x] reject incoming edge if input port already filled
- [x] Decide if a node's output ports should be provided when its operation changes? resolve: YES
- [x] method that uses ```.getGraph``` and the node's metadata to make raw Taffy
- [x] make functionality for creating module metadata (defining outputs, module name, module imports, module documentation)
	- [x] input interface for creating input_descriptions, ie ```{shape, dtype}```
	- [x] output interface
	- [x] module sandbox
	- [x] integrate module sandboxes as tabs in a library
- [x] update moduleMetaData and sidebar when moduleImporter changes
- [x] allow imported modules to be selected as operations
- [x] interface for pulling module using `.studio`'s `pullModule` method

</details>


October Sprint:
- [x] debugging interface 
- [x] make nodes informative & pretty
- [x] put operation name, and user provided name when defined, in nodeGuts
- [x] refactor make_svg.js into multiple files
- [x] call debugModule when edges are drawn or operation is defined
- [x] debug message for input descriptions
- [x] input descriptions parsing tests (eg shouldnt pass "1, 2, 3g")
- [x] improve nodeAlert
- [x] reflect number of outputs in nodes, and value of those outputs
- [x] display outport and edges value on hover
- [x] nested debugging
- [x] support literals as input descriptions for debugging (not compiling)
- [ ] add default "layers" modules

## The Hierarchy
- moduleHolder ([link](#moduleholder))
	- svg element ([link](#svg-element))
		- drawCanvas ([link](#drawcanvas))
			- gridLines ([link](#gridlines))
				- Vertical lines ([link](#vertical-lines))
				- Horizontal lines ([link](#horizontal-lines))
			- nodesGroup ([link](#nodesgroup))
				- (multiple) nodeContainer ([link](#nodecontainer))
					- nodePorts ([link](#nodeports))
						- nodeInPort ([link](#nodeinport))
							- Hovering Rect ([link](#hovering-rect))
							- (multiple) Port Elements ([link](#port-elements))
						- nodeOutPort ([link](#nodeoutport))
							- Hovering Rect ([link](#hovering-rect))
							- (multiple) Port Elements ([link](#port-elements))
					- nodeBody ([link](#nodebody))
					- nodeGuts ([link](#nodeguts))
			- edgesGroup ([link](#edgesgroup))
				- (multiple) Edge Elements ([link](#edge-elements))
	- sideBar ([link](#sidebar))

## Data Attributes
Some elements have Data Attributes attached via D3's data join.

Data can either be accessed using a D3 callback, or retrieving it from the element's data attribute, ```ele.__data__```.

This web app follows two conventions for data attributes:
- The data will always be in dictionary form.
- D3 has children inherit data elements from its parent. I think using inherited data is smelly, so I'm only accessing data from the owning element, which is why you may see ```ele.parentElement.parentElement.__data__```.

## Elements

### moduleHolder
Top level ```div``` tha holds the [SVG Element](#svg-element) and [sideBar](#sidebar)

### SVG Element
Data Attribute:
- lastPortHovered - The port element that was last hovered
- graphStructure - A ```graphStructure``` object
- nodeMetaData - An object with vertexName as keys and {op, literal} as values
- givePorts - A function with arguments ```(vertex, nIn, nOut) => selection```. Gives ```nIn``` incoming ports and ```nOut``` outgoing ports to the node with name ```vertex```.
- setNodeColor - A function with arguments ```(vertex, color) => selection```. Sets the color of the node with name ```vertex``` to the specified ```color```.
- getGraph - A function ```() => nodes```. The return value is a dictionary with node names as keys, and an array of inputs as values. Each input is represented as a dictionary with the name of the input node, and the index of the output value.
- svgElement - the svg element the data attribute belongs to
- pullModule - A function ```() => pulledTaffy``` that maps the graph to pulled Taffy
- debugModule - A function ```() => boolean``` that pulls the module, including every node's output in the module's output. For the purpose of intermediate debugging.
- moduleMetaData - A dictionary that contains the module's metadata, with keys ```name, inputDescriptions, import```
- getTaffyModule - A function ```() => taffyModule``` that maps the graph into a taffy module
- nodeAlert - A function ```(vertex, message, duration?) => undefined``` that displays an alert ```message``` next to the specified ```vertex```, which closes once the ```duration``` elapses.
- handleFailedPull - A function ```(e) => false``` that takes an error ```e``` and propagates it to the UI
- addNode - A function ```([x,y], 'operation', literals, 'name') => selection``` that adds a node without using the GUI
- addEdge - A function ```("node1:index", "node2:index") => undefined``` that adds an edge without using the GUI
- sideBarNode - a function ```(vertex) => undefined``` that displays the sidebar for the specified vertex name

### drawCanvas
Used for scaling/translating content.

### gridLines
Contains the [vertical](#vertical-lines) and [horizontal](#horizontal-lines) grid lines.

### Vertical Lines
Has multiple line elements

### Horizontal Lines
Has multiple line elements

### edgesGroup
Contains multiple edges.

### Edge Elements
Data Attribute:
- edgeRelation - A dictionary with keys ```from``` and ```to```, and values as a dictionary with the node element and port index.
- updatePosition - A function ```() => undefined``` that is called to update the position of the edge.

### nodesGroup
Contains multiple [```nodeContainer```s](#nodecontainer).

### nodeContainer
Data Attribute:
- vertexName - the name of the node
- addText - A funciton ```(text) => undefined``` that adds values to the [```nodeGuts```](#nodeguts)
- outputVals - An object holding the values emmited from the node's ports, used for value hovering

### nodePorts
Contains the [```nodeInPort```](#nodeinport) and [```nodeOutPort```](#nodeoutport).

### nodeInPort
Contains the input [```port```s](#port-element), as well as a [hovering rectangle](#hovering-rect).

### nodeOutPort
Contains the output [```port```s](#port-element), as well as a [hovering rectangle](#hovering-rect).

### Hovering Rect
A transparent rectangle that is only used to trigger hovering over the port group.

### Port Elements
Represents an input or output value.

Data Attribute:
- index - the index of the value

### nodeBody
A rectangle that serves as the "body" of the node.

### nodeGuts
A [```foreignObject```](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that draws over the [```nodeBody```](#nodebody).

### defs
Defines "arrowEnd" and "circleEnd" arrows for drawing edges.
Currently, only the "arrowEnd" marker is used.

### sideBar
Holds content related to manipulating nodes.
TODO: document this subtree

## Event Listeners
Event listeners are functions attached to elements which are triggered when a specified event occurs. 
Event listeners are what makes the application dynamic, providing responses for events like clicking and dragging. 
Below is a list of some event listeners used in the app.

### SVG Pan/Zoom
Attached to the [```svg```](#svg-element) element is a zoom listener that modifies the transform applied to the [```drawCanvas```](#drawcanvas) element.

### SVG click (creates node)
Attached to the [```svg```](#svg-element) element is a click listener that creates a new [```nodeContainer```](#nodecontainer) element.
This event listener is given to the svg element using the ```addNodeCreationClick``` function (in ```nodes.js```).
When created, the node's [port elements](#port-elements) and [```nodeGuts```](#nodeguts) are empty.

### Node hovering
Attached to the [```nodeContainer```](#nodecontainer) are two listener's responsible for the hovering behavior, responding to the ```mouseEnter``` and ```mouseLeave``` events.
When the mouse leaves, the [```nodeGuts```](#nodeguts) are made invisible and the [```nodePorts```](#nodeports) are made less opaque. 
When the mouse enters, the [```nodeGuts```](#nodeguts) are made visible and the [```nodePorts```](#nodeports) are made fully opaque.
This functionality can be found in ```_nodeEventHandlers``` (in ```nodes.js```).

### Node Container click
When the [```nodeContainer```](#nodecontainer) is clicked, an event fires.
This can be found in ```_nodeEventHandlers``` (in ```nodes.js```).

### Node Drag
When a [```nodeContainer```](#nodecontainer) is dragged, its position is changed.
When the drag starts, the [```nodeContainer```](#nodecontainer)'s ```mouseLeave``` function is called, and when the drag ends, the [```nodeContainer```](#nodecontainer)'s ```mouseEnter``` function is called. (see ["Node hovering"](#node-hovering) for details on ```mouseEnter``` and ```mouseEnter```)
The implementation can be found in ```nodeDragBehavior``` (in ```nodes.js```).

### Port Hovering
Whenever a port is hovered over, the [```SVG```](#svg-element)'s ```lastPortHovered``` property is set to that port.
This is used for [Drawing Edges](#drawing-edges).

### Drawing Edges
Attached to both the [```nodeInPort```](#nodeinport)'s and [```nodeOutPort```](#nodeoutport)'s [Port Elements](#port-elements) are functions responsible for dragging behavior, used for drawing edges between nodes.
Note that dragging does not move the node nor the port, but rather is used to draw an edge involving that port.
There are three stages of dragging: start, drag, and end.

First, when the drag begins, an edge element is created via the ```createEdge``` function.
A cache is also attached to the port, containing values such as if the edge is outgoing (going from an output to an input), a reference to the [Edge Element](#edge-elements), a function for resetting the position of the edge, etc.

When the drag continues, the position of the edge is reset, and the node hover is actived by calling the [```nodeContainer```](#nodecontainer)'s ```mouseEnter``` function.

When the drag ends, the node hover is deactivated by calling the [```nodeContainer```](#nodecontainer)'s ```mouseLeave``` function.
The other port in the edge relation is extracted from the [```SVG```](#svg-element)'s ```lastPortHovered``` property (see [Port Hovering](#port-hovering)).
If the incoming and outgoing ports of the same type (ie both outputs or both inputs), the edge is discarded.
(Note that this covers the case when no other port is involved, because the ```lastPortHovered``` will be the initial port and the edge relation will be a self-loop.)
The edge relation is added to the [```SVG```](#svg-element)'s ```graphStructure```, and the [Edge Element](#edge-elements)'s properties are attached.
Finally, the cache is deleted.

This functionality is defined in ```portDragBehavior``` (in ```give_ports.js```).

