const express = require("express");
const reviewController = require("../controllers/review-controller.js");
const { authUser, isUserOwn } = require("../middlewares/auth-middleware.js");

const router = express.Router();
router.use(authUser);

router.get("/", reviewController.index);
router.post("/", reviewController.store);
router.put("/:id", isUserOwn, reviewController.update);
router.delete("/:id", isUserOwn, reviewController.remove);

module.exports = router;
