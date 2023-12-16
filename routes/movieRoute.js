const express = require("express");
const movieControllers = require("../controllers/movieController");
const { authUser } = require("../middlewares/authentication");
const { isAdmin } = require("../middlewares/authorization");
const router = express.Router();

router.post('/', authUser, isAdmin,movieControllers.postMovie);
router.get("/", movieControllers.getMovie);
router.get('/:id', movieControllers.getMovieById);
router.put('/:id', authUser, isAdmin,movieControllers.updateMovie);
router.delete('/:id', authUser, isAdmin,movieControllers.deleteMovie);

module.exports = router;