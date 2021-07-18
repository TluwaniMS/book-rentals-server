const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/error-handler");

router.post(
  "/rent-book/:userId/:bookId",
  errorHandler(async (req, res) => {})
);

router.put(
  "/return-rented-book/:userId/:bookId",
  errorHandler(async (req, res) => {})
);
module.exports = router;
