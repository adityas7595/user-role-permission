const { validationResult } = require("express-validator");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const validReq = validationResult(req);
    const { name, email, password } = req.body;
    if (!validReq.isEmpty()) {
      return res.status(400).json({ errors: validReq.array() });
    }

    const isExist = await userModel.findOne({ email });
    console.log("isExist========>", isExist);

    if (isExist) {
      return res.status(404).json({
        status: false,
        message: "This User already exists.",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name,
      email,
      password: hashPassword,
    });

    const userData = await user.save();
    return res.status(200).json({
      status: true,
      message: "Registration Successfully.",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: false,
      message: "Error in register API",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Email & Password not match",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "Email & Password not match",
        success: false,
      });
    }

    console.log(" process.env.JWT_SECRET_KEY", process.env.JWT_SECRET_KEY);
    const payload = { user }; // Pass an object instead of a string

    const token = await JWT.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "2h",
    });

    if (!token) {
      return res.status(404).json({
        message: "Token not found",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successfully.",
      accessToken: token,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: false,
      message: "Error in login API",
      error,
    });
  }
};

module.exports = { registerController, loginController };
