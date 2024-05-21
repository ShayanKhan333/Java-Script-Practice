// Dom-Document Object Model
// practice parentNode ,firstElementChild,lastElementChild,children,Node
// javascript through styling
// let maqssodBox=document.body.firstElementChild.firstElementChild.style.backgroundColor="green";
// let nasreenBox=document.body.firstElementChild.children[1].style.backgroundColor="pink";
// let shayanBox=document.body.firstElementChild.children[3].style.backgroundColor="crimson";
// console.log(shayanBox)
// let hafsaBox=document.body.firstElementChild.children[2].style.backgroundColor="red";
// console.log(hafsaBox)
// let ayanBox=document.body.firstElementChild.lastElementChild.style.backgroundColor="yellow";

// javascript ID through styling
// let idSelsted=document.getElementById("boxi")
// idSelsted.style.backgroundColor="red"



// javascript class through styling

// let classSelected=document.getElementsByClassName("box")
// classSelected[1].style.backgroundColor="pink"


// javascript querySelector through styling


// let querySelec=document.querySelector(".box")
// querySelec.style.backgroundColor="brown"

// javascript AllquerySelector through styling

// let querySelec=document.querySelectorAll(".box")
// querySelec.forEach(element => {
//     element.style.backgroundColor="orange"
//     console.log(element)
// });



// javascript tagSelctor through styling


// let tagSelec=document.getElementsByTagName("div")
// tagSelec[3].style.backgroundColor="yellow"
// console.log(tagSelec)





// on/off Fuctionality

const clickbtn=()=>{
    const button = document.body.firstElementChild.children[0]; // Assuming the button is the first child element of the body
    
    if (button.style.backgroundColor === "blue") {
        button.style.backgroundColor = ""; // Setting to default color (white)
        button.style.color=""
        button.style.border=""
    } else {
        button.style.backgroundColor = "blue";
        button.style.color="red"
        button.style.border="2px solid green"
    }
    
console.log("colorChange")
}