const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("<h1>Hello</h1>");
});

app.get("/contact", function (request, response) {
  response.send("Constact me at: ro.moreko@gmail.com");
});

app.get("/bio", function (request, response) {
  response.send("I'm Ro and I like doing complicated things.");
});

app.get("/hobbies", function (request, response) {
  response.send("Coffee, beer, code.");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
