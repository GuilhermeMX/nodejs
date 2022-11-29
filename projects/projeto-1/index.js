const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

// middleware:
function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username)

  if (!user) {
    return response.status(400).json({ error: "user not found" });
  }

  request.username = username;

  return next();
}

app.post('/users', (request, response) => {
  const { username, name } = request.body;

  const userAlreadyExists = users.some(
    (user) => user.username === username
  );

  if (userAlreadyExists) {
    return response.status(400).json({ error: "user already exists" })
  };

  userAlreadyExists.push({
    id: 'uuid',
    title: 'Nome da tarefa',
    done: false, 
    deadline: '2021-02-27T00:00:00.000Z', 
    created_at: '2021-02-22T00:00:00.000Z'
  })

  return response.status(201).send();
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;