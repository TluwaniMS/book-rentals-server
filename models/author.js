const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const authorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ],
  about: { type: String, required: true }
});

const Author = mongoose.model("Author", authorSchema);

module.exports = { Author };
