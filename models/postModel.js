const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
      },
      description: {
        type: String,
        required: [true, "Description is required"],
      },
      category: {
        type: Array,
        required: false
      }
});

module.exports = mongoose.model('Post', postSchema);