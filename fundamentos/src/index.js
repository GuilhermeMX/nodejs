const express = require('express');

const app = express();

app.get("/", (request, response) => {
  return response.jsonp({message: "Hello World!"})
});

app.listen(3333);