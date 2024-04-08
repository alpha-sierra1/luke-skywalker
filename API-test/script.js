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
