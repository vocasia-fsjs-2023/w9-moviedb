const { Movie, Review } = require("../models"); //Import Sequelize to apply create, update, findAll, findOne, delete method

class Controller {
  static async addMovie(req, res) {
    const body = req.body;
    const { title, description } = body;

    try {
      const Movies = await Movie.create({
        title,
        description,
      });

      res.status(201).json(Movies);
    } catch (error) {
      console.log(`Error menambahkan movie! ${error}`);
      res.status(500).json(error);
    }
  }

  static async getMovie(req, res) {
    try {
      const Movies = await Movie.findAll();
      res.status(200).json(Movies);
    } catch (error) {
      console.log(`Error menampilkan movie! ${error}`);
      res.status(500).json(error);
    }
  }

  //Menampilkan list Movies beserta Reviewsnya
  static async getMovieByID(req, res) {
    const movieID = Number(req.params["id"]);

    let response;
    try {
      const Movies = await Movie.findOne({
        where: {
          id: movieID,
        },
        include: Review, //Menampilkan data dari tabel Review yang memiliki relasi IDnya
      });

      response = Movies;
    } catch (error) {
      console.log(`Error menampilkan Movie ID! ${error}`);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async updateMovieByID(req, res) {
    const movieID = Number(req.params["id"]);
    const body = req.body;
    const { title, description } = body;

    let response;
    try {
      const Movies = await Movie.update(
        { title: title, description: description },
        {
          where: {
            id: movieID,
          },
        }
      );

      const Result = await Movie.findOne({
        where: {
          id: movieID,
        },
      });

      //Set value Movies setelah diedit untuk ditampilkan
      response = Result;

      //Jika ID ada maka return "Berhasil", jika null maka "Gagal"
      if (response) {
        res.status(200).json({ message: "Data berhasil diupdate!", response });
      } else {
        res.status(200).json({ message: "Data gagal diupdate!", response });
      }
    } catch (error) {
      //Output jika ID tidak diisi dan lainnya
      console.log(`Error mengupdate movie! ${error}`);
      res.status(500).json(error);
    }
  }

  static async deleteMovie(req, res) {
    const movieID = Number(req.params["id"]);

    let response;
    try {
      const Movies = await Movie.destroy({
        where: {
          id: movieID,
        },
      });

      response = `${Movies} movie berhasil dihapus, dengan ID: ${movieID}`;
    } catch (error) {
      console.log(`Error menghapus movie! ${error}`);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }
}

module.exports = Controller;
