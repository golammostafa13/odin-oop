const Book = function(title, page){
    this.title = title;
    this.page = page;
}

const book1 = new Book('Padma', 199);
const book2 = new Book('Jumuna', 100);

book2.multiplicity = book1;
console.log(book2);