const main = document.querySelector('.main');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  const readMessage = read ? 'already read' : 'not read yet';
  this.info = function returnInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}.`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
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

function addCard(book) {
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = book.info();
  main.appendChild(card);
}

function displayLibrary(library) {
  library.forEach((book) => {
    addCard(book);
  });
}

displayLibrary(myLibrary);
// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// console.log(theHobbit.info());