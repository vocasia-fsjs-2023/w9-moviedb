const routes = require("express").Router();
const movieRoutes = require("./movie/index");
const reviewRoutes = require("./review/index");

routes.use("/movie", movieRoutes);
routes.use("/review", reviewRoutes);

module.exports = routes;
