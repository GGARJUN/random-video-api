const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Sample video data
const videos = [
    { id: 1, title: 'Video 1', url: 'https://www.example.com/video1.mp4' },
    { id: 2, title: 'Video 2', url: 'https://www.example.com/video2.mp4' },
    { id: 3, title: 'Video 3', url: 'https://www.example.com/video3.mp4' },
    { id: 4, title: 'Video 4', url: 'https://www.example.com/video4.mp4' },
    { id: 5, title: 'Video 5', url: 'https://www.example.com/video5.mp4' },
    { id: 6, title: 'Video 6', url: 'https://www.example.com/video6.mp4' },
    { id: 7, title: 'Video 7', url: 'https://www.example.com/video7.mp4' },
    { id: 8, title: 'Video 8', url: 'https://www.example.com/video8.mp4' },
    { id: 9, title: 'Video 9', url: 'https://www.example.com/video9.mp4' },
    { id: 10, title: 'Video 10', url: 'https://www.example.com/video10.mp4' },
    // Add more videos as needed
];

// Endpoint to get 10 random videos
app.get('/api/random-videos', (req, res) => {
    const shuffled = videos.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    res.json(selected);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});