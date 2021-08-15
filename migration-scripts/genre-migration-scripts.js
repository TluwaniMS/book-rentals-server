const { Genre } = require("../models/genre");

async function createSampleGenres() {
  await Genre.insertMany();
}

module.exports = { createSampleGenres };
