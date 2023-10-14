const express = require('express');
const app = express();
const db = require('./models');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use(express.json());
app.use('/movie', movieRoutes);
app.use('/review', reviewRoutes);

const port = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(() => {
  // Menjalankan port
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
