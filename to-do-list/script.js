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

// const taskInput = document.getElementById("taskInput");
// const addButton = document.getElementById("addButton");
// const taskList = document.getElementById("taskList");

// addButton.addEventListener("click", addTask);

// function addTask() {
//   const taskText = taskInput.value;

//   if (taskText !== "") {
//     const newTask = document.createElement("li");
//     newTask.textContent = taskText;
//     taskList.appendChild(newTask);
//     taskInput.value = "";
//   }
// }

/* function addTask() {
  const taskText = taskInput.value;

  if (!taskText) {
    return;
  }

  // const newTask = document.createElement("li");
  // newTask.textContent = taskText;
  // taskList.appendChild(newTask);
  taskInput.value = "";
}

const li = document.createElement("li");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
const span = document.createElement("span");
span.textContent = taskText;
const editButton = document.createElement("button");
editButton.textContent = "edit";
const deleteButton = document.createElement("button");
deleteButton.textContent = "delete";

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(editButton);
li.appendChild(deleteButton);

taskList.appendChild(li); */

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;

  if (!taskText) {
    return;
  }

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {
    editTask(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteTask(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";
}
