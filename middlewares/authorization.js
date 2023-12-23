const { Review } = require("../models");

const isAdmin = async (req, res, next) => {
    try {
        const { isAdmin } = req.authUser;
        if (!isAdmin) {
            return res.status(401).json({ message: "akses hanya untuk user admin" });
        }

        next();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const isUser = async (req, res, next) => {
    try {
        const review = await Review.findOne({ where: { id: req.params.id } });
        const user = req.authUser;
        if (!review) {
            return res.status(404).json({ message: "data review tidak ditemukan" });
        }

        if (review.userId !== user.id) {
            return res.status(404).json({ message: "user tidak punya akses data ini" });
        }

        next();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
module.exports = { isAdmin, isUser };