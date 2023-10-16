const { Router } = require("express");
const {
  createReview,
  deleteReview,
  getAllReviews,
  updateReview,
} = require("../controllers/review");

const router = Router();

router.post("/", createReview);
router.get("/", getAllReviews);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
