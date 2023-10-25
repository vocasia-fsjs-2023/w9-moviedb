const { Review, Movie} = require('../models')

//POST
const createReview = async (req, res) => {
    
    try {
        const {title, description, rating, movieId} = req.body;
        const user = req.authUser;
        const reviewBaru = await Review.create({
            title,
            description,
            rating,
            movieId,
            userId: user.id
        });
        const load = await reviewBaru.reload({
            include: [
                {
                    model: Movie,
                    as: 'movies'
                }
            ]
        })

        res.status(200).json(load);
    }catch(error){
        console.log(error, '<-- Error Create Review')
       } 
    }

//GET DATA
const getAllReview = async(req, res) => {
   try{
    const review = await Review.findAll({
        attributes:['title', 'description', 'rating', 'movieId','userId', 'createdAt', 'updatedAt'],
        include: [
            {
                model: Movie,
                as: "movies",
            }
        ]
    });
    res.status(200).json({ review });
    
   }catch (error){
    res.status(404).json({ message: 'review tidak ditemukan' });
   }
    }


//PUT
const updateDataReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, rating } = req.body;

        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({
                 message: "Review tidak ditemukan" });
        }

        review.title = title || review.title;
        review.description = description || review.description;
        review.rating = rating || review.rating;

        await review.save();

        return res.status(200).json({
            title: review.title,
            description: review.description,
            rating: review.rating,
            movieId: review.movieId,
            userId: review.userId,
            updatedAt: review.updatedAt,
        });
    } catch(error) {
        console.log(error, '<-- Error Update Data Review by ID')
    }
};

//DELETE
    const deleteReviews = async (req, res) => {
        try{
            const { id } = req.params
            const review = await Review.findByPk(id)

            if (!review) {
                res.status(404).json({ message: 'review tidak ditemukan' });
            }
            review.destroy()
            res.status(200).json({ message: `review dengan id ${id} berhasil dihapus` });

        }catch(error){
            console.log(error, '<-- Error Destroy review')
        }
    }

module.exports = {createReview, getAllReview, updateDataReview, deleteReviews}