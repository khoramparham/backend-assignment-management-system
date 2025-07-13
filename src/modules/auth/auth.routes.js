const { Router } = require("express");
const authController = require("./auth.controller");

const router = Router();
router.post("/sendOtp", authController.sendOtp);
router.post("/checkOtp", authController.checkOtp);
module.exports = { AuthRouter: router };
