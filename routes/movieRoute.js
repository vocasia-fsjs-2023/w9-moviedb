const express = require("express");
const movieController = require("../controllers/movieController.js");
const router = express.Router();

router.get("/", movieController.getMovieList);
router.get("/:id", movieController.getMovieById);
router.post("/", movieController.createMovie);
router.put("/:id", movieController.updateMovie);
router.patch("/:id", movieController.updateMovieStatus);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;