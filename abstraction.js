const Book = function (getTitle, getPage){
    let title = getTitle;
    let page = getPage;
    this.giveTitle = function(){
        console.log(title);
    }
    let bookDetail = function(){
        console.log(`the title: ${title} it has ${page} pages`);
    }
    this.giveBookDetail = function(){
        return bookDetail();
    }
}
const newBook = new Book('Padma', 100);
newBook.giveTitle();// can access
// newBook.bookDetail(); not possible 
newBook.giveBookDetail();// access by another method