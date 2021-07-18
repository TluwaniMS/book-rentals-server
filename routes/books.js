const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/error-handler");

router.get(
  "/get-all-books",
  errorHandler(async (req, res) => {})
);

router.get(
  "/get-book/:bookId",
  errorHandler(async (req, res) => {})
);

router.get(
  "/get-books-by-category/:category",
  errorHandler(async (req, res) => {})
);

router.get(
  "/get-books-by-rating/:rating",
  errorHandler(async (req, res) => {})
);

router.get(
  "/get-books-by-author/:authorName",
  errorHandler(async (req, res) => {})
);

router.put(
  "/update-book/:bookId",
  errorHandler(async (req, res) => {})
);

router.put(
  "/archive-book/:bookId",
  errorHandler(async (req, res) => {})
);

router.put(
  "/unarchive-book/:bookId",
  errorHandler(async (req, res) => {})
);

module.exports = router;
