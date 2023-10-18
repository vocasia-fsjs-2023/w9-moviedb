

const {Movie, Review} = require('../models');


//POST 
const createNew = async (req,res) => {
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
        return res.status(500).json({
            message: 'Error'
        });s
    }
};


// GET 
const getAll = async (req, res) => {

    try {
        const review = await Review.findAll({
            include: [
                {
                model: Movie,
                as: 'movie',
                },
            ],
        });
        
        return res.status(200).json({review});

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
};



// PUT 
const update = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const { title, description, rating } = req.body;

        const data = await Review.findByPk(reviewId);

        if (!data) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        if (title) data.title = title;
        if (description) data.description = description;
        if (rating) data.rating = rating;

        await data.save();

        return res.status(200).json({
            title: data.title,
            description: data.description,
            rating: data.rating,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        });


    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}


// DEL 
const deleteData = async (req, res) => {
    try {
        const {id} = req.params
        const review = await Review.findByPk(id);

        if (!review) {
            return res.status(404).json({
                status: 'Failed',
                message: `data Todo with id ${id} is not exists`
            })
        }

        const movieId = review.movieId;

        await review.destroy();

        const movie = await Movie.findByPk(movieId);
        if (movie) {
            await movie.update({ reviewCount: movie.reviewCount - 1 });
        }

        res.status(200).json({
            message: `review dengan id ${id} telah dihapus`
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        });
    }
}




module.exports = {createNew, getAll, update, deleteData}

