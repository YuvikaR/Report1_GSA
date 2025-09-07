const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Your 5 links here
const links = [
  "https://aiskillshouse.com/student/qr-mediator.html?uid=2804&promptId=6",
  "https://aiskillshouse.com/student/qr-mediator.html?uid=2878&promptId=6",
  "https://aiskillshouse.com/student/qr-mediator.html?uid=2802&promptId=6",
  "https://aiskillshouse.com/student/qr-mediator.html?uid=2877&promptId=6",
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
