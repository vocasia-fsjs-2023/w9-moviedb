const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.urlencoded());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}...`);
});
