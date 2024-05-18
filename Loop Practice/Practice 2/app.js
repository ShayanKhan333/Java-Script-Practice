// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:



// const arr =[22,5,33,29]

// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         console.log(element)
//     }
// }

// const obj={
//     fName:"shayan",
//     age:18,
// education:"2nd year"
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(obj)
//     }
// }

// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

//  const arr =[22,5,33,29]

//  for (const iterator of arr) {
//     console.log(iterator)
//  }


// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.


// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// const arr =[22,5,33,29]

// arr.forEach((value,index,arr) => {
//     console.log(arr)
// });

// const number =[23,64,1,47,38]

// number.forEach(myfunction)

// function myfunction (value,index,arr) {
//     console.log(value,index,arr)
// }