const { Author } = require("../models/author");
const { authors } = require("../sample-data/authors");

async function createSampleAuthors() {
  await Author.insertMany(authors);
}

module.exports = { createSampleAuthors };
