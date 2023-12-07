const express = require('express');
const { loginController, createUser, getUserById } = require('./controllers');
const { validateUserInput, checkExistingUser, validateToken } = require('./middlewares');
const { listUsers } = require('./controllers/user.controllers');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController);

app.post('/user', validateUserInput, checkExistingUser, createUser);

app.get('/user', validateToken, listUsers);

app.get('/user/:id', validateToken, getUserById);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
