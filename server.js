// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const routes = require('./router/router');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes
app.use('/', routes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
