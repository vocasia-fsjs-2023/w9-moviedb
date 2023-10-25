const { Movie, Review } = require("../models"); //Import Sequelize to apply create, update, findAll, findOne, delete method

class Controller {
  static async addReview(req, res) {
    const body = req.body;
    const { title, description, rating, movieId } = body;

    try {
      const Reviews = await Review.create({
        title,
        description,
        rating,
        movieId,
      });

      //Tampilkan hasil create Review beserta Movienya
      const Result = await Review.findAll({
        where: {
          id: Reviews.id,
        },
        include: Movie,
      });

      res.status(201).json(Result);
    } catch (error) {
      console.log(`Error menambahkan review! ${error}`);
      res.status(500).json(error);
    }
  }

  static async getReview(req, res) {
    try {
      const Reviews = await Review.findAll({ include: Movie });
      res.status(200).json(Reviews);
    } catch (error) {
      console.log(`Error menampilkan review! ${error}`);
      res.status(500).json(error);
    }
  }

  static async updateReview(req, res) {
    const reviewID = Number(req.params["id"]);
    const body = req.body;
    const { title, description, rating } = body;

    let response;
    try {
      const Reviews = await Review.update(
        { title: title, description: description, rating: rating },
        {
          where: {
            id: reviewID,
          },
        }
      );

      response = `${Reviews} data berhasil diupdate, dengan ID: ${reviewID}`;
    } catch (error) {
      console.log(`Error mengupdate review! ${error}`);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async deleteReview(req, res) {
    const reviewID = Number(req.params["id"]);

    let response;
    try {
      const Reviews = await Review.destroy({
        where: {
          id: reviewID,
        },
      });

      response = `${Reviews} data berhasil dihapus, dengan ID: ${reviewID}`;
    } catch (error) {
      console.log(`Error menghapus data! ${error}`);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }
}

module.exports = Controller;
