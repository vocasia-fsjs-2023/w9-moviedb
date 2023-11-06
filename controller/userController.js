const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../jwt/index")

class UserController {
    static async register(req, res, next) {
        const { name, email, password } = req.body;
        try {
            const emailUsed = await User.findOne({
                where: { email }
            });
            if (emailUsed) {
                return res.status(400).json({ message: "email sudah digunakan" })
            }

            await User.create({
                name,
                email,
                password
            });

            return res.status(201).json({ message: "akun berhasil dibuat, silakan login" });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({
                where: { email }
            });
            if (!user) {
                return res.status(400).json({ message: "email/password salah" })
            }
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.status(400).json({ message: "email/password salah" })
            }

            const payload = {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin
            };

            const token = generateToken(payload);
            return res.status(200).json({
                token
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;