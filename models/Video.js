const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  thumbnail: String,
});

module.exports = mongoose.model("Video", videoSchema);
