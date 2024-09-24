const app = require('express');
const usersController = require('../controllers/usersController');

const router = app.Router();

router.get('/api/helloworld', (req, res) => {
  res.send('Hello World');
});


router.get('/mentors', usersController.getAllUsers);
router.post('/mentors/:id', usersController.createUser);

module.exports = router;