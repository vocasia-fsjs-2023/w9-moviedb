const { Movie, Review } = require('../models');

// Fungsi untuk mengambil daftar film
exports.retrieve = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    const formattedMovies = movies.map(movie => ({
      id: movie.id,
      title: movie.title,
      description: movie.description,
      updatedAt: movie.updatedAt,
      createdAt: movie.createdAt
    }));
    res.status(200).json(formattedMovies);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// Fungsi untuk membuat film baru
exports.create = async (req, res) => {
  const { title, description } = req.body;

  try {
    if (!title || !description) {
      return res.status(400).json({ error: "Judul dan deskripsi diperlukan" });
    }

    // Gunakan req.user untuk mendapatkan pengguna yang telah diotentikasi
    const movie = await new Movie({
      title,
      description,
      userId: req.user.id, // Gunakan ID pengguna yang telah diotentikasi
    }).save();

    res.status(201).json(movie);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: "Terjadi kesalahan saat menambahkan movie" });
  }
};
// Fungsi untuk menampilkan detail film
exports.show = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({ message: "movie tidak ditemukan" });
    }

    const reviews = await Review.findAll({ where: { movieId: id } });

    // Konversi timestamp menjadi format ISO untuk film
    movie.createdAt = movie.createdAt.toJSON();
    movie.updatedAt = movie.updatedAt.toJSON();

    // Konversi timestamp menjadi format ISO untuk ulasan (reviews)
    const formattedReviews = reviews.map((review) => {
      review.createdAt = review.createdAt.toJSON();
      review.updatedAt = review.updatedAt.toJSON();
      return review;
    });

    // Menambahkan ulasan ke dalam objek film
    movie.reviews = formattedReviews;

    res.status(200).json(movie);
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Gagal mengambil data movie" });
  }
};

// Fungsi untuk memperbarui film
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({ message: "movie tidak ditemukan" });
    }

    if (req.method === 'PUT') {
      movie.title = title;
      movie.description = description;
    } else if (req.method === 'PATCH') {
      // Jika jenis permintaan adalah PATCH, lakukan pembaruan.
      if (title) {
        movie.title = title;
      }
      if (description) {
        movie.description = description;
      }
      // Tambahkan status "sedang diperbarui" jika jenis permintaan adalah PATCH
      if (req.method === 'PATCH') {
        movie.status = 'sedang diperbarui';
      }
    }
    await movie.save();

    return res.status(200).json(movie);
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({ error: 'Kesalahan server internal' });
  }
};

// Fungsi untuk menghapus data film
exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const movieToDelete = await Movie.findOne({ where: { id } });

    if (!movieToDelete) {
      return res.status(404).json({ message: "movie tidak ditemukan. Tidak ada movie yang dihapus." });
    }

    const deletedMovieTitle = movieToDelete.title;

    await movieToDelete.destroy();

    return res.status(200).json({ message: `movie '${deletedMovieTitle}' telah berhasil dihapus` });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: "Gagal menghapus movie" });
  }
};
