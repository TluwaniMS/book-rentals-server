const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const genreSchema = new Schema({
  genre: { type: String, required: true }
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = { Genre };
