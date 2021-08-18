const { Book } = require("../models/book");
const {
  booksAndCommentsIdLinks
} = require("../sample-data/books-and-comments-id-links");
const { comments } = require("../sample-data/comments");

async function linkCommentsToBooks() {
  booksAndCommentsIdLinks.forEach(async (link) => {
    await dbQueryRunnerForLinkingCommentsToBooks(link.bookId, link.commentIds);
  });
}

async function dbQueryRunnerForLinkingCommentsToBooks(bookId, commentIds) {
  commentIds.forEach(async (commentId) => {
    let comment = extractCommentById(commentId);
    await Book.updateOne({ _id: bookId }, { $push: { comments: comment } });
  });
}

function extractCommentById(commentId) {
  const comment = comments.filter((review) => review._id === commentId)[0];

  return comment;
}

module.exports = { linkCommentsToBooks };
