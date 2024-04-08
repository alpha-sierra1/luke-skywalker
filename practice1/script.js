const person = {
  name: "Aditi",
  age: 24,
  occupation: "unemployed",
};

// changing values with Dot Notation
person.name = "Harshita";
console.log(person.name);

// changing values with Bracket Notation
person["name"] = "Sakshi";
console.log(person.name);

// when the targeted property is selected by user dynamically
const selection = "name";
selection["name"] = "Karunaa";

// arrays
const selectedColors = ["red", "green", "yellow"];
selectedColors[3] = "blue";
console.log(selectedColors);

// arrays are technically objects so it's properties can also be accessed through Dot Notation
console.log(selectedColors.length);
