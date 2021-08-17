const { createSampleAuthors } = require("./authors-migration-scripts");
const { createSampleBooks } = require("./books-migration-scripts");
const { createSampleComments } = require("./comments-migration-scripts");
const { createSampleGenres } = require("./genre-migration-scripts");

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

async function createMainDocumentRelationships() {}
