const postgres = require("../services/postgres");

function getAllMentors(req, res) {
  const data = postgres.getAllMentors();
  console.log("Received request get all mentors");
  res.send(data);
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
