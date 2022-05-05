


books = JSON.parse(localStorage.getItem("books"));

let id = +prompt("id ni kirit");

let chiqar = (id) => {
    books = JSON.parse(localStorage.getItem("books"));
  if (id) {
    console.log(
      books.find((book) => {
        return book.id === id;
      })
    );
  } else {
    console.log("id xato");
  }
};
/*
chiqar(id)
*/

let ochir = (id) => {
    books = JSON.parse(localStorage.getItem("books"));
  if (id) {
    bookIndex = books.findIndex((book) => {
      return book.id === id;
    });
    books.splice(bookIndex, 1);
    console.log(books);
  } else {
    console.log("id xato");
  }
  localStorage.setItem("books", JSON.stringify(books, "underfined", 4));
};
/*
ochir(id)
*/

let ozgartir = (id, obj) => {
    books = JSON.parse(localStorage.getItem("books"));
  if (id) {
    books.forEach((book) => {
        if(book.id === id){
            book.name = obj.name ? obj.name : book.name
            book.author = obj.author ? obj.author : book.author
            book.pages = obj.pages ? obj.pages : book.pages
        }
    });
  } else {
    console.log("id xato");
  }
  localStorage.setItem("books", JSON.stringify(books, "underfined", 4));
};
/*
ozgartir(id, {name: 'Salom', author:'kimdir', page: 0})
*/
