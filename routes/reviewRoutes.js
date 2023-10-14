const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Rute untuk mendapatkan semua review
router.get('/', reviewController.retrieve);

// Rute untuk membuat review baru
router.post('/', reviewController.create);

// Rute untuk memperbarui review
router.put('/:id', reviewController.update);

// Rute untuk menghapus review
router.delete('/:id', reviewController.delete);

module.exports = router;
