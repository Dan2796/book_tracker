let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  const readMessage = read ? 'already read' : 'not read yet';
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}.`;
  };
}

function addBookToLibrary(book) {
  library.push(book);
}

const theHobbit = new Book(
  'The Hobbit',
  'J.R.R Tolkien',
  295,
  false,
);

const aGameOfThrones = new Book(
  'A Game of Thrones',
  'George R. R. Martin',
  694,
  true,
)

addBookToLibrary(theHobbit);
addBookToLibrary(aGameOfThrones);

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// console.log(theHobbit.info());