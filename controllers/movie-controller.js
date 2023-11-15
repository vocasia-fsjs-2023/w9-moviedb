const { Movie, Review } = require("../models");
const { ResponseError } = require("../utils/response-error");

const index = async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json({ movie: movies });
  } catch (e) {
    next(e);
  }
};

const store = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const movie = await Movie.create({ title, description });

    res.status(201).json(movie);
  } catch (e) {
    next(e);
  }
};

const show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id, {
      include: [
        {
          model: Review,
          as: "reviews",
        },
      ],
    });

    if (!movie) {
      throw new ResponseError(404, "Movie is not found");
    }

    res.status(200).json(movie);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const movie = await Movie.findOne({ where: { id } });

    if (!movie) {
      throw new ResponseError(404, "Movie is not found");
    }

    movie.title = title || movie.title;
    movie.description = description || movie.description;
    await movie.save();

    return res.status(200).json(movie);
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie) {
      throw new ResponseError(404, "Movie is not found");
    }

    await Review.destroy({ where: { movieId: id } });

    await movie.destroy();
    return res
      .status(200)
      .json({ message: `movie ${movie.title} telah dihapus` });
  } catch (e) {
    next(e);
  }
};

module.exports = { index, store, show, update, remove };
