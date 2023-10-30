const { Movie, Review } = require("../models");

// Fungsi untuk mengambil daftar ulasan (reviews)
exports.retrieve = async (req, res) => {
    try {
        const reviews = await Review.findAll({
            include: [
                {
                    model: Movie,
                    as: "movie",
                },
            ],
        });

        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: "Tidak ada ulasan ditemukan" });
        }

        const formattedReviews = reviews.map((review) => {
            return {
                id: review.id,
                title: review.title,
                description: review.description,
                rating: review.rating,
                movie: {
                    id: review.movie.id,
                    title: review.movie.title,
                },
                createdAt: review.createdAt,
                updatedAt: review.updatedAt,
            };
        });

        res.status(200).json({ reviews: formattedReviews });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({ error: "Kesalahan server internal" });
    }
};

// Fungsi untuk membuat ulasan (review) baru
exports.create = async (req, res, next) => {
    try {
      const { title, description, rating, movieId } = req.body;
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        return res.status(404).json({ message: "Film tidak ditemukan" });
      }
      const review = await Review.create({
        title,
        description,
        rating,
        movieId: movie.id,
        userId: req.user.id, 
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
      console.error(`Error: ${error}`);
      res.status(500).json({ error: "Terjadi kesalahan saat membuat ulasan" });
    }
  };
// Fungsi untuk memperbarui ulasan (review)
exports.update = async (req, res) => {
  try {
      const reviewId = req.params.id;
      const { title, description, rating } = req.body;

      const review = await Review.findByPk(reviewId);
      if (!review) {
          return res.status(404).json({ message: "Ulasan tidak ditemukan" });
      }

      if (title !== undefined) {
          review.title = title;
      }

      if (description !== undefined) {
          review.description = description;
      }

      if (rating !== undefined) {
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
      console.log(`Error: ${error}`);
      res.status(500).json({ error: 'Kesalahan server internal' });
  }
};

// Fungsi untuk menghapus ulasan (review)
exports.delete = async (req, res) => {
  try {
      const { id } = req.params;
      const review = await Review.findByPk(id);

      if (!review) {
          return res.status(404).json({ message: "Ulasan tidak ditemukan" });
      }
      await review.destroy();
      const movie = await Movie.findByPk(review.movieId);
      if (movie) {
          movie.totalReviews -= 1; // Mengurangi total ulasan film.
          await movie.save();
      }

      return res.status(200).json({ message: ` ID ${review.id} telah dihapus` });
  } catch (error) {
      console.log(`Error: ${error}`);
      res.status(500).json({ error: 'Kesalahan server internal' });
  }
};