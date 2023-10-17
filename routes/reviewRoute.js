const express = require("express");
const reviewController = require("../controllers/reviewController");
const router = express.Router();

router.get("/", reviewController.getReviewList);
router.post("/", reviewController.createReview);
router.put("/:id", reviewController.updateReview);  
router.delete("/:id", reviewController.deleteReview);

module.exports = router;