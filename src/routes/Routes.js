const express = require("express");
const controller = require("../controllers/Controllers.js");

const router = express.Router();

router.get("/api/memtor", controller.getAllMentors);
router.put("/api/memtor", controller.addMentor);
router.get("/api/memtor/search", controller.getMentorByField);

module.exports = router;
