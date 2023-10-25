const ReviewController = require("../../controllers/reviewController");
const router = require("express").Router();

router.post("/", ReviewController.addReview);
router.get("/", ReviewController.getReview);
router.put("/:id", ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;
