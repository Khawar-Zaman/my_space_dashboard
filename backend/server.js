/* server.js */

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001; // Choose a port other than 3000

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// In-memory "database"
let savedNote = { text: "This is your first note. Feel free to edit it!" };

// API Endpoints for Notes
// GET the current note
app.get('/api/note', (req, res) => {
  res.json(savedNote);
});

// POST (update) the note
app.post('/api/note', (req, res) => {
  const { text } = req.body;
  if (text !== undefined) {
    savedNote = { text };
    res.status(200).json({ message: 'Note saved!', note: savedNote });
  } else {
    res.status(400).json({ message: 'No text provided.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});