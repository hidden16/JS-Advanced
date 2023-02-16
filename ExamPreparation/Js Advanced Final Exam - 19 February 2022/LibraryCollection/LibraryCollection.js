class LibraryCollection {
    constructor(inputCapacity) {
        this.capacity = inputCapacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        const bookToAdd = {
            bookName,
            bookAuthor,
            payed: false
        };
        this.books.push(bookToAdd);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        const book = this.books.find(book => book.bookName === bookName);
        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if (book.payed) {
            throw new Error(`${bookName} has already been paid.`)
        }
        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        const index = this.books.indexOf(this.books.find(book => book.bookName === bookName));

        const book = this.books[index];
        if (book == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        } else if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (bookAuthor != undefined) {
            const book = this.books.find(x => x.bookAuthor == bookAuthor);

            if (book == undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            let payment = 'Not Paid';
            if (book.payed) {
                payment = 'Has Paid';
            }

            return `${book.bookName} == ${bookAuthor} - ${payment}.`;
        } else {
            let result = [];
            const emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${emptySlots} empty spots left.`)
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (const book of this.books) {
                let payment = 'Not Paid';
                if (book.payed) {
                    payment = 'Has Paid';
                }
                const text = `${book.bookName} == ${book.bookAuthor} - ${payment}.`;
                result.push(text);
            }
            return result.join('\n');
        }
    }
}

// 'The book collection has 2 empty spots left.\n
// Don Quixote == undefined - Has Paid.\n
// In Search of Lost Time == undefined - Not Paid.\n
// Ulysses == undefined - Not Paid.'

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));\

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


