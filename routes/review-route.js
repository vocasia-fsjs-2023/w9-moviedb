const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.js");
const { authUser, isAdmin } = require("../middlewares/auth.js");


//Membuat Data
router.post("/review", authUser, reviewController.store);
//Mendapatkan Semua Data
router.get("/review", reviewController.index);
//Mengambil Data Berdasarkan ID
router.put("/review/:id", authUser, isAdmin, reviewController.update);
//Menghapus data
router.delete("/review/:id", authUser, isAdmin, reviewController.remove);

module.exports = router;