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

const theHobbit = new Book(
  'The Hobbit',
  'J.R.R Tolkien',
  295,
  false,
);

// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// console.log(theHobbit.info());