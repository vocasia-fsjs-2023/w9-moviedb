const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(payload, JWT_SECRET);
}

module.exports = {generateToken, verifyToken};