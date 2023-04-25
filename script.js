const main = document.querySelector('.main');
const submitNewBookButton = document.querySelector('.submit-new-book');
const addBookForm = document.querySelector('.addBookForm');
const notForm = document.querySelector('.notForm');
const addNewBookButton = document.querySelector('.add-new-book');
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.readMessage = read ? 'already read' : 'not read yet';
  this.info = function returnInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readMessage}.`;
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
);

addBookToLibrary(theHobbit);
addBookToLibrary(aGameOfThrones);

function addCard(book) {
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = book.info();
  main.appendChild(card);
}

function displayLibrary(library) {
  // start by removing existing cards
  const elements = document.getElementsByClassName('card');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  library.forEach((book) => {
    addCard(book);
  });
}

displayLibrary(myLibrary);

submitNewBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
  );
  addBookToLibrary(newBook);
  addBookForm.reset();
  addBookForm.classList.add('hidden');
  notForm.classList.remove('blurred');
  displayLibrary(myLibrary);
});

addNewBookButton.addEventListener('click', () => {
  addBookForm.classList.remove('hidden');
  notForm.classList.add('blurred');
  document.getElementById('title').focus();
});
