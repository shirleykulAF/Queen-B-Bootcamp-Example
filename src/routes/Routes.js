const express = require("express");
const controller = require("../controllers/Controllers.js");

const router = express.Router();

router.post("/api/memtor", () => {});
router.get("/api/memtor/:id", () => {});
router.update("/api/memtor", () => {});
// router.put("/addMentor", controller.addMentors);

module.exports = router;
