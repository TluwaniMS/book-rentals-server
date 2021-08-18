const { createSampleAuthors } = require("./authors-migration-scripts");
const { createSampleBooks } = require("./books-migration-scripts");
const { createSampleComments } = require("./comments-migration-scripts");
const { createSampleGenres } = require("./genre-migration-scripts");
const {
  linkAuthorsToBooks,
  linkBooksToAuthors
} = require("../migration-script-services/authors-and-books-relationship-script-service");
const {
  linkCommentsToBooks
} = require("../migration-script-services/books-and-comments-relationship-script-service");
const {
  linkUsersToComments
} = require("../migration-script-services/users-and-comments-script-services");

async function creatingMainDocumentsWithoutRelationships() {
  Promise.all([
    createSampleGenres(),
    createSampleComments(),
    createSampleBooks(),
    createSampleAuthors()
  ])
    .then(() => {
      console.log("Main documents created successfully...");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function creatingMainDocumentRelationships() {
  Promise.all([
    linkAuthorsToBooks(),
    linkBooksToAuthors(),
    linkCommentsToBooks(),
    linkUsersToComments()
  ])
    .then(() => {
      console.log("Document relationships created successfully...");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

module.exports = {
  creatingMainDocumentsWithoutRelationships,
  creatingMainDocumentRelationships
};
