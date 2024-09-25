const express = require("express");
const controller = require("../controllers/Controllers.js");

const router = express.Router();

// GET all mentors
router.get('/', controller.getAllMentors);

router.put('/', controller.addMentor);
router.get('/search', controller.getMentorByField);

module.exports = router;
