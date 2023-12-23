const { movie, review } = require("../models");
const { ResponseError } = require("../utils/response-error");

const index = async (req, res, next) => {
    try {
        const reviews = await review.findAll({
            include: [
                {
                    model: movie,
                    as: "movie", // Gunakan alias yang sesuai
                },
            ],
        });
        res.status(200).json({ review: reviews });
    } catch (e) {
        next(e);
    }
};

const store = async (req, res, next) => {
    try {
        const user = req.user;
        const { title, description, rating, movieId } = req.body;
        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            throw new ResponseError(404, "Movie is not found");
        }

        // tolong buatkan review baru untuk movie ini dengan data yang dikirimkan dan tampilkan hasilnya beserta data movie-nya
        const review = await Review.create({
            title,
            description,
            rating,
            movieId: movie.id,
            userId: user.id,
        });

        await review.reload({
            include: [
                {
                    model: Movie,
                    as: "movie", // Gunakan alias yang sesuai
                },
            ],
        });
        return res.status(201).json(review);
    } catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {
        const reviewId = req.params.id;
        const { title, description, rating } = req.body;

        const review = await Review.findOne({
            where: { id: reviewId },
        });

        if (!review) {
            throw new ResponseError(404, "Review not found");
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
    } catch (e) {
        next(e);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await Review.findByPk(id);
        if (!review) {
            throw new ResponseError(404, "Review not found");
        }

        await review.destroy();
        return res
            .status(200)
            .json({ message: `review dengan id ${review.id} telah dihapus` });
    } catch (e) {
        next(e);
    }
};
module.exports = { index, store, update, remove };