const express = require('express');
const { loginController, createUser } = require('./controllers');
const { validateUserInput, checkExistingUser } = require('./middlewares');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController);

app.post('/user', validateUserInput, checkExistingUser, createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
