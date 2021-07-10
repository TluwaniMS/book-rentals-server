const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const commentSchema = new Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: false, default: 0 },
  date: { type: Date, default: Date.now },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
