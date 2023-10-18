const { Router } = require("express");
const {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} = require("../controllers/movie");

const router = Router();

router.post("/", createMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
