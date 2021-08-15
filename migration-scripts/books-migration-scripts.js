const { Book } = require("../models/book");

async function createSampleBooks() {
  await Book.insertMany();
}

module.exports = { createSampleBooks };
