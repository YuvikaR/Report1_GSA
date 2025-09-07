const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Your 5 links here
const links = [
  "https://www.wikipedia.org/",
  "https://www.openai.com/",
  "https://www.github.com/",
  "https://www.spotify.com/",
  "https://www.google.com/"
];

let counter = 0;

app.get("/", (req, res) => {
  const url = links[counter % links.length]; // pick next link
  counter++;
  res.redirect(url); // send user there
});

app.listen(port, () => {
  console.log(`QR Rotator running at http://localhost:${port}`);
});