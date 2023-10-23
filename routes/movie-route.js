const express = require("express");
const movieController = require("../controllers/movie.js");
const router = express.Router();
const { authUser, isAdmin } = require("../middlewares/auth.js");


//Membuat Data
router.post("/movie", authUser, movieController.store);
//Mendapatkan Semua Data
router.get("/movie", movieController.index);
//Mendapatkan Data Berdasarkan ID
router.get("/movie/:id", movieController.show);
// //Mengakses Data Berdasarkan ID
router.route("/movie/:id").put(movieController.update).patch(movieController.update);
//Mengambil Data Berdasarkan ID
router.put("/movie/:id", authUser, isAdmin, movieController.update);
//Menghapus Data
router.delete("/movie/:id", authUser, isAdmin, movieController.remove);

module.exports = router;