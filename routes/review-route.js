const express = require("express");
const reviewController = require("../controllers/review.js");
const router = express.Router();

//Membuat Data
router.post("/", reviewController.store);
//Mendapatkan Semua Data
router.get("/", reviewController.index);
//Mengambil Data Berdasarkan ID
router.put("/:id", reviewController.update);
//Menghapus data
router.delete("/:id", reviewController.remove);

module.exports = router;