const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database Connected Successfully. ${mongoose.connection.host}`);
  } catch (error) {
    console.log("DB error==========>", error);
  }
};

module.exports = { connectDB };
