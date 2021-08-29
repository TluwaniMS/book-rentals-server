const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/error-handler");
const { Book } = require("../models/book");

router.get(
  "/get-all-books",
  errorHandler(async (req, res) => {
    const books = await Book.find({}).populate("comments");

    res.status(200).send({ data: books });
  })
);

router.get(
  "/get-book/:bookId",
  errorHandler(async (req, res) => {
    const { bookId } = req.params;

    const book = await Book.find({ _id: bookId }).populate("comments");

    res.status(200).send({ data: book });
  })
);

router.get(
  "/get-books-by-genre/:genre",
  errorHandler(async (req, res) => {
    const { genre } = req.params;

    const books = await Book.find({ genre: genre }).populate("comments");

    res.status(200).send({ data: books });
  })
);

router.get(
  "/get-books-by-rating/:rating",
  errorHandler(async (req, res) => {
    const { rating } = req.params;

    const books = await Book.find({ rating: rating }).populate("comments");

    res.status(200).send({ data: books });
  })
);

router.get(
  "/get-books-by-author/:authorId",
  errorHandler(async (req, res) => {
    const { authorId } = req.params;
  })
);

router.put(
  "/update-book/:bookId",
  errorHandler(async (req, res) => {
    const { bookId } = req.params;
  })
);

router.put(
  "/archive-book/:bookId",
  errorHandler(async (req, res) => {
    const { bookId } = req.params;

    await Book.updateOne({ _id: bookId }, { $set: { isArchived: true } });

    res.status(200).send({ success: true });
  })
);

router.put(
  "/unarchive-book/:bookId",
  errorHandler(async (req, res) => {
    const { bookId } = req.params;

    await Book.updateOne({ _id: bookId }, { $set: { isArchived: false } });

    res.status(200).send({ success: true });
  })
);

module.exports = router;
