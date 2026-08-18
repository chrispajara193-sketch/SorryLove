const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Customizable Apology Data
const apologyData = {
  name: "Love", // Replace with her actual name or nickname
  message: "I hate that I upset you. You deserve the absolute best, and I'm really sorry for messing up. I love you so much and want to make it up to you.",
  promises: [
    "To always listen to how you feel.",
    "To never go to bed mad at each other.",
    "Unlimited hugs and your favorite snacks."
  ]
};

// API endpoint sending the custom message
app.get('/api/apology', (req, res) => {
  res.json(apologyData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Apology page is ready! Open http://localhost:${PORT}`);
});