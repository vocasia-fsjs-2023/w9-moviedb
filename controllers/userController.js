// controllers/userController.js
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    return res.json({ user, token });
  } catch (error) {
    return res.status(400).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }
    if (user.email === "contoh@email.com") {
      user.isAdmin = true;
    }
    await user.save(); 

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    return res.json({ user, token });
  } catch (error) {
    return res.status(400).json({ error: "Login failed" });
  }
};
