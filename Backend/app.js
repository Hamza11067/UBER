const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const app = express();
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, from backend!");
});

module.exports = app;
