const { Comment } = require("../models/comments");
const { users } = require("../sample-data/users");
const {
  usersAndCommentsIdLinks
} = require("../sample-data/users-and-comments-id-links");

async function linkUsersToComments() {
  usersAndCommentsIdLinks.forEach(async (link) => {
    await dbQueryRunnerForLinkingUsersToComments(link.userId, link.commentIds);
  });
}

async function dbQueryRunnerForLinkingUsersToComments(userId, commentIds) {
  commentIds.forEach(async (commentId) => {
    let user = extractUserById(userId);
    await Comment.updateOne({ _id: commentId }, { $push: { user: user } });
  });
}

function extractUserById(userId) {
  const linkedUser = users.filter((user) => user.id === userId);

  return linkedUser;
}

module.exports = { linkUsersToComments };
