const { Author } = require("../models/author");
const { Book } = require("../models/book");
const {
  authorsAndBooksIdLinks
} = require("../sample-data/authors-and-books-id-links");
const { books } = require("../sample-data/books");
const { authors } = require("../sample-data/authors");

async function linkBooksToAuthors() {
  authorsAndBooksIdLinks.forEach(async (link) => {
    await dbQueryRunnerForLinkingBooksToAuthors(link.authorId, link.bookIds);
  });
}

async function dbQueryRunnerForLinkingBooksToAuthors(authorId, bookIds) {
  bookIds.forEach(async (bookId) => {
    let book = extractBookById(bookId);
    await Author.updateOne({ _id: authorId }, { $push: { books: book } });
  });
}

function extractBookById(bookId) {
  const book = books.filter((book) => book._id === bookId)[0];

  return book;
}

async function linkAuthorsToBooks() {
  authorsAndBooksIdLinks.forEach(async (link) => {
    await dbQueryRunnerForLinkingAuthorsToBooks(link.authorId, link.bookIds);
  });
}

async function dbQueryRunnerForLinkingAuthorsToBooks(authorId, bookIds) {
  bookIds.forEach(async (bookId) => {
    let author = extractAuthorById(authorId);
    await Book.updateOne({ _id: bookId }, { $push: { author: author } });
  });
}

function extractAuthorById(authorId) {
  const author = authors.filter((user) => user._id === authorId)[0];

  return author;
}

module.exports = { linkBooksToAuthors, linkAuthorsToBooks };
