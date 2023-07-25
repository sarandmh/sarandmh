// In-memory data store for books
let books = [];

// Function to add a new book
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        const newBook = { title, author };
        books.push(newBook);
        renderBooks();
        clearForm();
    } else {
        alert('Please enter both title and author.');
    }
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

// Function to render the list of books
function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>${book.title}</b> by ${book.author} 
            <button onclick="editBook(${index})">Edit</button>
            <button onclick="deleteBook(${index})">Delete</button>`;
        bookList.appendChild(listItem);
    });
}

// Function to edit a book
function editBook(index) {
    const book = books[index];
    const newTitle = prompt('Enter new title:', book.title);
    const newAuthor = prompt('Enter new author:', book.author);

    if (newTitle && newAuthor) {
        book.title = newTitle;
        book.author = newAuthor;
        renderBooks();
    } else {
        alert('Please enter both title and author.');
    }
}

// Function to clear the form after adding a book
function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}

// Initial rendering of books when the page loads
renderBooks();
