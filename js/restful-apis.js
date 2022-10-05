// API -- Application Programming Interface
// A set of rules defining how applications and/or devices can connect to each other and communicate with one another

// REST means representational state transfer
    // A pattern of design principles for APIs
    // REST APIs communicate via HTTP requests

// In a REST API, communication via HTTP requests is used to perform the standard set of actions called CRUD
    // Create, Read, Update, Delete

// JSON Javascript Object Notation is not mandatory but is popular because it is both human and machine-readable


// https://glitch.com/assorted-sepia-mammal

    // https://glitch.com/edit/#!/assorted-sepia-mammal

// https://glitch.com/edit/#!/assorted-sepia-mammal

const booksURL = 'https://assorted-sepia-mammal.glitch.me/books';
const moviesURL = 'https://assorted-sepia-mammal.glitch.me/movies';

const bookToPost = {
    title: 'Eleanor of Aquitaine',
    author: {
        firstName: 'Ralph',
        lastName: 'Turner'
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getMovies () {
    fetch(moviesURL)
        .then(resp => resp.json())
        .then(data => console.log(data));
}

function getBooks () {
    fetch(booksURL)
        .then(resp => resp.json())
        .then(data => console.log(data));
}


getMovies();
//
getBooks();

// fetch(booksURL, postOptions).then(getBooks);

// We'll use PUT to replace the entire content
// We'll use PATCH to modify a part of the entry

let modification = {
    title: 'Eleanor of alfalfa stick',
}
const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

modification = {
    title: 'Eleanor of Aquitaine and the Four Kings',
    author: {
        firstName: 'Alfalfa',
        lastName: 'Stick'
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURL + '/1', patchOptions).then(getBooks);


// D in CRUD DELETE

const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
}

// fetch(booksURL + "/10", deleteOptions).then(getBooks)