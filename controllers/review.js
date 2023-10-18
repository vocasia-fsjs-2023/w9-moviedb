const { Review } = require("../models/index");

const createReview = async (req, res) => {
  try {
    const { title, description, rating, movieId: MovieId } = req.body;

    const review = await Review.create({ title, description, rating, MovieId });
    await review.reload({ include: "Movie" });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({ include: "Movie" });
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, rating } = req.body;
    const review = await Review.findOne({ where: { id: id } });

    if (review) {
      review.title = title;
      review.description = description;
      review.rating = rating;
      await review.save();

      res.status(200).json(review);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOne({ where: { id: id } });

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    await Review.destroy({ where: { id: id } });
    res
      .status(200)
      .json({ message: "Review dengan id " + id + " telah dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
};
