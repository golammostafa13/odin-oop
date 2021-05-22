//constructor part
const CoreBook = function(title, page){
    this.title = title;
    this.page = page;
}

// prototype object er bitore egula store kora thakbe pore use korar jonno
CoreBook.prototype.title = function(){
    console.log(`book title is: ${this.title}`);
}

CoreBook.prototype.bookDetail = function(){
    console.log(`book title: ${this.title} and it has ${this.page} pages`);
}

// Book name ekta function jeta diye other object tader instance create korbe
const Book = function(title, page){
    //this line is calling ager towri kora methods and property jate jokhn jeta iccha seta use kora jay
    CoreBook.call(this, title, page);
}
// Book protor bitore toiri kora CoreBook er prototype address koriye dite home
Book.prototype = Object.create(CoreBook.prototype);

const newBook = new Book('Padma', 100);
// ekhn amra jeta iccha seta use korte pari.
newBook.bookDetail();
// ei programme ta class diye guchiye kora jay..but eta hocche core concept.