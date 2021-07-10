const { Mongoose, Schema } = require("mongoose");

const genreSchema = new Schema({
  genre: { type: String, required: true }
});

const Genre = Mongoose.model("Genre", genreSchema);

module.exports = { Genre };
