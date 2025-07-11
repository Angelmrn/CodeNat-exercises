class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getDetails(){
        console.log("Title: " + this.title + ", Author: " + this.author + ", Year: " + this.year);
    }
}

class Ebook extends Book{
    constructor(title, author, year, price){
        super(title, author, year);
        this.price = price;
    }

    getDetails(){
        super.getDetails();
        console.log("Price: " + this.price);
    }
}

const ebook1 = new Ebook('Don Quixote', 'Miguel de Cervantes', 1605, 21.49);
ebook1.getDetails();