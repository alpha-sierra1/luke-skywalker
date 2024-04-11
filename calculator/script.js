// const button = document.getElementById("button");
// const inputField = document.getElementById("inputField");

// function inputData() {
//   for (let i = 0; (i) => 9; i++) {
//     inputField.value = append(i);
//   }
// }
// button.addEventListener("click", inputData);

const buttons = document.querySelectorAll(".button");
const inputField = document.getElementById("inputField");
const clearButton = document.getElementById("clearButton");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    inputField.value = buttons[i].textContent;
  });
}

clearButton.addEventListener("click", function () {
  inputField.value = "";
});
