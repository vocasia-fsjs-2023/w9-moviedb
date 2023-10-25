const express = require("express");
const movieController = require("../controllers/movieController.js");
const { authUser } = require("../middlewares/authentication");
const { isAdmin } = require("../middlewares/authorization");
const router = express.Router();

router.get("/", movieController.getMovieList);
router.get("/:id", movieController.getMovieById);
router.post("/", authUser, isAdmin, movieController.createMovie);
router.put("/:id", authUser, isAdmin, movieController.updateMovie);
router.patch("/:id", authUser, isAdmin, movieController.updateMovieStatus);
router.delete("/:id", authUser, isAdmin, movieController.deleteMovie);

module.exports = router;