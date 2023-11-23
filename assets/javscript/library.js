const myLibrary = [];

function Book(title, author, pages, read, imageLink) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.imageLink = imageLink;
}

Book.prototype.info = function() {
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);
}

Book.prototype.changeRead = function() {
    if (this.read === "read") {
        this.read = "not read";
    } else {
        this.read = "read";
    }
}

function addBookToLibrary(title, author, pages, read, imageLink) {
    let bookToAdd = new Book(title, author, pages, read, imageLink);
    myLibrary.push(bookToAdd);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkein", 296, "not read", "https://blackwells.co.uk/jacket/500x500/9780753733783.webp");
addBookToLibrary("The Beach", "Alex Garland", 464, "read", "https://blackwells.co.uk/jacket/500x500/9780241976562.webp");
addBookToLibrary("1984", "George Orwell", 336, "not read", "https://blackwells.co.uk/jacket/500x500/9789352230761.webp");
addBookToLibrary("Fingersmith", "Sarah Waters", 560, "read", "https://blackwells.co.uk/jacket/500x500/9780349017464.webp");
addBookToLibrary("Hotel Rwanda", "Terry George", 208, "read", "https://blackwells.co.uk/jacket/500x500/9781557046703.webp");

const displayBooks = document.querySelector('#displayBooks');

function updateBooks() {
for (book of myLibrary) {
    let card = document.createElement('div');
    card.classList.add('card');
    displayBooks.appendChild(card);
    let bookImage = document.createElement('img');
    let deleteIcon = document.createElement('img');
    deleteIcon.classList.add('deleteIcon');
    let bookTitle = document.createElement('h2');
    bookImage.classList.add('bookImage');
    let bookAuthor = document.createElement('p');
    bookAuthor.style.fontStyle = "italic";
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p');
    let bookReadBg = document.createElement('div');
    card.appendChild(deleteIcon);
    card.appendChild(bookImage);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookReadBg);
    bookReadBg.appendChild(bookRead);
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = `${book.pages} pages`;
    bookRead.textContent = book.read;
    bookImage.setAttribute("src", book.imageLink);
    deleteIcon.setAttribute("src", "assets/images/trash-solid.svg" );
    deleteIcon.dataset.ref = myLibrary.indexOf(book);
    bookReadBg.classList.add('allBookRead');
    if (bookRead.textContent === 'read')
    {bookReadBg.classList.add('bookReadBg');
    } else {
        bookReadBg.classList.add('bookNotReadBg');
    };
    deleteIcon.addEventListener ("click", () => {
        myLibrary.splice([deleteIcon.dataset.ref],1);
        removeExistingLibrary(displayBooks);
        updateBooks();
    })
    bookRead.dataset.ref = myLibrary.indexOf(book);
    bookRead.addEventListener("click", () => {
        if (myLibrary[bookRead.dataset.ref].read === "read") {
            myLibrary[bookRead.dataset.ref].read = "not read";
        } else {
            myLibrary[bookRead.dataset.ref].read = "read";
        }
        removeExistingLibrary(displayBooks);
        updateBooks(); 
    })
};
}

updateBooks();

let addBookForm = document.getElementById('addBookForm');

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newBookTitle = document.getElementById('bookTitle').value;
    let newBookAuthor = document.getElementById('bookAuthor').value;
    let newBookPages = document.getElementById('bookPages').value;
    let newBookRead;
    if (document.getElementById('yes').checked === true) {
        newBookRead = "read";
    } else {
        newBookRead = "not read";
    }
    let newBookImage = document.getElementById('bookImage').value;
    if (newBookAuthor === "") {
        newBookAuthor = "Author unknown";
    };
    if (newBookPages === "") {
        newBookPages = "unknown";
    };
    if (newBookImage === "") {
        newBookImage = "assets/images/no-image.png";
    };
    addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookRead, newBookImage);
    let allInputs = document.querySelectorAll('#bookTitle, #bookAuthor, #bookPages, #bookImage');
    allInputs.forEach(input => {
        input.value = "";
    })
    removeExistingLibrary(displayBooks);
    updateBooks();
})

function removeExistingLibrary (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

