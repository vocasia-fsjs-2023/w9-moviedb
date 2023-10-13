const express = require("express");
const movieRoutes = require("./routes/movie-route.js");
const reviewRoutes = require("./routes/review-route.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movie", movieRoutes);
app.use("/review", reviewRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
