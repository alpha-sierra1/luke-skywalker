// const button = document.getElementById("button");
// const inputField = document.getElementById("inputField");

// function inputData() {
//   for (let i = 0; (i) => 9; i++) {
//     inputField.value = append(i);
//   }
// }
// button.addEventListener("click", inputData);

// const buttons = document.querySelectorAll(".button");
// const operatorButtons = document.querySelectorAll(".operator-button");
// const inputField = document.getElementById("inputField");
// const clearButton = document.getElementById("clearButton");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     inputField.value = buttons[i].textContent;
//   });
// }

// clearButton.addEventListener("click", function () {
//   inputField.value = "";
// });

// function addition(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function division(num1, num2) {
//   if (num2 === 0) {
//     return undefined;
//   } else {
//     return num1 / num2;
//   }
// }
// let num1 = "";
// let num2 = "";

// let operation = "";

// if (operation === "+") {
//   result = addition(num1, num2);
// } else if (operation === "-") {
//   result = subtract(num1, num2);
// } else if (operation === "*") {
//   result = multiply(num1, num2);
// } else if (operation === "/") {
//   result = division(num1, num2);
// }

const numberButtons = document.querySelectorAll(".button");
const operatorButtons = document.querySelectorAll(".operatorButton");
const inputField = document.getElementById("inputField");
const clearButton = document.getElementById("clearButton");
// const equalButton = document.getElementsByClassName('equalButton')

let num1 = "";
let num2 = "";
let operation = "";

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function () {
    const value = numberButtons[i].textContent;
    inputField.value = inputField.value + value;
    if (operation === "") {
      num1 += value;
    } else {
      num2 += value;
    }
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function () {
    const value = operatorButtons[i].textContent;
    inputField.value = inputField.value + value;
    operation = value;
  });
}

clearButton.addEventListener("click", function () {
  inputField.value = "";
  num1 = "";
  num2 = "";
  operation = "";
});

function calculateResult() {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  let result;

  if (operation === "+") {
    result = number1 + number2;
  } else if (operation === "-") {
    result = number1 - number2;
  } else if (operation === "*") {
    result = number1 * number2;
  } else if (operation === "/") {
    result = number1 / number2;
  }

  return result;
}

// switch (operation) {
//   case "+":
//     return number1 + number2;
//   case "-":
//     return number1 - number2;
//   case "*":
//     return number1 * number2;
//   case "/":
//     number1 / number2;
//   default:
//     return result;
// }

document.querySelector(".equalButton").addEventListener("click", () => {
  inputField.value = calculateResult();
});

// document
//   .querySelector(".operatorButton")
//   .addEventListener("click", function () {
//     inputField.value = calculateResult();
//   });
