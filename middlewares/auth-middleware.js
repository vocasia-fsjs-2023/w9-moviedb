const { User, Review } = require("../models");
const { verifyToken } = require("../utils/jwt");

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res
                .status(401)
                .json({ message: "user tidak terauthentikasi" });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return res
                .status(401)
                .json({ message: "user tidak terauthentikasi" });
        }

        const user = await User.findOne({ where: { id: decoded?.id } });
        if (!user) {
            return res.status(401).json({ message: "user tidak ditemukan" });
        }

        req.user = user;

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

const isUserOwn = async (req, res, next) => {
    try {
        const review = await Review.findOne({ where: { id: req.params.id } });
        const user = req.user;

        if (!review) {
            return res.status(404).json({ message: "review tidak ditemukan" });
        }

        if (review.userId !== user.id) {
            return res
                .status(404)
                .json({ message: "user tidak punya akses data ini" });
        }

        next();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = { authUser, isAdmin, isUserOwn };
