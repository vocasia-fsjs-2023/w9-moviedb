const { Movie, Review } = require("../models")

class movieController {
  static async addMovie(req, res) {
    const { title, description } = req.body;
    try {
      const movie = await Movie.create({ title, description });
      res.status(201).json(movie);
    } catch (error) {
      next(error);
    }
  }

  static async getAllMovie(req, res) {
    try {
      const movie = await Movie.findAll()
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }

  static async getOneMovie(req, res, next) {
    const { id } = req.params;
    try {
      const movie = await Movie.findByPk(id, {
        include: [
          {
            model: Review,
            as: "reviews"
          },
        ],
      });
      res.json(movie).status(200)
    } catch (error) {
      next(error);
    }
  }

  static async updateMovie(req, res, next) {
    const {id} = req.params;
    const { title, description } = req.body;
    try {
      const movie = await Movie.findByPk(id);

      movie.title = title || movie.title;
      movie.description = description || movie.description;
      await movie.save();
      return res.json(movie).status(200);
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovie(req, res, next) {
    const { id } = req.params;
    try {
      const movie = await Movie.findByPk(id)
      await movie.destroy()
      return res
        .status(200)
        .json({ message: `movie ${movie.title} telah dihapus` })
    } catch (error) {
      next(error);
    }
  }
}
module.exports = movieController;