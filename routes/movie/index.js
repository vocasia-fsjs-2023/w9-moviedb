const movieController = require("../../controllers/movieControllers");
const routes = require("express").Router();

routes.post("", movieController.addMovie);
routes.get("", movieController.getMovie);
routes.get("/:id", movieController.getMovieId);
routes.put("/:id", movieController.updateMovie);
routes.delete("/:id", movieController.deleteMovie);

module.exports = routes;
