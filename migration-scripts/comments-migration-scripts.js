const { Comment } = require("../models/comments");
const { comments } = require("../sample-data/comments");

async function createSampleComments() {
  await Comment.insertMany(comments);
}

module.exports = { createSampleComments };
