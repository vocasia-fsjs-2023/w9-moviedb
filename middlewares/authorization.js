const { Review } = require("../models");

const isAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ error: 'Akses ditolak. Anda bukan admin.' });
    }
    next();
};

module.exports = { isAdmin };