
const express = require("express");
const reviewController = require("../controller/review-controller.js");

const router = express.Router();


router.post('/', reviewController.createNew);
router.get('/', reviewController.getAll);
router.put('/:id', reviewController.update);
router.delete('/:id', reviewController.deleteData);




module.exports = router