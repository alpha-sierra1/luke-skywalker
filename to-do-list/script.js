const taskPlaceholder = document.getElementsByClassName("task-list");
const taskButton = document.getElementsByClassName("add-button");
const storedTasks = document.getElementById("taskList");

function mainTask() {
  const retrievedText = inputField.value;

  if (retrievedText !== "") {
    const newTask = document.createElement("li");

    newTask.textContent = retrievedText;

    storedTasks.appendChild(newTask);
  }
}

taskButton.addEventListener("click", mainTask);
