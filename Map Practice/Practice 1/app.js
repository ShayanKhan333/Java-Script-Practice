// JavaScript Maps

// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()

// The new Map() Method
// You can create a Map by passing an Array to the new Map() constructor:


// const fruits=new Map([["apples",500],["mangos",800],["watermalons",200]])

// const number=fruits.get("apples")

// const print=document.getElementById("demo").innerHTML="this is"+" "+number+" "+"apple"


// The set() Method
// You can add elements to a Map with the set() method:


// const fruits=new Map()


// fruits.set("apples",500)
// fruits.set("mango",800)

// const number=fruits.get("apples")
// const print=document.getElementById("demo").innerHTML="this is"+" "+number+" "+"apple"



// Maps are Objects
// typeof returns object:

// Example
// // Returns object:
// typeof fruits;


// instanceof Map returns true:

// Example
// // Returns true:
// fruits instanceof Map;

// Map Size Method

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   document.getElementById("demo").innerHTML=fruits.size

// Map Delete Method


// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);


// const del=fruits.delete("apples")
// console.log(fruits)

// Map clear() Method

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// fruits.clear()

// console.log(fruits)


// Map has() Method

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// console.log(fruits.has("apples"))



// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
// let del= fruits.delete("apples")
// console.log(fruits.has("apples"))


// map ki sare value print krna ka liya forEach ka use kiya hai

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// let text=""
//   fruits.forEach(
//     function (key,value) {
//         text +=key+"="+value +"</br>"
//     }
//   )
//   document.getElementById("demo").innerHTML=text


// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a map:


// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// let text=""
// for(const x of fruits.entries()){
// text +=x +"<br>"
// }
//   document.getElementById("demo").innerHTML=text


// Map.keys()
// The keys() method returns an iterator object with the keys in a map:



// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// let text=""
// for(const x of fruits.keys()){
// text +=x +"<br>"
// }
//   document.getElementById("demo").innerHTML=text


// Map.values()
// The values() method returns an iterator object with the values in a map:



// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// let text=""
// for(const x of fruits.values()){
// text +=x +"<br>"
// }
//   document.getElementById("demo").innerHTML=text



// const fruits=[

//     {name:"apples",quantity:500},
//     {name:"mango",quantity:800},
//     {name:"kiwi",quantity:100},
//     {name:"banana",quantity:150}
// ]

// function callBack({quantity}) {
//     return quantity >200 ? "ok":"low";



// }

// const result=Map.groupBy(fruits,callBack)

// // // Display Results
// let text="These fruits are Ok: <br>"
// for(let x of result.get("ok")){
//     text += x.name + x.quantity + "<br>"
// }
// text += " <br>These fruits are low: <br>";
// for(let x of result.get("low")){
//     text += x.name + " " + x.quantity + "<br>";
// }
// document.getElementById("demo").innerHTML =text;

// console.log(result.get("ok"));

