const express = require("express");
const cors = require("cors");
const path = require("path");
const { Client } = require("pg");
const postgres = require("./services/postgres");
const mentorRoutes = require("./routes/Routes");
require("dotenv").config();

// Constants
const port = process.env.PORT || 5001;

// Create Express Server
const app = express();

// Connect to Postgres
postgres.init();

// Middleware
/*
CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts
cross-origin HTTP requests with other servers and specifies which domains access your resources.
We will use this Node.js package to allow cross-origin requests.
 */
app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, "../client/build")));

// Routes
app.use("/api/mentor", mentorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
