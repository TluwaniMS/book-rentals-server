const { Genre } = require("../models/genre");
const { genres } = require("../sample-data/genres");

async function createSampleGenres() {
  await Genre.insertMany(genres);
}

module.exports = { createSampleGenres };
