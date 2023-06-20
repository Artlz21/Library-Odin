let myLibrary = [];

// Book object constructor
function Book(book, author, status) {
    this.book = book;
    this.author = author;
    this.status = status;
}

// Create new object add to library array
function addToLibrary(book, author, status) {
    const newBook = new Book(book, author, status);

    myLibrary.push(newBook);
}

// Selects form and adds evenetlistener, retrieveing values for each input then calls addToLibrary before 
// reseting the contents of each input, clearing, then rendering the current library
const getFormSub = (row) => {
    let formSub = document.getElementById("Book-submission");

    formSub.addEventListener("submit", (e) => {
        e.preventDefault();

        let bookValue =   document.getElementById("Book-input").value;
        let authorValue = document.getElementById("Author-input").value;
        let statusValue = document.querySelector(".Status-input:checked").value;

        addToLibrary(bookValue, authorValue, statusValue);

        document.getElementById("Book-input").value = "";
        document.getElementById("Author-input").value = "";
        document.querySelector(".Status-input:checked").checked = false;

        clearContents();
        render(row)
    });
}

// takes in row and object to copy as a template for how each row should be and be added to the table.
const addToContents = (obj, row) => {
    let table = document.querySelector(".library-table");

    let cloneRow = row.cloneNode(true);

    let bookCell = cloneRow.querySelector(".Book");
    let authorCell = cloneRow.querySelector(".Author");
    let statusCell = cloneRow.querySelector(".read-status");

    bookCell.innerText = obj.book;
    authorCell.innerText = obj.author;
    statusCell.innerText = obj.status;

    table.appendChild(cloneRow);
}

// loop through library to display each object in contents.
const render = (row) => {
    myLibrary.forEach((obj) => {
        addToContents(obj, row);
    })
}

// clears contents in the library table
const clearContents = () => {
    let contents = Array.from(document.getElementsByClassName("listed-book"));

    contents.forEach((e) => {
        e.remove();
    });
}

(() => {
    // select table row to use the structure for future use then remove original from table.
    let row = document.querySelector(".listed-book");
    row.remove();

    getFormSub(row);

    render(row);
})
();