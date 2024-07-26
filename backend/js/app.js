const express = require('express');
const app = express();

const { login } = require('../js/sign_up_login.js');

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const token = login(username, password);
  if (token) {
    res.send({ token });
  } else {
    res.status(401).send("The username or password is incorrect.");
  }
});

app.listen(3000, () => {
  console.log();
});

