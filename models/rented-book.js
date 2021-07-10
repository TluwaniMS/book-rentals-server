const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const rentedBookSchema = new Schema({
  dateRented: { type: Date, default: Date.now },
  dateTobeReturned: { type: Date },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  quantity: { type: Number, required: true }
});

const RentedBook = mongoose.model("RentedBook", rentedBookSchema);

module.exports = { RentedBook };
