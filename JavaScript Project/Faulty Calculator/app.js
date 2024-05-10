//Faulty Calculator

let num1=prompt("enter your First Num")
let num2=prompt("enter your Second Num")
let operator=prompt("enter your Sign Operator")
num1=parseInt(num1)
num2=parseInt(num2)

let result;


if(operator=="+"){
    result=num1-num2
}
 else if(operator=="-"){
   result=num1/num2
}
 else if(operator=="*"){
 result=num1-num2
}
 else if(operator=="/"){
    result=num1-num2
}
// this code is not Faulty 
// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// }

let randomNumber=Math.random()
if (randomNumber < 0.1){
    result=Math.floor(Math.random()*1000);
}
console.log("Result"+result)