const { Movie, Review } = require('../models');

class Controller {

    //POST REVIEW
    static async postReview(req, res, next) {
        try {
          const { title, description, rating, movieId } = req.body;
          const movie = await Movie.findByPk(movieId);
          if (!movie){
            return res.status(404).json({ message: "Movie not found" });
          }
            const reviews = await Review.create({ title, description, rating, movieId: movie.id });
            await reviews.reload ({
                include: [
                    {
                        model: Movie,
                        as: "movies",
                    },
                ],
            });
            return res.status(201).json(reviews);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };

    //GET ALL REVIEW LIST
    static async getReview(req, res) {
        try {
          const reviews = await Review.findAll({
            include: [
                {
                    model: Movie,
                    as: "movies",
                },
            ],
          });
          res.status(200).json({ review: reviews });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
      
      //PUT REVIEW
      static async updateReview(req, res) {
        try {
        const reviewId = req.params.id;
        const { title, description, rating } = req.body;

        const reviews = await Review.findByPk(reviewId);
        if (!reviews) {
            return res.status(404).json({ error: 'Review not found' });
        }
        reviews.title = title || reviews.title;
        reviews.description = description || reviews.description;
        reviews.rating = rating || reviews.rating;

        await reviews.save();

        return res.status(200).json({
            title: reviews.title,
            description: reviews.sdescription,
            rating: reviews.rating,
            createdAt: reviews.createdAt,
            updatedAt: reviews.updatedAt
        });
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      };

      //DELETE REVIEW
      static async deleteReview(req, res) {
        try {
            const { id } = req.params;
            const reviews = await Review.findByPk(id);

            if (!reviews) {
                return res.status(404).json({ error: 'Review not found' });
              }
              await reviews.destroy();
              return res.status(200).json({ message: `Review dengan id ${id} telah dihapus` });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      };
}

module.exports = Controller;