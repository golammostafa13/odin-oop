const Book = function (t, p){
        let title = t;// can't access by it's instance
        let page = p;// can't access by it's instance
    return{
        bookDetail: function(){
            console.log(`the ${title} has ${page}`);}
    }
}
const newBook = new Book('Padma Nodiri Maji', 100);
newBook.bookDetail();