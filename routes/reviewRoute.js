const express = require("express");
const reviewControllers = require("../controllers/reviewController");
const router = express.Router();

router.post('/', reviewControllers.postReview);
router.get("/", reviewControllers.getReview);
router.put('/:id', reviewControllers.updateReview);
router.delete('/:id', reviewControllers.deleteReview);

module.exports = router;