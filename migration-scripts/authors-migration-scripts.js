const { Author } = require("../models/author");

async function createSampleAuthors() {
  await Author.insertMany();
}

module.exports = { createSampleAuthors };
