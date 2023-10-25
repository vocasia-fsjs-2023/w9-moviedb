const express = require("express");
const movieControllers = require("../controllers/movieController");
const router = express.Router();

router.post('/', movieControllers.postMovie);
router.get("/", movieControllers.getMovie);
router.get('/:id', movieControllers.getMovieById);
router.put('/:id', movieControllers.updateMovie);
router.delete('/:id', movieControllers.deleteMovie);

module.exports = router;