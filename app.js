const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes"); 
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/movie", movieRoutes);
app.use("/review", reviewRoutes);
app.use("/user", userRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
