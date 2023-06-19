let myLibrary = []

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}

function addToLibrary(book, author, status) {
    this.book = book;
    this.author = author;
    this.status = status;

    const newBook = new Book(book, author, status);

    myLibrary.push(newBook);
}

addToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "unread");
