const Movie = require("../models/index").Movie;

const createMovie = async (req, res) => {
  try {
    const { title, description } = req.body;
    const movie = await Movie.create({ title, description });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json({ movies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findOne({
      where: { id: id },
      include: "Reviews",
    });
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const movie = await Movie.findOne({ where: { id: id } });

    if (movie) {
      await Movie.update({ title, description }, { where: { id: id } });
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findOne({ where: { id: id } });
    const deleted = await Movie.destroy({ where: { id: id } });
    if (deleted) {
      res.status(200).json({ message: `Movie ${movie.title} telah dihapus` });
    } else {
      throw new Error("Movie not found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
