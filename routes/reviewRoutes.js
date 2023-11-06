const express = require("express");
const reviewController = require("../controller/reviewController");
const {authenticationUser, authenticationIsUser} = require("../middleware/auth");
const router = express.Router();

router.use(authenticationUser);

router.post("/", reviewController.addReview)
router.get("/", reviewController.getAllReviews)
router.put("/:id", authenticationIsUser, reviewController.updateReview)
router.delete("/:id", authenticationIsUser, reviewController.deleteReview)

module.exports = router;