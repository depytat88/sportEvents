// server.js
const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/sportEvents'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200);

app.get('/assets', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/sportEvents/assets'));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/sportEvents/index.html'));
});
