// ASYNC - AWAIT

async function getData() {
  // simulating getting data from a server

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}
async function main() {
  console.log("Hello");

  console.log("let's test it");

  console.log("let's wait for it");

  let data = await trial();

  console.log("data after awaited function");

  console.log("lets-see");
}

main();

async function trial() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await x.json();
  console.log(data);
}

async function addition() {
  return 2 * 2;
}

async function trial2() {
  console.log("1st phase");

  let y = await addition();
  console.log(y);
  console.log("completed");
}
trial2();

async function API() {
  await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => response.json)
    .then((json) => console.log(json));
}
API();

// async function APItrial() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//   const receivedData = await data.json();

//   console.log(receivedData);

//   const data1 = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const receivedData1 = await data1.json();
//   console.log(receivedData1);
// }
// APItrial();

// const number1 = prompt("enter the number");
// const number2 = prompt("enter the number");
// const division = parseInt(number1) / parseInt(number2);

// try {
//   if (number1 === 0 || number2 === 0) throw new Error();
// } catch (error) {
//   console.log("error", error);
// }

// function sumOfAll(n) {
//   for (let index = 1; index < n; index++) {
//     console.log(n);
//   }
// }
// const a = sumOfAll(12);
// console.log(a);

function sumOfAll(n) {
  let sum = 0;

  for (let index = 1; index <= n; index++) {
    sum += index;
  }

  return sum;
}

const a = sumOfAll(12);
console.log(a);

function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

console.log(reverseString("hello"));

const array = [32, 22, 42, 23];

const array1 = array.map((x) => x + x);

console.log(array1);

const array2 = ["hello", "my name", "is", "aditi"];
const arrayLength = array2.map((x) => x.length);
console.log(arrayLength);

const person = [
  {
    firstName: "Aditi",
    lastName: "Singh",
  },
  {
    firstName: "Reena",
    lastName: "Singh",
  },
];

function extractFirstNames(person) {
  return person.map((person) => person.firstName);
}

console.log(extractFirstNames(person));

function upperCase(strings) {
  return strings.map((str) => str.toUpperCase());
}

const strings = ["hello", "world"];
const upperCase = convertToUpperCase(strings);
console.log(upperCase);
