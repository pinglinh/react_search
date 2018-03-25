const express = require("express");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();

const app = express();
const port = 3456;

app.get("/", (request, response) => {
  const searchQuery = request.query.searchTerm;
  const url = `http://content.guardianapis.com/search?q=${searchQuery}&api-key=${
    process.env.API_KEY
  }`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      response.header("Access-Control-Allow-Origin", "*");
      response.send(data);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
