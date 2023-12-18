const express = require("express");
const reviewControllers = require("../controllers/reviewController");
const { authUser } = require("../middlewares/authentication");
const { isUser } = require("../middlewares/authorization");
const router = express.Router();

router.post('/', authUser,reviewControllers.postReview);
router.get("/", reviewControllers.getReview);
router.put('/:id', authUser, isUser,reviewControllers.updateReview);
router.delete('/:id', authUser, isUser,reviewControllers.deleteReview);

module.exports = router;