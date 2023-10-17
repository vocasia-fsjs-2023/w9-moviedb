const express = require("express");
const bodyParser = require("body-parser");

const movieRoute = require("./routes/movieRoute");
const reviewRoute = require("./routes/reviewRoute");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/movie", movieRoute);
app.use("/review", reviewRoute);


app.get("/", (req, res) => {
    res.send("Server Todos ready!!!");
});
app.listen(PORT, () => {
    console.log(`Server berjalan di Port:${PORT}...`);
});