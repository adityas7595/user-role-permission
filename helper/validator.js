const { check } = require("express-validator");

exports.registervalidator = [
  check("name", "Name is required").notEmpty(),
  check("email", "Please enter a valid email address")
    .isEmail()
    .normalizeEmail({
      gmail_remove_dots: true,
    }),
  check("password", "Password is required").notEmpty(),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter"),
];

exports.loginvalidator = [
  check("email", "Please enter a valid email address")
    .isEmail()
    .normalizeEmail({
      gmail_remove_dots: true,
    }),
  check("password", "Password is required").notEmpty(),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter"),
];
