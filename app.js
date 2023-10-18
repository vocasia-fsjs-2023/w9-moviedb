const express = require("express");
const reviewRoutes = require("./routes/review-routes.js");
const movieRoutes = require("./routes/movie-routes.js");


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movie", movieRoutes);
app.use("/review", reviewRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});