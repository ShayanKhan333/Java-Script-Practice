// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()

// See Also:
// Search Methods
// Sort Methods
// Iteration Methods	Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()

// array lenght malom karna ka liya hum array length method ka use karta hn
// Array length

// const num=[1,2,3,4,5,6,7]
// console.log(num.length) 

// Array toString()
// const fruits=["banana","mango","apple","watermelon","pineapple"];
// console.log(fruits.toString())
// document.getElementById("para").innerHTML=fruits.toString()

// Array at()

// const fruits=["banana","mango","apple","watermelon","pineapple"];
// console.log(fruits.at(2))

// const fruits=["banana","mango","apple","watermelon","pineapple"];
// console.log(fruits[2])

// Array join()
// ya bhi same array to string ki tarhan hi kaam karta hai but is main hum khud hi specific sperater use kar sakta hn just like 

// const fruits=["banana","mango","apple","watermelon","pineapple"];
//  document.getElementById("para").innerHTML=fruits.join("/")

//  const fruits=["banana","mango","apple","watermelon","pineapple"];
//  document.getElementById("para").innerHTML=fruits.join("*")

// JavaScript Array pop()
// The pop() method removes the last element from an array:
// end sa remove

//  const fruits=["banana","mango","apple","watermelon","pineapple"];
//  fruits.pop()
// console.log(fruits)

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):
// end main add

//  const fruits=["banana","mango","apple","watermelon","pineapple"];
// fruits.push("orange")
//  console.log(fruits)

// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// Start sa remove

//   const fruits=["banana","mango","apple","watermelon","pineapple"];
//  fruits.shift()
//   console.log(fruits)

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

//    const fruits=["banana","mango","apple","watermelon","pineapple"];
//   fruits.unshift("orange")
//    console.log(fruits)
//    console.log(fruits.length)

// asa karna sa add ap ka jo us index pr variable hoga wo remove ho jaya ga
//   const fruits=["banana","mango","apple","watermelon","pineapple"];
//   fruits[0]="orange"
//     console.log(fruits)

// JavaScript Array delete()
// delete karna sa array main empty hole create hota hn

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits)


// JavaScript Array concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:

//  const frndFruits = ["Banana", "Orange", "Apple", "Mango"];
//  const frndName=["Shayan","ayan","ali","shahziab"]
// let add= frndFruits.concat(frndName)
// console.log(add)

// Note
// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.

// const arr1 = ["Banana", "Mango",];
// const arr2 = ["Shayan","ayan",];
// const arr3 = ["Ferrari", "Lamborgani"];

// const add=arr1.concat(arr2,arr3)
// console.log(add)


// Array copyWithin()
// The copyWithin() method copies array elements to another position in an array:


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(1,3  );
// console.log(fruits)


// JavaScript Array flat()
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// const arr=[[1,2],[3,4],[5,6]]
// let newArr=arr.flat()
// document.getElementById("para").innerHTML=newArr

// console.log(newArr)


// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
// The splice() method adds new items to an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

// jo first para meter ha wo arrgument leta ha kaha add karon or second ya ko jo tum add karo ga us ka bad kitna 
// delete karon or jo add kar na hai wo third arrgument main do
//or jo delete hota hai ka arrgument hota hai wo lenght ka hisab sa hota ha na ka index ka
// const fruits = ["Banana", "Orange", "Apple", "Mango","pineapple","kiwi"];
// fruits.splice(1, 3, "Lemon");
// console.log(fruits)



//  const fruits = ["Banana", "Orange", "Apple", "Mango","pineapple","kiwi"];
//  fruits.splice(0,2,"lemon")
//  console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango","pineapple","kiwi"];
// fruits.splice(2,2,"lemon")
// console.log(fruits)

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2);
// console.log(fruits)


// JavaScript Array toSpliced()
// The difference between the new toSpliced() method and the old splice()
// method is that the new method creates a new array, keeping the original
// array unchanged, while the old method altered the original array.


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced)


// JavaScript Array slice() 
// The slice() method slices out a piece of an array into a new array:

// slice method bhi 2 arrgument leta hai first kaha sa or second kaha tk wo delete ho jata hai
// just like this example


//  const months = ["Jan", "Feb", "Mar", "Apr"];
// let newMonth=months.slice(1,2)
// console.log(newMonth)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus)
