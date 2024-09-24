





function getAllMentors(req, res) {
  console.log("Received request get all mentors");
  res.send(["Get all users response", "User 1", "User 2"]);
}

function addMentor(req, res) {
  // received a request for creating a user - userId
  // with the data in the body
  console.log("Received request create user");

  const { userId } = req.params;
  const data = req.body;
  console.log(`User ${userId} created`, data);
  res.send(`User ${userId} created`);
}


function getMentorByField(req, res){
  console.log("Searching for your desired mentors");
}


module.exports = {
  getAllUsers,
  createUser,
  getMentorByField,
};
