const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use("/api/auth", require("./routes/api/auth"));

app.get("/", (req, res) => {
  res.send("WE ARE AT HOME");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`-----Server started on port: ${PORT}------`)
);

module.exports = app;
