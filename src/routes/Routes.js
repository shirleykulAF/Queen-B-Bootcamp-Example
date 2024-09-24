const express = require("express");
const controller = require("../controllers/Controllers.js");

const router = express.Router();

router.get("/api/memtor");
router.put("/api/memtor");
router.get("/api/memtor/search");

module.exports = router;
