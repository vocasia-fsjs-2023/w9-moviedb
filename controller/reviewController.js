const { Review, Movie } = require("../models")

class reviewController {
  static async addReview(req, res, next) {
    try {
      const user = req.user;
      const { title, description, rating, movieId } = req.body;
      const movie = await Movie.findByPk(movieId)
      if (!movie) {
        return res
          .status(404)
          .json({message: "tidak ada movie"});
        
      const review = await Review.create({
        title,
        description,
        rating,
        movield: movie.id,
        userId: user.id
      });
      
      await review.reload({
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
      res.status(200).json({ review : reviews});
    } catch (error) {
      next(error);
    }
  }

  static async updateReview(req, res, next) {
    try {
      const reviewId = req.params.id;
      const { title, description, rating } = req.body;
      const review = await Review.findByPk(reviewId)

      if (!review) {
        return res
          .status(404)
          .json({message: "tidak ada review"});
      
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
    try {
      const { id } = req.params;
      const Review = await Review.findByPk(id);

      if (!review) {
        return res
          .status(404)
          .json({message: "tidak ada review"});
        
      await Movie.destroy()
        
      return res
        .status(200)
        .json({ message: `review ${review.id} telah dihapus` });
    } catch (error) {
      next(error);
    };
  };
}

module.exports = reviewController;
