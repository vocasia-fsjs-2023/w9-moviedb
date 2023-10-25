const MovieController = require("../../controllers/movieController");
const router = require("express").Router();

router.post("/", MovieController.addMovie);
router.get("/", MovieController.getMovie);
router.get("/:id", MovieController.getMovieByID);
router.put("/:id", MovieController.updateMovieByID);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;
