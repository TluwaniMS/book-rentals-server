const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/error-handler");

router.get(
  "/get-books-rented-by-user/:userId",
  errorHandler(async (req, res) => {})
);

router.get(
  "/get-all-books-rented",
  errorHandler(async (req, res) => {})
);

module.exports = router;
