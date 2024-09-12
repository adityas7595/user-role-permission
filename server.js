const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { connectDB } = require("./config/dbConn");

dotenv.config();

//connect DB
connectDB();

const PORT = process.env.PORT || 3003;
app.listen(PORT, (req, res) => {
  console.log(`App running on ${PORT}`);
});
