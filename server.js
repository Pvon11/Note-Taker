const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const db = require("./db/db.json");
const routes = require("./routes");
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

// GET Route for notes
// app.get("/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/notes.html"))
// );

// app.get("/api/notes", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(__dirname + "/db/db.json", "utf-8"));

//   res.status(200).json(data);
// });

// app.post("/api/notes", (req, res) => {
//   const postData = { ...req.body, id: uuidv4() };

//   let dataFromDb = JSON.parse(
//     fs.readFileSync(__dirname + "/db/db.json", "utf-8")
//   );

//   dataFromDb.push(postData);

//   fs.writeFileSync(
//     __dirname + "/db/db.json",
//     JSON.stringify(dataFromDb),
//     "utf-8"
//   );

//   res.status(200).json(dataFromDb);
// });

// GET Route for index page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
