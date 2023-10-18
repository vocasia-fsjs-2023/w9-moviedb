const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const movie = require('./routes/movieRoutes.js')
const review = require('./routes/reviewRoutes.js')

const { Movie } = require("./models");
const { Review } = require("./models")

app.use(bodyParser.json());
app.use(express.json());
app.use(movie)
app.use(review)

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
