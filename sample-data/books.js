const books = [
  {
    _id: "6118f7547ae5a425c81dfb54",
    title: "Harry Potter and the Deathly Hallows",
    isbn: 1704750,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 5,
    genre: "Action and Adventure",
    rating: 3
  },
  {
    _id: "6118f7547ae5a425c81dfb55",
    title: "The Catcher in the Rye",
    isbn: 3892410,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 8,
    genre: "Classics",
    rating: 3.5
  },
  {
    _id: "6118f7547ae5a425c81dfb56",
    title: "The Alchemist",
    isbn: 1768663,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 2,
    genre: "Fantasy",
    rating: 3
  },
  {
    _id: "6118f7547ae5a425c81dfb57",
    title: "Think and Grow Rich",
    isbn: 9862673,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 4,
    genre: "Detective and Mystery",
    rating: 4
  },
  {
    _id: "6118f7547ae5a425c81dfb58",
    title: "The Da Vinci Code",
    isbn: 2641381,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 6,
    genre: "Historical Fiction",
    rating: 4
  },
  {
    _id: "6118f7547ae5a425c81dfb59",
    title: "The Hobbit",
    isbn: 8511033,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 3,
    genre: "Horror",
    rating: 4
  },
  {
    _id: "6118f7547ae5a425c81dfb5a",
    title: "Dream of the Red Chamber",
    isbn: 1911455,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 12,
    genre: "Essays",
    rating: 4
  },
  {
    _id: "6118f7547ae5a425c81dfb5b",
    title: "The Little Prince",
    isbn: 8019006,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 9,
    genre: "Classics",
    rating: 5
  },
  {
    _id: "6118f7547ae5a425c81dfb5c",
    title: "The Lord of The Rings",
    isbn: 4496074,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 4,
    genre: "Romance",
    rating: 4
  },
  {
    _id: "6118f7547ae5a425c81dfb5d",
    title: "A Tale of Two Cities",
    isbn: 153675,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 3,
    genre: "Action and Adventure"
  },
  {
    _id: "6118f7547ae5a425c81dfb5e",
    title: "Xinhua Zidian",
    isbn: 8073447,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 1,
    genre: "Memoir"
  },
  {
    _id: "6118f7547ae5a425c81dfb5f",
    title: "Don Quixote",
    isbn: 799851,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 8,
    genre: "Romance"
  },
  {
    _id: "6118f7547ae5a425c81dfb60",
    title: "The 5AM Club",
    isbn: 4506714,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 6,
    genre: "Action and Adventure"
  },
  {
    _id: "6118f7547ae5a425c81dfb61",
    title: "A Promised Land",
    isbn: 8398857,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 2,
    genre: "Historical Fiction"
  },
  {
    _id: "6118f7547ae5a425c81dfb62",
    title: "Rogues Gallery",
    isbn: 2126275,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 7,
    genre: "History"
  },
  {
    _id: "6118f7547ae5a425c81dfb63",
    title: "The Old Drift",
    isbn: 9842098,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 3,
    genre: "Horror"
  },
  {
    _id: "6118f7547ae5a425c81dfb64",
    title: "Dark Roads",
    isbn: 3171222,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 1,
    genre: "Classics"
  },
  {
    _id: "6118f7547ae5a425c81dfb65",
    title: "Billy Summers",
    isbn: 5630427,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 8,
    genre: "Action and Adventure"
  },
  {
    _id: "6118f7547ae5a425c81dfb66",
    title: "Atomic Habits",
    isbn: 6218444,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 5,
    genre: "Fantasy"
  },
  {
    _id: "6118f7547ae5a425c81dfb67",
    title: "Untamed",
    isbn: 9865371,
    aboutBook:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantityAvailable: 9,
    genre: "Detective and Mystery"
  }
];

module.exports = { books };
