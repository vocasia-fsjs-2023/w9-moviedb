const { Movie, Review } = require("../models");

const index = async (req, res) => {
    try {
        const reviews = await Review.findAll({
            include: [
                {
                    model: Movie,
                    as: "movie", 
                },
            ],
        });
        res.status(200).json({ review: reviews });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const store = async (req, res, next) => {
    try {
        const { title, description, rating, movieId } = req.body;
        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
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
        console.log(`Error: ${error}`);
    }
};

const update = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const { title, description, rating } = req.body;

        const review = await Review.findByPk(reviewId);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

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
        console.log(`Error: ${error}`);
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        await review.destroy();
        return res
            .status(200)
            .json({ message: `review dengan id ${review.id} telah dihapus` });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
module.exports = { index, store, update, remove };