const { Movie, Review } = require('../models');

class Controller {
    static async getReviewList(req, res) {
        try {
            const reviews = await Review.findAll({
                include: [
                    {
                        model: Movie,
                        as: 'movie'
                    },
                ],
            });
            res.status(200).json({ review: reviews });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async createReview(req, res, next) {
        try {
            const { title, description, rating, movieId } = req.body;
            const movie = await Movie.findByPk(movieId);

            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }

            const review = await Review.create({
                title,
                description,
                rating,
                movieId: movie.id,
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
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async updateReview(req, res) {
        try {
            const reviewId = req.params.id;
            const { title, description, rating } = req.body;

            const review = await Review.findByPk(reviewId);
            if (!review) {
                return res.status(404).json({ error: 'Review not found' });
            }

            if (typeof title !== 'undefined') {
                review.title = title;
            }
            if (typeof description !== 'undefined') {
                review.description = description;
            }
            if (typeof rating !== 'undefined') {
                review.rating = rating;
            }

            await review.save();

            return res.status(200).json({
                title: review.title,
                description: review.description,
                rating: review.rating,
                createdAt: review.createdAt,
                updatedAt: review.updatedAt,
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    static async deleteReview(req, res) {
        try {
            const { id } = req.params;
            const review = await Review.findByPk(id);

            if (!review) {
                return res.status(404).json({ error: 'Review not found' });
            }

            await review.destroy();

            return res.status(200).json({ message: `Review dengan ID ${review.id} berhasil dihapus` });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

module.exports = Controller;