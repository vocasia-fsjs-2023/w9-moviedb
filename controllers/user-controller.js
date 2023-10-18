const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/jwt");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isExist = await User.findOne({ where: { email } });
        if (isExist) {
            return res.status(400).json({ message: "Email sudah terdaftar" });
        }

        await User.create({ name, email, password });

        return res.status(201).json({
            message: "akun berhasil dibuat, silahkan login.",
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res
                .status(400)
                .json({ message: "Email atau password salah" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res
                .status(400)
                .json({ message: "Email atau password salah" });
        }

        const payload = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        };

        const token = generateToken(payload);

        return res.status(200).json({ token });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = { register, login };
