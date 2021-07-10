const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  passWord: { type: String, required: true },
  email: { type: String, required: true },
  booksRented: [
    {
      type: Schema.Types.ObjectId,
      ref: "RentedBook"
    }
  ],
  isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
