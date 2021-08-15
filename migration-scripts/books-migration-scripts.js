const { Book } = require("../models/book");
const { books } = require("../sample-data/books");

async function createSampleBooks() {
  await Book.insertMany(books);
}

module.exports = { createSampleBooks };
