const express = require("express");
const Video = require("../models/Video");

const router = express.Router();

// Get 10 random videos
router.get("/random", async (req, res) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 10 } }]);
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching videos", error });
  }
});

module.exports = router;
