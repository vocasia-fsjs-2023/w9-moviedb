const { movie, review } = require("../models");

const index = async (req, res) => {
    try {
        const reviews = await review.findAll({
            include: [
                {
                    model: movie,
                    as: "movies", // Gunakan alias yang sesuai
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
        // tolong buatkan review baru untuk movie ini dengan data yang dikirimkan dan tampilkan hasilnya beserta data movie-nya
        const reviews = await review.create({
            title,
            description,
            rating,
            movieId
        });

        const reloadReview = await reviews.reload({
            include: [
                {
                    model: movie,
                    as: "movies", // Gunakan alias yang sesuai
                },
            ],
        });
        return res.status(201).json(reloadReview);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const update = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const { title, description, rating } = req.body;

        const reviews = await review.findByPk(reviewId);
        if (!reviews) {
            return res.status(404).json({ message: "Review not found" });
        }

        reviews.title = title || reviews.title;
        reviews.description = description || reviews.description;
        reviews.rating = rating || reviews.rating;

        await reviews.save();

        return res.status(200).json({
            title: reviews.title,
            description: reviews.description,
            rating: reviews.rating,
            createdAt: reviews.createdAt,
            updatedAt: reviews.updatedAt,
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await review.findByPk(id);
        if (!reviews) {
            return res.status(404).json({ message: "Review not found" });
        }

        await reviews.destroy();
        return res
            .status(200)
            .json({ message: `review dengan id ${reviews.id} telah dihapus` });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
module.exports = { 
    index, 
    store, 
    update, 
    remove 
};