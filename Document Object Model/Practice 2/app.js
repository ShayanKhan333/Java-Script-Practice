// Dom-Document Object Model
// Inserting and Removing 



// let heading=document.querySelector("h1").innerHTML
// let heading=document.querySelector("h1").innerText

// let heading=document.querySelector("h1").innerHTML="I am Shayan Khan"
// console.log(heading)

// attributes concept

// let headingChange=document.querySelector(".heading").hasAttribute("style")
//  ya jo attributes ha wo ya beta ta ha ka is container ma ya attribute ha ya nhi
// console.log(headingChange)


// let headingChange=document.querySelector(".heading").getAttribute("style")
 //  ya jo attributes ha wo ckeck karta ha ka is container ma kon sa attribute ha or wo la kar da deta ha 
// console.log(headingChange)

//  let headingChange=document.querySelector(".mainheading").setAttribute("style","backgroundColor=white")
// let headingChange=document.querySelector(".mainheading").setAttribute("class","onlyHeading")
  //  ya jo attributes ha wo set kar deta ha container ma style ko ya phir class ko
// console.log(headingChange)



// let headingChange=document.querySelector(".mainheading").removeAttribute("style")
// ya attributes jo container ma kisi bhi attribute ko delete kar sakta ha 

// let headingChange=document.querySelector(".mainheading").attributes
// ya attributes sara attributes la kar da deta ha 
// console.log(headingChange)



// ya jo ha wo container ka  upar banaya ga div ko

// let maindiv=document.createElement("div")
// maindiv.innerHTML="I am inserted before"
// maindiv.setAttribute("class","before")
// document.querySelector(".container").before(maindiv)

// ya jo ha wo container ka  nicha banaya ga div ko

// let maindiv=document.createElement("div")
// maindiv.innerHTML="I am inserted before"
// maindiv.setAttribute("class","before")
// document.querySelector(".container").after(maindiv)


// ya jo ha wo container ka under sub sa upar banaya ga div ko
// let div=document.createElement("div")
// div.innerHTML= "I am a <b>King Khan </b>"
// div.setAttribute("class","created")
// div.setAttribute("style","backgroundColor=yellow")
// document.querySelector(".container").prepend(div)





// ya jo ha wo container ka under sub sa nicha banaya ga div ko
// let div=document.createElement("div")
// div.innerHTML= "I am a <b>King Khan </b>"
// div.setAttribute("class","created")
// div.setAttribute("style","backgroundColor=yellow")
// document.querySelector(".container").append(div)

// let div=document.createElement("div")
// div.innerHTML= "I am a <b>King Khan </b>"
// div.setAttribute("class","created")
// div.setAttribute("style","backgroundColor=yellow")
// document.querySelector(".container").appendChild(div)

// easy way to insert Element

// const make=document.querySelector(".container")
// make.insertAdjacentHTML("afterbegin","<div>I am Shayan Khan</div>")



// const make=document.querySelector(".container")
// make.insertAdjacentText("beforeend","hy ")


// const make2=document.querySelector(".container")
// make2.insertAdjacentHTML("afterbegin","<div>text</div>")


// document.body.firstElementChild.children[0].setAttribute("class","make2")

// const makeit=document.querySelector(".make2")
// make2.style.backgroundColor="red";


