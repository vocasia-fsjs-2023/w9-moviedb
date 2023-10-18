
const express = require("express");
const movieController = require("../controller/movie-controller.js");

const router = express.Router();


router.post('/', movieController.createNew);
router.get('/', movieController.getAll);
router.get('/:id', movieController.getById);
router.put('/:id', movieController.update);
router.patch('/:id', movieController.updateStatus);
router.delete('/:id', movieController.deleteData);




module.exports = router