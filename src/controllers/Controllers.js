
const postgres = require('../services/postgres')


async function getAllMentors(req, res) {
  try {
    console.log("Received request to get all mentors");
    const mentors = await postgres.getAllMentors();
    console.log(mentors.data);  
    
    // checking that the db is not empty and sending back the data
    if (mentors.data.length === 0) {
      res.status(404).json({ message: 'No mentors found' });
    } else {
      res.status(200).json(mentors);
    }
  } catch (error) {
    console.error('Error fetching mentors:', error);
    res.status(500).send('Error fetching mentors from database');
  }
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
  getAllMentors,
  addMentor,
  getMentorByField,
};
