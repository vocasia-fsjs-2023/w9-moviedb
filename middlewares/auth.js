const jwt = require('jsonwebtoken');
const { User, Movie, Review } = require('../models'); 

exports.authUser = async (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ error: 'Token tidak ditemukan. Akses ditolak.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ error: 'Pengguna tidak ditemukan.' });
    }

    // Menambahkan pengguna ke objek permintaan
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Token tidak valid. Akses ditolak.' });
  }
};

// Middleware untuk memeriksa izin isAdmin
exports.isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ error: 'Akses ditolak. Anda bukan admin.' });
  }
  next();
};
