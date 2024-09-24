const app = require('express');
const usersController = require('../controllers/usersController');

const router = app.Router();

router.get('/api/helloworld', (req, res) => {
  res.send('Hello World');
});


router.get('/users', usersController.getAllUsers);
router.post('/users/:userId', usersController.createUser);

module.exports = router;