const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'dist' directory (where Vite build output is)
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to handle navigation (single-page apps need this)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
