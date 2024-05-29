// JavaScript HTML DOM Navigation

// Three Method to achieve this task
// document.getElementById("d2").innerHTML=document.getElementById("d1").innerText

// document.getElementById("d2").innerHTML=document.getElementById("d1").firstChild.nodeValue

// document.body.children[1].innerHTML=document.body.children[0].innerHTML;

// DOM Root Nodes
// There are two special properties that allow access to the full document:

// document.body - The body of the document
// document.documentElement - The full document

// document.getElementById("d2").innerHTML = document.body.innerHTML;


// document.getElementById("d2").innerHTML = document.documentElement.innerHTML;

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling


// document.getElementById("title1").innerHTML="Shayan"

// document.head.children[2].innerHTML="me"


// The nodeName Property
// The nodeName property specifies the name of a node.

// nodeName is read-only
// nodeName of an element node is the same as the tag name
// nodeName of an attribute node is the attribute name
// nodeName of a text node is always #text
// nodeName of the document node is always #document


// ya element ka name beta ta hai jes agar elemt h1 ha ya para ha tu wo beta ta hai

// document.getElementById("d2").innerHTML=document.getElementById("d1").nodeName

// The nodeType Property
// The nodeType property is read only. It returns the type of a node.

// ya element ka number beta ta hai jes agar elemt 

// document.getElementById("d2").innerHTML=document.getElementById("d1").nodeType

/*Note: nodeName always contains the uppercase tag name of an HTML element.

The nodeValue Property
The nodeValue property specifies the value of a node.

nodeValue for element nodes is null
nodeValue for text nodes is the text itself
nodeValue for attribute nodes is the attribute value*/



// Creating new HTML Elements - insertBefore()
// The appendChild() method in the previous example, appended the new element as the last child of the parent.

// If you don't want that you can use the insertBefore() method:

// var step1=document.createElement("p")
// var step2=document.createTextNode("This is your computer")
// var step3=step1.appendChild(step2)

// const element=document.getElementById("Div1")

// element.appendChild(step3)

// let make =document.createElement("h2");
// make.innerHTML="I am shayan khan";
// make.setAttribute("style","background-color:red")
// document.querySelector(".container").appendChild(make)

// let make =document.createElement("h2");
// make.innerHTML="I am shayan khan";
// make.setAttribute("style","background-color:red")
// document.querySelector(".container").prepend(make)


// Removing Existing HTML Elements
// To remove an HTML element, use the remove() method:


// document.body.children[0].children[0].remove()


// const elmnt = document.getElementById("heading"); elmnt.remove();


// Removing a Child Node
// For browsers that does not support the remove() method, you have to find the parent node to remove an element:



// const parent = document.getElementById("div1");
// const child = document.getElementById("p1");
// parent.removeChild(child);




/*The Difference Between an HTMLCollection and a NodeList
A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.

Not an Array!
A NodeList may look like an array, but it is not.

You can loop through a NodeList and refer to its nodes by index.

But, you cannot use Array methods like push(), pop(), or join() on a NodeList.*/