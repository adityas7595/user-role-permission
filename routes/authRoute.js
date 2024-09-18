const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

const { registervalidator, loginvalidator } = require("../helper/validator");
const router = express.Router();

router.post("/register", registervalidator, registerController);
router.post("/login", loginvalidator, loginController);

module.exports = router;
