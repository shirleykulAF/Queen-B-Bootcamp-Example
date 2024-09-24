const express = require("express");
const controller = require("../controllers/Controllers.js");

const router = express.Router();

router.get("/api/mentor", controller.getAllMentors);
router.put("/api/mentor", controller.addMentor);
router.get("/api/mentor/search", controller.getMentorByField);

module.exports = router;
