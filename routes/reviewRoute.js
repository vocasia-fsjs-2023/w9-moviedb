const express = require("express");
const reviewController = require("../controllers/reviewController");
const { authUser } = require("../middlewares/authentication");
const { isAdmin } = require("../middlewares/authorization");
const router = express.Router();

router.get("/", reviewController.getReviewList);
router.post("/", authUser, reviewController.createReview);
router.put("/:id", authUser, isAdmin, reviewController.updateReview);  
router.delete("/:id", authUser, isAdmin, reviewController.deleteReview);

module.exports = router;