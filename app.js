const express = require("express");

const adRouter = require("./routes/adRouter");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1/ads", adRouter);

module.exports = app;
