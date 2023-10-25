const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


const movie = require('./routes/movieRoutes.js')
const review = require('./routes/reviewRoutes.js')
const user = require('./routes/userRoutes.js')

const { Movie, Review, User } = require("./models");

app.use(bodyParser.json());
app.use(express.json());
app.use(movie)
app.use(review)
app.use(user)

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
