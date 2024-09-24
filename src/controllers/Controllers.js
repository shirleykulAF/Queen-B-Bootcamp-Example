const postgres = require("../services/postgres");

function getAllMentors(req, res) {
  const data = postgres.getAllMentors();
  console.log("Received request get all mentors");
  res.send(data);
}

function addMentor(req, res) {
  // received a request for creating a user - userId
  // with the data in the body
  console.log("Received request create user");
  // const { userId } = req.params;
  const data = req.body;

  console.log("data: ", data);
  postgres.createMentor(data);

  //console.log(`User ${userId} created`, data);
  res.send(`User created`);
}

function getMentorByField(req, res) {
  console.log("Searching for your desired mentors");
}

module.exports = {
  getAllMentors,
  addMentor,
  getMentorByField,
};
