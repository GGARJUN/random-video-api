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

// Add new video
router.post("/add", async (req, res) => {
    try {
      const { title, url, thumbnail } = req.body;
      const newVideo = new Video({ title, url, thumbnail });
      await newVideo.save();
      res.status(201).json({ message: "Video added successfully", video: newVideo });
    } catch (error) {
      res.status(500).json({ message: "Error adding video", error });
    }
  });

module.exports = router;
