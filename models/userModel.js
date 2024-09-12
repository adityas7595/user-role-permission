const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: Number,
    default: 0, // 0 -> Normal User, 1 -> Admin, 2 -> Sub-Admin, 3 -> Editor
  },
});

module.exports = mongoose.model("User", userSchema);
