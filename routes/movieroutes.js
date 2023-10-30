const express = require('express');
const movieController = require('../controllers/movieController');
const { authUser, isAdmin } = require("../middlewares/auth.js");

const router = express.Router();

// Rute untuk mendapatkan semua film
router.get('/', movieController.retrieve);
router.post('/', authUser, movieController.create);
router.get('/:id', movieController.show);
router.patch('/:id', authUser, isAdmin, movieController.update);
router.put('/:id', authUser, isAdmin, movieController.update);
router.delete('/:id', authUser, isAdmin, movieController.delete);

module.exports = router;