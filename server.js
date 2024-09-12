const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for serving static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback route to serve index.html for any unmatched routes (single-page app routing)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
