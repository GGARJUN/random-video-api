const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Sample video data
const videos = [
    //  https://drive.google.com/file/d/1LPruVXQZcowDKgbdD9vZ2NefFVPZB9d9/view?usp=sharing, https://drive.google.com/file/d/1NUoohULcU38ZlX5JEF3Z3Bh4DrsOnVO7/view?usp=sharing, https://drive.google.com/file/d/1ZsXgOH15cvsXPfjYMO67KemuQyfIo23h/view?usp=sharing, https://drive.google.com/file/d/1ZuOa2eeQNTLVcrS2JK2jLLJzDX4Mqduv/view?usp=sharing, https://drive.google.com/file/d/1_BSzwXbPmoCQ0FKdy5ozBea_Y8b2P_iI/view?usp=sharing, https://drive.google.com/file/d/1_Hcxgw6L_ubPN0EXadj1O1UisKRsP78C/view?usp=sharing, https://drive.google.com/file/d/1afTU9mjVSlYzVm4aG4mYNzXeGrJ2FAdJ/view?usp=sharing, https://drive.google.com/file/d/1gmWNOHB14Nx6xjQti4o6YDAiXAtZPf3H/view?usp=sharing, https://drive.google.com/file/d/1vYtvOlK9wXLZQBpmvl4TS9w9a3-Z2Fza/view?usp=sharing
    { id: 1, title: 'Video 1', url: 'https://drive.google.com/file/d/1LPruVXQZcowDKgbdD9vZ2NefFVPZB9d9/view?usp=sharing' },
    { id: 2, title: 'Video 2', url: 'https://drive.google.com/file/d/1NUoohULcU38ZlX5JEF3Z3Bh4DrsOnVO7/view?usp=sharing' },
    { id: 3, title: 'Video 3', url: 'https://drive.google.com/file/d/1ZsXgOH15cvsXPfjYMO67KemuQyfIo23h/view?usp=sharing' },
    { id: 4, title: 'Video 4', url: 'https://drive.google.com/file/d/1ZuOa2eeQNTLVcrS2JK2jLLJzDX4Mqduv/view?usp=sharing' },
    { id: 5, title: 'Video 5', url: 'https://drive.google.com/file/d/1_BSzwXbPmoCQ0FKdy5ozBea_Y8b2P_iI/view?usp=sharing' },
    { id: 6, title: 'Video 6', url: 'https://drive.google.com/file/d/1_Hcxgw6L_ubPN0EXadj1O1UisKRsP78C/view?usp=sharing' },
    { id: 7, title: 'Video 7', url: 'https://drive.google.com/file/d/1afTU9mjVSlYzVm4aG4mYNzXeGrJ2FAdJ/view?usp=sharing' },
    { id: 8, title: 'Video 8', url: 'https://drive.google.com/file/d/1gmWNOHB14Nx6xjQti4o6YDAiXAtZPf3H/view?usp=sharing' },
    { id: 9, title: 'Video 9', url: 'https://drive.google.com/file/d/1vYtvOlK9wXLZQBpmvl4TS9w9a3-Z2Fza/view?usp=sharing' },
    { id: 10, title: 'Video 10', url: 'https://drive.google.com/file/d/1LPruVXQZcowDKgbdD9vZ2NefFVPZB9d9/view?usp=sharing' },
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