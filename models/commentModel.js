const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
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
  comment: {
    type: String,
    required: [true, "Comment is required"],
  },
});

module.exports = mongoose.model("Comment", commentSchema);
