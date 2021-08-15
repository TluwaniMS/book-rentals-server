const { Comment } = require("../models/comments");

async function createSampleComments() {
  await Comment.insertMany();
}

module.exports = { createSampleComments };
