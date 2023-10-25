const { Review } = require('../models');

const authorizeReview = async (req, res, next) => {
    try {
        const reviewId = req.params.id;
        const review = await Review.findByPk(reviewId);

        if (!review) {
            return res.status(404).json({ message: 'Review tidak ditemukan' });
        }

        if (review.userId !== req.authUser.id) {
            return res.status(403).json({ message: 'user tidak punya akses data ini' });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat meng-otorisasi review' });
    }
};

const authorizeAdmin = (req, res, next) => {
    const { isAdmin } = req.authUser;
    
    if (!isAdmin) {
      return res.status(403).json({ message: 'Akses hanya untuk user admin' });
    }
    next();
  };
module.exports = { authorizeReview, authorizeAdmin };
