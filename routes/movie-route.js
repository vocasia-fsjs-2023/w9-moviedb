const express = require("express");
const movieController = require("../controllers/movie.js");
const router = express.Router();

//Membuat Data
router.post("/", movieController.store);
//Mendapatkan Semua Data
router.get("/", movieController.index);
//Mendapatkan Data Berdasarkan ID
router.get("/:id", movieController.show);
//Mengakses Data Berdasarkan ID
router.route("/:id").put(movieController.update).patch(movieController.update);
//Mengambil Data Berdasarkan ID
router.put("/:id", movieController.update);
//Menghapus Data
router.delete("/:id", movieController.remove);

module.exports = router;