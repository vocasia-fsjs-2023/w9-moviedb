const express = require("express");
const app = express();
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use("/movie", movieRouter);
app.use("/review", reviewRouter);

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
