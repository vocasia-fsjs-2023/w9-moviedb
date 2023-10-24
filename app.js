const express = require("express");
const app = express();
const port = 3000;
const router = require ("./routes");

app.use(express.json());

app.use(router);

app.use((err, req, res, next)=> {
    res.json({message: err?.message}).status(500);
});

app.listen(port, () => console.log(`listen to port ${port}`));
