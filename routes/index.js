const express = require("express");
const router = express.Router();
const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.get("/api/notes", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8")
  );

  res.status(200).json(data);
});

router.post("/api/notes", (req, res) => {
  console.log(uuidv4());
  const postData = { ...req.body, id: uuidv4() };

  const savedData = db;
  savedData.push(postData);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(savedData)
  );
  res.status(200).json(savedData);
});

module.exports = router;
