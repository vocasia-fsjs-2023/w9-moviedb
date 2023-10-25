const { User } = require("../models");
const bcrypt = require("bcrypt");

class UserController {
    static async register(req, res, next) {
        const { name, email, password } = req.body;
        try {
            const emailUsed = await User.findOne({
                where: { email }
            });
            if (emailUsed) {
                return res.status(400).json({message: "email sudah digunakan"})
            }
            const hashPassword = await bcrypt.hash(password, 10);
            await User.create({
                nama: name,
                email,
                password: hashPassword,
            });
            return res.status(201).json({message: "akun berhasil dibuat, silakan login"});
        } catch (error) {
            next(error);
        }
    }
    
    static async login(req, res, next) {
        const {  email, password } = req.body;
        try{
            const user = await User.findOne({
                where: { email }
            });
            if (!user) {
                return res.status(400).json({message: "email/password salah"})
            }
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.status(400).json({message: "email/password salah"})
            }

            const payload = {
                id: user.id,
                email: user.email,
            };

            const token = generateToken(payload);
            res.status(200).json({
                token,
            });
        }catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;