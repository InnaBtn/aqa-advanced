import Book from "./Book.js";
import EBook from "./EBook.js";
let book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997);
let book2 = new Book("The Hobbit", "J.R.R Tolkien", 1937);

book1.printInfo();
book2.printInfo();

let eBook1 = new EBook("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1999, "PDF");

eBook1.printInfo();

let booksArray = [book1, book2, eBook1];

console.log(Book.oldestBook(booksArray));

console.log(EBook.convertFromBook(book1, "PDF"));