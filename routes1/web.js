// const express = require('express');
const path = require("path");

// const router = express.Router();
const router = require('express').Router();


router.get("/", (req, res) => {
  const indexHtmlPath = path.join(__dirname, '..', "public", "index.html");
  
  res.sendFile(indexHtmlPath);
});

router.get("/notes", (req, res) => {
  const notesHtmlPath = path.join(__dirname, '..', "public", "notes.html");
  
  res.sendFile(notesHtmlPath);
});

// router.get("*", (req, res) => {
//   const notFoundHtmlPath = path.join(__dirname, '..', "public", "404.html");

//   res.sendFile(notFoundHtmlPath);
// });

module.exports = router;