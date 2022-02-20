const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  campaignName: {
    type: String,
    required: [true, "name must be given"],
    unique: true,
    trim: true,
  },
  linkURL: {
    type: String,
    trim: true,
  },
  imageURL: {
    type: String,
    trim: true,
  },
});

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
