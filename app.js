const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Middleware
app.use(express.json());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/movie', movieRoutes);
app.use('/review', reviewRoutes);


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

