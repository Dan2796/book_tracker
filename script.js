const main = document.querySelector('.main');
const form = document.querySelector('form');
const submitNewBookButton = document.querySelector('.submit-new-book');
const addBookForm = document.querySelector('.addBookForm');
const notForm = document.querySelector('.notForm');
const addNewBookButton = document.querySelector('.add-new-book');
const cancelButton = document.querySelector('.cancel');
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.pagesMessage = (pages === '' ? 'Unknown' : pages);
  this.read = read;
  this.readMessage = (read ? 'Already read' : 'Not yet read');
}

function addCard(book) {
  const card = document.createElement('div');
  card.className = 'card';
  const title = document.createElement('p');
  title.textContent = book.title;
  title.classList.add('book-title');
  const author = document.createElement('p');
  author.textContent = `by ${book.author}`;
  const pages = document.createElement('p');
  pages.textContent = `${book.pagesMessage} pages`;
  const read = document.createElement('p');
  read.textContent = book.readMessage;
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
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

// add example books at the start so it isn't an empty screen:
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

myLibrary.push(theHobbit);
myLibrary.push(aGameOfThrones);
displayLibrary(myLibrary);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
    document.getElementById('read').checked,
  );
  myLibrary.push(newBook);
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

cancelButton.addEventListener('click', () => {
  addBookForm.classList.add('hidden');
  notForm.classList.remove('blurred');
  addBookForm.reset();
});
