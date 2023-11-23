const express = require("express");
const movieController = require("../controllers/movie-controllers.js");

const router = express.Router();

router.get("/", movieController.index);
router.get("/:id", movieController.show);
router.post("/", movieController.store);
router.put("/:id", movieController.update);
router.delete("/:id", movieController.remove);

module.exports = router;
