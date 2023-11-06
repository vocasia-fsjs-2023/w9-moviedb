const express = require("express");
const userController = require("../controller/userController");
// const { payloadParsing } = require("../middleware/payParsing");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;