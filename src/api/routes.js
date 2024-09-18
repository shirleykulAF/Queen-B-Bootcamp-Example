const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// get all users
router.get("/getAllUsers", controller.getAllUsers);

// get all mentors route
router.get("/mentors", controller.getMentors);

// add mentor route
// router.post("/mentors", controller.addMentor);

// delete mentor route
router.delete("/deleteMentors/:email", controller.deleteMentor);

// update mentor route
router.put("/updateMentorsDetails", controller.updateMentor);

// signup route
router.post("/signup", controller.signup);

// login route
router.post("/login", controller.login);

router.get("/getMentorDetailsByEmail/:email", controller.getMentorDetailsByEmail)

module.exports = router;
