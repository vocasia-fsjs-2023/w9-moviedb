const { user } = require("../models");
const bcrypt = require("bcrypt");
const { generateToken } = require('../helps/jwt');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isExist = await user.findOne({ where: { email } });
        if (isExist) {
            throw {name: "bad request", message: "Email/password sudah terdaftar"};
        }

        const hashedPassword = await bcrypt.hashSync(password, 10);

        const User = await user.create({ 
            name, 
            email, 
            password: hashedPassword
        });
        
        return res.status(200).json({
            message: 'User Registered Succesfully',
            data: User
        });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'User Registered Failed',
            error: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const User = await user.findOne({ where: { email } });

        if (!User) {
            throw {name: "bad request", message: "Email tidak terdaftar"};
        }

        const isValidPassword = await bcrypt.compare(password, User.password);
        if (!isValidPassword) {
            throw {name: "bad request", message: "Password salah"};
        }

        const payload = {
            id: User.id,
            email: User.email,
            isAdmin: User.isAdmin
        };

        const token = generateToken(payload);
        
        return res.status(200).json({ 
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Login Failed' });
    }
};

module.exports = { 
    register, 
    login 
};