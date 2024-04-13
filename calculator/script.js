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

// for (let i = 0; i < numberButtons.length; i++) {
//   numberButtons[i].addEventListener("click", function () {
//     const value = numberButtons[i].textContent;
//     inputField.value = inputField.value + value;
//     if (!isNaN(parseFloat(value))) {
//       if (operation === "") {
//         num1 += value;
//       } else {
//         num2 += value;
//       }
//     } else {
//       console.error("Invalid number value");
//     }
//   });
// }

// for (let i = 0; i < operatorButtons.length; i++) {
//   operatorButtons[i].addEventListener("click", function () {
//     const value = operatorButtons[i].textContent;
//     inputField.value = inputField.value + value;
//     operation = value;
//   });
// }

function handlerFunc(buttons, isOperator) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const value = buttons[i].textContent;
      inputField.value = inputField.value + value;

      if (!isOperator) {
        if (!isNaN(parseFloat(value))) {
          if (operation === "") {
            num1 += value;
          } else {
            num2 += value;
          }
        } else {
          console.error("Invalid number value");
        }
      } else {
        operation = value;
      }
    });
  }
}

handlerFunc(numberButtons, false);
handlerFunc(operatorButtons, true);

clearButton.addEventListener("click", function () {
  inputField.value = "";
  num1 = "";
  num2 = "";
  operation = "";
});

function calculateResult() {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  let result;

  if (operation === "+") {
    result = number1 + number2;
  } else if (operation === "-") {
    result = number1 - number2;
  } else if (operation === "*") {
    result = number1 * number2;
  } else if (operation === "/") {
    result = number1 / number2;
  } else {
    result = "Invalid operation";
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
