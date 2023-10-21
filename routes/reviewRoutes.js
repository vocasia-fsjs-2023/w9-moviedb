const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { authUser, isAdmin } = require("../middlewares/auth.js");

// Rute untuk mengambil daftar ulasan
router.get("/", reviewController.retrieve);

// Rute untuk membuat ulasan baru dengan middleware authUser
router.post("/", authUser, reviewController.create);

// Rute untuk memperbarui ulasan dengan middleware authUser dan isUserOwn
router.put("/:id", authUser, reviewController.update);

// Rute untuk menghapus ulasan dengan middleware authUser dan isUserOwn
router.delete("/:id", authUser, isAdmin, reviewController.delete);

module.exports = router;
