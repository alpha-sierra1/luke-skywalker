// POST

const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    title: "Aditi",
    body: "don't know",
    userId: 1100,
  }),
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// });

// PUT
const options1 = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    title: "Sakshi",
    body: "don't know",
    userId: 1300,
  }),
};

fetch("https://jsonplaceholder.typicode.com/posts", options1)
  .then((response) => response.json())
  .then((json) => console.log(json));

// GET

fetch("https://jsonplaceholder.typicode.com/posts/4")
  .then((response) => response.json())
  .then((json) => console.log(json));

//  error handling with wrong url

const storedData = document.getElementById("storedData");
const url = "https://jsonplaceholder.typicode.com/users";
const wrongUrl = "https://jsonplaceholder.typicode.com/sers";
const errorText = document.createElement("p");
errorText.textContent = "Don't you dare come here with wrong URL again";
errorText.style.color = "red";

fetch(wrongUrl)
  .then((response) => response.json())
  .then((users) => {
    users.map((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.id} ${user.name}}`;
      storedData.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("inavlid url", error);
    storedData.appendChild(errorText);
  });
