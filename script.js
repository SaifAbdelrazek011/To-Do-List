const tasksContainer = document.getElementById("list-container");
const tasks = tasksContainer.querySelectorAll("li");
const addButton = document.querySelector(".add");
const taskContent = document.querySelector(".input-task");
const delTask = document.querySelectorAll("li>span");
///////////////////////////////////

function addTask() {
  if (taskContent.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskContent.value;
    tasksContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  taskContent.value = "";
  saveData();
}

tasksContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("data", tasksContainer.innerHTML);
}
function showTask() {
  tasksContainer.innerHTML = localStorage.getItem("data");
}
showTask();
 
//i