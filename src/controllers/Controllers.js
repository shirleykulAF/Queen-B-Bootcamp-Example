const postgres = require("../services/postgres");

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

module.exports = {
  getAllMentors,
  addMentor,
  getMentorByField,
};