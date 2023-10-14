// Import Express
const express = require('express');
const movieController = require('../controllers/movieController');

// Inisialisasi router Express
const router = express.Router();

// Rute untuk mendapatkan semua film
router.get('/', movieController.retrieve);

// Rute untuk membuat film baru
router.post('/', movieController.create);

// Rute untuk mendapatkan detail film berdasarkan ID
router.get('/:id', movieController.show);

// Rute untuk mengupdate film berdasarkan ID
router.patch('/:id', movieController.update);

router.put('/:id', movieController.update);

// Rute untuk menghapus film berdasarkan ID
router.delete('/:id', movieController.delete);

// Export router
module.exports = router;
