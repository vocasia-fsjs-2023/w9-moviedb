const reviewController = require("../../controllers/reviewController");
const routes = require("express").Router();

routes.post("", reviewController.addReview);
routes.get("", reviewController.getReview);
routes.put("/:id", reviewController.updateReview);
routes.delete("/:id", reviewController.deleteReview);

module.exports = routes;
