const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id is required"],
    ref: "User",
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Post id is required"],
    ref: "Post",
  },
});

module.exports = mongoose.model("Comment", likeSchema);
