// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: 'Luckyblue041122_', // your MySQL password
  database: 'mydatabase' // your MySQL database name
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Registration failed!' });
      throw err;
    }
    res.status(200).json({ message: 'Registration successful!' });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Login failed!' });
      throw err;
    }
    if (result.length > 0) {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ message: 'Invalid credentials!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

