//Java Script Scope

// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:

// Block scope
// Function scope
// Global scope

// Block Scope

// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

// block scope let or cont main bahar ko bhi variable show nhi kara ga lekin agar var ho ga tu block scope shi kaam nhi kara ga

// Exanple no 1
// {
//     let x="Shayan"
//     console.log(x)
// }

// console.log(x)

// // Exanple no 2
// {
//     var x="Ayan"
//     console.log(x)
// }

// console.log(x)

// Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:

// Example

// function func() {
//     let x="Shayan"
//     console.log(x)

// }
// func()
// console.log(x)

// Local variables have Function Scope:

// They can only be accessed from within the function.



// Global JavaScript Variables

// A variable declared outside a function, becomes GLOBAL.


// Example

// let x="Shayan Khan"


// function func() {
//     console.log(x)
// }

// func()

// Automatically Global

// is function ka seen ya hai ka agar hum function variable ko shi sa define karen os pr let ya const nhi lagayan
// tu wo local scope nhi rahata chaha wo variable function main hi kiyo na ho wo global ban jata hai

// Example

// function func() {
//     carName="BMW"

// }
// func()
// console.log(carName)

// Global vs. Local Scope:

// var a = 10;

// function foo() {
//     var a = 20;
//     console.log(a); // What will be logged?
// }

// foo();
// console.log(a); // What will be logged?

// Function Scope:

// function bar() {
//     var b = 30;
//     if (true) {
//         var b = 40;
//         console.log(b); // What will be logged?
//     }
//     console.log(b); // What will be logged?
// }

// bar();


// Block Scope with let and const:

// let c = 50;

// function baz() {
//     let c = 60;
//     if (true) {
//         let c = 70;
//         console.log(c); // What will be logged?
//     }
//     console.log(c); // What will be logged?
// }

// baz();
// console.log(c); // What will be logged?


// console.log(d); // What will be logged?
// var d = 80;
// console.log(d); // What will be logged?

// Lexical Scoping:

// let f = 110;

// function lexicalTest() {
//     let f = 120;
//     return () => {
//         console.log(f);
//     };
// }

// const test = lexicalTest();
// test(); // What will be logged?
var e = 90;

function outer() {
    var e = 100;

    function inner() {
        console.log(e); // What will be logged?
    }

    inner();
}

outer();