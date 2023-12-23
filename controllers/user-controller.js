const { User } = require("../models");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");
const { ResponseError } = require("../utils/response-error");

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isExist = await User.findOne({ where: { email } });
        if (isExist) {
            throw new ResponseError(400, "Email sudah terdaftar");
        }

        await User.create({ name, email, password });

        return res.status(201).json({
            message: "akun berhasil dibuat, silahkan login.",
        });
    } catch (e) {
        next(e);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new ResponseError(400, "Email atau password salah");
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new ResponseError(400, "Email atau password salah");
        }

        const payload = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        };

        const token = generateToken(payload);

        return res.status(200).json({ token });
    } catch (e) {
        next(e);
    }
};

module.exports = { register, login };