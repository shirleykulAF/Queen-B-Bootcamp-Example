const express = require("express");
const controller = require("../controllers/Controllers.js");

const router = express.Router();

router.put("/", controller.addUser);
router.get("/", controller.connectUser);

module.exports = router;
