const express = require("express");
const movieRoutes = require("./routes/movieRoute");
const reviewRoutes = require("./routes/reviewRoute");
const userRoutes = require("./routes/userRoute");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movie", movieRoutes);
app.use("/review", reviewRoutes);
app.use(userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});