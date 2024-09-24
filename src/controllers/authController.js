const { v4: uuidv4 } = require("uuid");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "mysecretpassword",
  port: 5432,
});

// Sign-up logic
exports.signup = async (req, res) => {
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
    console.log("DB connected:", connectingDB);

    // Check if user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

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
};
