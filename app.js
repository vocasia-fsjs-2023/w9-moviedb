const express = require("express");
// const payloadParsing = require("./middleware/payParsing");
const app = express();
const port = 3000;
const movierouter = require("./routes/movieRoutes");
const reviewrouter = require("./routes/reviewRoutes");
const userrouter = require("./routes/userRoutes");

app.use(express.json());
// app.use(payloadParsing);
app.use("/movie", movierouter)
app.use("/review", reviewrouter)
app.use(userrouter)


app.use((err, req, res, next) => {
    if (err?.name === "unauthorized") {
        res.status(401).json({ message: err?.message ?? "unauthorized"});
        return;
    }
    if (err?.name === "forbidden") {
        res.status(403).json({ message: err?.message ?? "forbidden"});
        return;
    }
    if (err?.name === "bad request") {
        res.status(400).json({ message: err?.message ?? "bad request"});
        return;
    }
    if (err?.name === "not found") {
        res.status(404).json({ message: err?.message ?? "not found"});
        return;
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});