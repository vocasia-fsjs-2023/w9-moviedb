const express = require("express");
const movieController = require("../controllers/movie-controller.js");
const { authUser, isAdmin } = require("../middlewares/auth-middleware.js");

const router = express.Router();

router.use(authUser);
router.use(isAdmin);

router.get("/", movieController.index);
router.get("/:id", movieController.show);
router.post("/", movieController.store);
router.put("/:id", movieController.update);
router.delete("/:id", movieController.remove);

module.exports = router;