const { Mongoose, Schema } = require("mongoose");

const commentSchema = new Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: false, default: 0 },
  date: { type: Date, default: Date.now },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Comment = Mongoose.model("Comment", commentSchema);

module.exports = { Comment };
