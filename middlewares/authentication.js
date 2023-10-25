const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authUser = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const token = auth?.slice(7);
        if (!token) {
            return res.status(401).json({ message: "user tidak terauthentikasi" });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ message: "user tidak ditemukan" });
        }

        
        const user = await User.findOne({ where: { email: decoded?.email } });
        if (!user) {
            return res.status(401).json({ message: "user tidak ditemukan" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = { authUser };