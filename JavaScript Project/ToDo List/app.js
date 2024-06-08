function addTask() {
var taskInput=document.getElementById("inputTask")
var taskValue = taskInput.value.trim(); 
console.log(taskInput)

if(taskValue !==""){
   // sub sa phela hum list create krna ga
let newList=document.createElement("li")
newList.className="task";
//os ka bd list ma text likhna ka liya koi bhi lekhna wala element ka banaya ga 

let taskText=document.createElement("span")
taskText.className="listText"
taskText.innerText=taskValue



//or ab edit ka button banaya ga
let editButton=document.createElement("button")
editButton.innerText="Edit"
editButton.className="btn btn-success button1"
editButton.onclick=function () {
    editTask(taskText, editButton)
}

//phir remove ka
let removeButton=document.createElement("button")
removeButton.innerText="Remove"
removeButton.className="btn btn-danger button2"
removeButton.onclick=function () {
removeTask(this)
}
let buttonDiv=document.createElement("div")
buttonDiv.appendChild(editButton)
buttonDiv.appendChild(removeButton)
//or ab sub ko list ka child banaya ga jo jo abhi banaya hai
newList.appendChild(taskText)
newList.appendChild(buttonDiv)


//or list ko todo list ka child bana den ga jo html main ul ko class de hai
document.getElementById("todo-list").appendChild(newList)

     // Clear the input field
     taskInput.value = "";
}else{
    alert("please Enter your value")
}

}
function editTask(taskText, editButton) {
  var currentText = taskText.innerText;
  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = currentText;
  inputField.className = "input1";

  // Replace task text with input field
  taskText.replaceWith(inputField);

  // Change Edit button to Save button
  editButton.innerText = "Save";
  editButton.onclick = function () {
    saveTask(inputField, taskText, editButton);
  };
}

function saveTask(inputField, taskText, editButton) {
  var newText = inputField.value.trim();

  if (newText !== "") {
    // Update task text with new text
    taskText.innerText = newText;

    // Replace input field with task text
    inputField.replaceWith(taskText);

    // Change Save button back to Edit button
    editButton.innerText = "Edit";
    editButton.onclick = function () {
      editTask(taskText, editButton);
    };
  } else {
    alert("Please enter a task");
  }
}




function removeTask(button){
  var listItem = button.closest("li");
  listItem.remove();
}

