const main = document.querySelector('.main');
const form = document.querySelector('form');
const addBookForm = document.querySelector('.addBookForm');
const notForm = document.querySelector('.notForm');
const addNewBookButton = document.querySelector('.add-new-book');
const cancelButton = document.querySelector('.cancel');
const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  get pagesMessage() {
    return this.pages === '' ? 'Unknown' : this.pages;
  }

  readMessage() {
    if (this.read) return 'Already read';
    return 'Not yet read';
  }
}

function addCardFromIndex(index, library) {
  const book = library[index];
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
  read.textContent = book.readMessage();
  const toggleRead = document.createElement('button');
  toggleRead.className = 'toggle-read';
  toggleRead.textContent = 'Toggle read';
  toggleRead.dataset.index = index;
  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  removeButton.textContent = 'Remove';
  removeButton.dataset.index = index;
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(toggleRead);
  card.appendChild(removeButton);
  main.appendChild(card);
}

function displayLibrary(library) {
  // start by removing existing cards
  const elements = document.getElementsByClassName('card');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  // using for loop rather than foreach so the remove and readToggle buttons can be indexed
  for (let i = 0; i < library.length; i += 1) {
    addCardFromIndex(i, library);
  }

  /* I added event listeners here because otherwise have to call displayLibrary
  inside the addCardFromIndex function, and better not to have two functions
  that call each other since one will inevitably have to call the other
  before it is defined */
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      library.splice(button.getAttribute('data-index'), 1);
      displayLibrary(library);
    });
  });
  const toggleReadButtons = document.querySelectorAll('.toggle-read');
  toggleReadButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const book = library[button.getAttribute('data-index')];
      book.read = !book.read;
      displayLibrary(library);
    });
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
