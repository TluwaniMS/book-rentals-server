const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const commentSchema = new Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: false, default: 0 },
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userLastname: { type: String, required: true }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
