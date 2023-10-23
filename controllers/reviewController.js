const { movie, review } = require("../models");

class Controller {
  static async addReview(req, res) {
    const { title, description, rating, movieId } = req.body;
    let response;
    try {
      const reviews = await review.create({
        title,
        description,
        rating,
        movieId,
      });
      response = reviews;
    } catch (error) {
      response = "ERROR";
    }
    res.status(200).json(response);
  }
  static async getReview(req, res) {
    let response;
    try {
      const reviews = await review.findAll({ include: movie });
      response = reviews;
    } catch (error) {
      response = "ERROR";
    }
    res.status(200).json(response);
  }
  static async updateReview(req, res) {
    const { title, description, rating } = req.body;
    let id = Number(req.params["id"]);
    const findId = await review.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Id Review tidak ditemukan" });
    }
    let response;
    try {
      await review.update(
        {
          title,
          description,
          rating,
        },
        {
          where: {
            id: id,
          },
        }
      );
      response = `Review dengan id ${id} berhasil diupdate`;
    } catch (error) {
      response = "ERROR";
    }
    res.status(200).json(response);
  }
  static async deleteReview(req, res) {
    let id = Number(req.params["id"]);
    const findId = await review.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Id Movie tidak ditemukan" });
    }
    await review.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(`Review dengan id ${id} berhasil dihapus`);
  }
}

module.exports = Controller;
