const express = require("express");
const movieController = require("../controller/movieController");
const {authenticationUser, authenticationAdmin} = require("../middleware/auth");
const router = express.Router();

router.use(authenticationUser);
router.use(authenticationAdmin);

router.post("/", movieController.addMovie)
router.get("/", movieController.getAllMovie)
router.get("/:id", movieController.getOneMovie)
router.put("/:id", movieController.updateMovie)
router.delete("/:id", movieController.deleteMovie)

module.exports = router;