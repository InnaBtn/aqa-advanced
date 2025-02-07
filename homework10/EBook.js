import Book from "./Book.js";

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }
    printInfo() {
        super.printInfo();
        console.log(`${this._fileFormat} file format.`);
    }

    

    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("File format can't be empty.");
        }
        this._fileFormat = value;
    }

    static convertFromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error("Incorrect data type.");
        }
        return new EBook(book.name, book.author, book.year, fileFormat);
    }
}

export default EBook;
