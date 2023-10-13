const express = require("express");
const reviewController = require("../controllers/review-controller.js");

const router = express.Router();

router.get("/", reviewController.index);
router.post("/", reviewController.store);
router.put("/:id", reviewController.update);
router.delete("/:id", reviewController.remove);

module.exports = router;
