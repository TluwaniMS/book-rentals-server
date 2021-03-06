const { createSampleAuthors } = require("./authors-migration-scripts");
const { createSampleBooks } = require("./books-migration-scripts");
const { createSampleComments } = require("./comments-migration-scripts");
const { createSampleGenres } = require("./genre-migration-scripts");
const {
  createSampleUsers
} = require("../migration-scripts/users-migration-scripts");
const {
  linkAuthorsToBooks,
  linkBooksToAuthors
} = require("../migration-script-services/authors-and-books-relationship-script-service");
const {
  linkCommentsToBooks
} = require("../migration-script-services/books-and-comments-relationship-script-service");
const { User } = require("../models/user");

async function creatingMainDocumentsWithoutRelationships() {
  Promise.all([
    createSampleGenres(),
    createSampleComments(),
    createSampleBooks(),
    createSampleAuthors(),
    createSampleUsers()
  ])
    .then(async () => {
      console.log("Main documents created successfully...");
      await creatingMainDocumentRelationships();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function creatingMainDocumentRelationships() {
  Promise.all([
    linkAuthorsToBooks(),
    linkBooksToAuthors(),
    linkCommentsToBooks()
  ])
    .then(() => {
      console.log("Document relationships created successfully...");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function populatingDatabaseWithSampleData() {
  const users = await User.find({});

  if (users.length > 0) {
    console.log("Database is already populated...");
  } else {
    await creatingMainDocumentsWithoutRelationships();
  }
}

module.exports = {
  populatingDatabaseWithSampleData
};
