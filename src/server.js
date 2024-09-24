const express = require("express");
// const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { Pool } = require("pg");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5001;

const app = express();
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "mysecretpassword",
  port: 5432,
});

/*
CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts
cross-origin HTTP requests with other servers and specifies which domains access your resources.
We will use this Node.js package to allow cross-origin requests.
 */
app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, "../client/build")));

// Sign-Up Route
app.post("/api/signup", async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  console.log("Received data:", { firstName, lastName, email, password, role });

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Generate unique user ID
    const userId = uuidv4();

    // Try connecting to database
    const connectingDB = await pool.query("SELECT * FROM users");
    ``;
    console.log("DB connected:", connectingDB);

    // Check if user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into database including userID
    const newUser = await pool.query(
      "INSERT INTO users (id, first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [userId, firstName, lastName, email, password, role]
    );

    // Respond with the new user's data (without the password)
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// For testing
app.get("/api/helloworld", (req, res) => {
  res.send("Hello World");
});

// app.get("/*", (req, res) => {
//   // res.send('Anything else');
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
