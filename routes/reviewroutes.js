const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { authUser, isAdmin } = require("../middlewares/auth.js");

// Rute untuk mengambil daftar ulasan
router.get("/", reviewController.retrieve);
router.post("/", authUser, reviewController.create);
router.put("/:id", authUser, reviewController.update);
router.delete("/:id", authUser, isAdmin, reviewController.delete);

module.exports = router;