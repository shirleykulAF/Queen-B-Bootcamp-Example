const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// get all users
router.get("/getAllUsers", controller.getAllUsers);

// get all mentors route
router.get("/mentors", controller.getMentors);

// add mentor route
// router.post("/mentors", controller.addMentor);

//////// (below are optional) ////////

// delete mentor route
router.delete("/mentors/:email", controller.deleteMentor);

// update mentor route
router.put("/mentors/:email", controller.updateMentor);

// signup route (optional)
router.post("/signup", controller.signup);

// login route (optional)
router.post("/login", controller.login);

module.exports = router;
