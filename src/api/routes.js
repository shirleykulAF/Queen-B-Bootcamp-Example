const { Router } = require("express");
const controller = require("./controller");

const router = Router();
// get all mentors route
router.get("/mentors", controller.getMentors);

// add mentor route
router.post("/mentors", controller.addMentor);

//////// (below are optional) ////////

// delete mentor route
router.delete("/mentors/:email", controller.deleteMentor);

// update mentor route
router.put("/mentors/:email", controller.updateMentor);

// signup route (optional)

// login route (optional)

module.exports = router;
