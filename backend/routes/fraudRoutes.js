const express = require("express");
const router = express.Router();
const { getFraudData } = require("../controllers/fraudController");

router.get("/", getFraudData);

module.exports = router;
