const { Review, Movie } = require("../models")

class reviewController {
  static async addReview(req, res, next) {
    const { title, description, rating, movieId } = req.body;
    const user = req.user;
    try {
      const movie = await Movie.findByPk(movieId)
      const review = await Review.create({
        title,
        description,
        rating,
        movield: movie.id,
        userId: user.id
      });
      Review.reload({
        include: [
          {
            model: Movie,
            as: "movie",
          },
        ],
      });
      return res.status(201).json(review);
    } catch (error) {
      next(error);
    }
  }

  static async getAllReviews(req, res, next) {
    try {
      const reviews = await Review.findAll({
        include: [
          {
            model: Movie,
            as: "movie",
          },
        ],
      });
      res.status(200).json(reviews)
    } catch (error) {
      next(error);
    }
  }

  static async updateReview(req, res, next) {
    const reviewId = req.params.id;
    try {
      const { title, description, rating } = req.body;
      const review = await Review.findByPk(reviewId)

      review.title = title || review.title;
      review.description = description || review.description;
      review.rating = rating || review.rating;
      await review.save();
      return res.status(200).json({
        title: review.title,
        description: review.description,
        rating: review.rating,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteReview(req, res) {
    const { id } = req.params;
    try {
      const Review = await Review.findOne(id);
      await Movie.destroy()
      return res
        .status(200)
        .json({ message: `movie ${Review.id} telah dihapus` });
    } catch (error) {
      next(error);
    };
  };
}

module.exports = reviewController;