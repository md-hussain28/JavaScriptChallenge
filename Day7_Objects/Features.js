// Book Object with properties and methods
let book = {
    title: "The Narnia",
    author: "Peter Siddle",
    year: "1998",
    getTitleAndAuthor: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} was published in ${this.year}`;
    }
};

// Log book properties and method results
console.log(book);
console.log(book.getTitleAndAuthor());
book.updateYear(1990);
console.log(book);
console.log(book.getTitleAndYear());

// Library Object with nested book objects
let library = {
    name: "The Great Library",
    books: [
        { title: "A", author: "Author A", year: "2348" },
        { title: "B", author: "Author B", year: "1892" }
    ],
    getName: function() {
        return this.name;
    },
    getBookTitles: function() {
        return this.books.map(book => book.title);
    }
};

// Log library properties and book titles
console.log(library);
console.log(library.getName());
console.log(library.getBookTitles());

// Iterate over book properties using for...in loop
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Log all keys and values of the book object
console.log(Object.keys(book));
console.log(Object.values(book));
