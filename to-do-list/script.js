// const taskPlaceholder = document.getElementsByClassName("task-list");
// const taskButton = document.getElementsByClassName("add-button");
// const storedTasks = document.getElementById("taskList");

// function mainTask() {
//   const retrievedText = inputField.value;

//   if (retrievedText.trim !== "") {
//     const newTask = document.createElement("li");

//     newTask.textContent = retrievedText;

//     storedTasks.appendChild(newTask);
//   }
// }

// taskButton.addEventListener("click", mainTask);

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}
