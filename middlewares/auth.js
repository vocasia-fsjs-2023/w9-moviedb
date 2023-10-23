const jwt = require('jsonwebtoken');
const { user, movie, review } = require('../models'); 

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res
                .status(401)
                .json({ message: "user tidak terauthentikasi" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const User = await user.findOne({ where: { id: decoded?.id } });
        if (!User) {
            return res.status(401).json({ message: "user tidak ditemukan" });
        }

        req.user = User;
        next();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const { isAdmin } = req.user;
        if (!isAdmin) {
            return res
                .status(401)
                .json({ message: "akses hanya untuk user admin" });
        }

        next();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};


module.exports = { authUser, isAdmin };