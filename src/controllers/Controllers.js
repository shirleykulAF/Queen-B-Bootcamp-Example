const postgres = require("../services/postgres");
const bcrypt = require("bcryptjs");

async function getAllMentors(req, res) {
  try {
    console.log("Received request to get all mentors");
    const mentors = await postgres.getAllMentors();
    console.log(mentors.data);

    // checking that the db is not empty and sending back the data
    if (mentors.data.length === 0) {
      res.status(404).json({ message: "No mentors found" });
    } else {
      res.status(200).json(mentors.data);
    }
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).send("Error fetching mentors from database");
  }
}

async function addMentor(req, res) {
  const data = req.body;
  try {
    const result = await postgres.createMentor(data);

    if (result.ok) {
      return res
        .status(201)
        .send({ message: `User ${result.data.id} created`, data: result.data });
    } else {
      return res
        .status(400)
        .send({ error: "Error creating mentor", details: result.error });
    }
  } catch (error) {
    console.error("Error in addMentor:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

function getMentorByField(req, res) {
  console.log("Searching for your desired mentors");
}

async function addUser(req, res) {
  const data = req.body;

  const existingUser = await postgres.findUserByEmail(data.email);

  if (existingUser) {
    return res.status(409).send({ error: "Email already exists" });
  }

  const saltRounds = 10; // Define how secure the salt should be
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  try {
    const result = await postgres.createUser(
      data.email,
      hashedPassword,
      data.type
    );

    if (result.ok) {
      return res
        .status(201)
        .send({ message: `User created`, data: result.data });
    } else {
      return res
        .status(400)
        .send({ error: "Error creating user", details: result.error });
    }
  } catch (error) {
    console.error("Error in add user:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

async function connectUser(req, res) {
  const data = req.query;

  try {
    const existingUser = await postgres.findUserByEmail(data.email);

    if (!existingUser) {
      return res.status(404).send({ error: "Email not exists in DB" });
    }

    const storedPassword = await postgres.getPasswordOfUser(data.email);

    const passwordMatch = await bcrypt.compare(data.password, storedPassword);

    if (passwordMatch) {
      return res.status(201).send({
        data: existingUser.type,
        message: `User  logged in successfully`,
      });
    } else {
      return res.status(400).send({ error: "Invalid password" });
    }
  } catch (error) {
    console.error("Error in add mentor:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

module.exports = {
  getAllMentors,
  addMentor,
  getMentorByField,
  addUser,
  connectUser,
};
