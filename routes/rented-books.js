const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/error-handler");
const { RentedBook } = require("../models/rented-book");

router.get(
  "/get-books-rented-by-user/:userId",
  errorHandler(async (req, res) => {
    const { userId } = req.params;

    const booksRentedByUser = await RentedBook.find({
      user: { $contains: userId }
    });

    res.status(200).send({ data: booksRentedByUser });
  })
);

router.get(
  "/get-all-books-rented",
  errorHandler(async (req, res) => {
    const rentedBooks = await RentedBook.find({})
      .populate("book")
      .populate("user");

    res.status(200).send({ data: rentedBooks });
  })
);

module.exports = router;
