// JavaScript HTML DOM EventListener

// Display Date

//document.getElementById("demo").addEventListener("click",displayDate)

//function displayDate() {
//    document.getElementById("para").innerHTML=Date()
//}


// Syntax
// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. 
//This parameter is optional.

// alert hello world

// document.getElementById("demo").addEventListener("click",function () {
//     alert("hello world")
// })


// You can also refer to an external "named" function:
// let myFunc=()=>{
//     alert("Hello World")
//     }

// document.getElementById("demo").addEventListener("click",myFunc);




// var x =document.getElementById("demo");
// x.addEventListener("click",firstFunction);
// x.addEventListener("click",secondFunction);

// function firstFunction() {
//     alert ("Hello World!");
//   }
  
//   function secondFunction() {
//     alert ("This function was also executed!");
//   }

// This example uses the addEventListener() method to add many events on the same button.

// var x = document.getElementById("demo");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);

// function myFunction() {
//   document.getElementById("para").innerHTML += "Moused over!<br>";
// }

// function mySecondFunction() {
//   document.getElementById("para").innerHTML += "Clicked!<br>";
// }

// function myThirdFunction() {
//   document.getElementById("para").innerHTML += "Moused out!<br>";
// }

// This example demonstrates how to pass parameter values when using the addEventListener() method.


// let num1=5;
// let num2=3;



// document.getElementById("demo").addEventListener("click",function() {
//     myFunc(num1,num2)
// })
// function myFunc(a,b) {
//     document.getElementById("para").innerHTML=(a*b)
// }


// remove addEventListener



// document.getElementById("myDIV").addEventListener("mousemove", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = Math.random();
// }

// function removeHandler() {
//   document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
// }