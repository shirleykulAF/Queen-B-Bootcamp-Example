

function getAllUsers(req, res) {
  console.log('Received request get all users');
  res.send(['Get all users response', 'User 1', 'User 2']);
}

function createUser(req, res) {
  // received a request for creating a user - userId
  // with the data in the body
  console.log('Received request create user');

  const { userId } = req.params;
  const data = req.body;
  console.log(`User ${userId} created`, data);
  res.send(`User ${userId} created`);
}

module.exports = {
  getAllUsers,
  createUser
};