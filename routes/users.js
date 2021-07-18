const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/error-handler");

router.get(
  "/get-user/:userId",
  errorHandler(async (req, res) => {})
);

router.put(
  "/update-user-info/:userId",
  errorHandler(async (req, res) => {})
);

module.exports = router;
