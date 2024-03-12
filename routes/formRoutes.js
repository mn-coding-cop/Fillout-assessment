const express = require("express");
const { getFilteredResponses } = require("../services/filloutService");

const router = express.Router();

router.get("/:formId/filteredResponses", getFilteredResponses);

module.exports = router;
