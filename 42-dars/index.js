
/*
let a = 10
try{
    console.log(a+b)
}
catch(err){
    console.error(err)
}
finally{
    console.log('natija berildi')
}
*/

/*
let a = 10
try{
    console.log(a+b)
}
catch(err){
    console.log(err)
}
*/
/*
try{
    let a = parseInt(b)   
}
catch(err){
    b = 0
}
finally{
    let a = parseInt(b)
    console.log(a)
}
*/


/*
let obj = {   // obj
    name: "Go'zal",
    age: 23,
}

let obj1 = {  // JSON
    'name': "Go'zal",
    'age': '23',
}
console.log(obj)
console.log(obj1)
*/

/*
let obj = {   
    name: "Go'zal",
    age: 23,
    isMarred: false,
}

let objJson = JSON.stringify(obj)

console.log(objJson, typeof objJson)

console.log(JSON.parse(objJson))
*/

/*
let obj = {   
    name: "Go'zal",
    age: 23,
    isMarred: false,
}

let objJson = JSON.stringify(obj,['name', 'age'],4)

console.log(objJson, typeof objJson)

console.log(JSON.parse(objJson))
*/

/*
let obj = {   
    name: "Go'zal",
    age: 23,
    isMarred: false,
}

let objJson = JSON.stringify(obj,undefined,4)

console.log(objJson, typeof objJson)

console.log(JSON.parse(objJson))
*/


/*
localStorage.setItem('name', 'Islom')
let str = localStorage.getItem('name')

console.log(str)
*/

/*
let books = [
    {
        id: 1,
        name: 'Alximik',
        author: 'Paolo Koelyo',
        pages: 153,
    },
    {
        id: 2,
        name: 'Shaytonat',
        author: 'Toxir Malik',
        pages: 864,
    },
    {
        id: 3,
        name: 'Sariq devni minib',
        author: 'Xudoyberdi To\'xtaboyev',
        pages: 356,
    },
    {
        id: 4,
        name: 'Ufq romani',
        author: 'O\'tkir Xoshimov',
        pages: 482,
    }
  ]

localStorage.setItem('books', JSON.stringify(books, undefined, 4))
books = JSON.parse(localStorage.getItem('books'))

let third = function(a){
    let book = books.find((book) => book.id == a)
    books.splice(books.indexOf(book),1)
    
    localStorage.setItem('books', JSON.stringify(books, undefined, 4))
}
third(1)
third(2)
*/