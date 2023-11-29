const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 5001;
const teachers = require("./teachers.js");
const {json} = require("express");

/*
CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts
cross-origin HTTP requests with other servers and specifies which domains access your resources.
We will use this Node.js package to allow cross-origin requests.
 */
app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/teachers", (req, res) => {
  res.send(teachers);
});

app.get("/teachers/:id", (req, res) => {
  const teacherData = teachers.find(f => f.id == req.params.id);
  // const teacherDataJson = JSON.stringify(teacherData);
  res.send([teacherData]);
});

app.get("/*", (req, res) => {
  // res.send('Anything else');
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
