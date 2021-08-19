const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author"
  },
  isbn: { type: Number, required: true },
  aboutBook: { type: String, required: true },
  quantityAvailable: { type: Number, required: true },
  outOfStock: { type: Boolean, required: true, default: false },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  rating: { type: Number, default: 0 },
  genre: { type: String, default: "Other" },
  isArchived: { type: Boolean, default: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
