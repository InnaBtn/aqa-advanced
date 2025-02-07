class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }
    printInfo() {
        console.log(`Book's name is ${this._name}. It was written by ${this._author} in ${this._year}.`);
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Name can't be empty.");
        }
        this._name = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author can't be empty.");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (typeof value !== "number" || value < 0 || !Number.isInteger(value)) {
            throw new Error("Incorrect year.");
        }
        this._year = value;
    }

    static oldestBook(booksArray) {
        return booksArray.slice().sort((b1, b2) => b1.year - b2.year)[0];
    }

}

export default Book;
