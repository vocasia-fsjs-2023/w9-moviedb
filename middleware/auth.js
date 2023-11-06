const {Review, User} = require ("../models")
const { verifyToken } = require("../jwt/index");

const authenticationUser = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const token = auth?.slice(7);
        if(!token){
            throw {name: "unauthorized", message: "user tidak memiliki akses"};
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            throw {name: "unauthorized", message: "user tidak memiliki akses"};
        }
        
        const user = await User.findByPk(decoded.id)
        req.user = user;
        next()
    }catch (error){
        next(error);
    }
}

const isAdmin = (req, res, next) => {
    try{
        const { isAdmin } = req.user;
        if (!isAdmin) {
            return res
            .status(401)
            .json({message: "anda tidak punya akses"})
        }
    }catch (error){
        next(error);
    }
}

const authenticationIsUser = async (req, res, next) => {
    try{
        const review = await Review.findOne({
            where: { id: req.params.id }
        });
        const user = req.user;
        if(!review) {
            return res
            .status(401)
            .json({message: "tidak ada review"});
        }
        if (review.userId !== user.id) {
            return res
            .status(401)
            .json({message: "tidak ada akses"})
        }
    }catch (error){
        next(error);
    }
}

module.exports = {authenticationUser, isAdmin, authenticationIsUser};