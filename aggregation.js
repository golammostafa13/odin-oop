const Book = function (title, page){
    this.title = title;
    this.page = page;
}

const book1 = new Book('Padma', 122);
const book2 = new Book('Jumuna', 333);

const publication = {
    author: 'Publicator', 
    established: 1922,
    book: []
}
publication.book.push(book1);
publication.book.push(book2);

console.log(publication);