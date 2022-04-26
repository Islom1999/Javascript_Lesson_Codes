/*
let i = 0
setInterval(()=>{
    console.log("salom"+(++i))
    
}, 1000)

setTimeout(()=>{
    console.log("Hello")
}, 500)
*/


//let arr = ['salom' , 5 , 'as', 45, 'ads', 32]

/*
arr.forEach((elem, index, array) => {
    console.log(elem, index, array)
})
*/

/*
let newArr = arr.map((item, index, arr) => {
    if(typeof item === 'string')
    {return  item}
})
console.log(newArr)
*/

/*
let newArr = arr.filter((item) => {
    return item<40
})
console.log(newArr)
*/

/*
let newArr = arr.filter((item) => item>35)
console.log(newArr)
*/

/*
let newArr = arr.find((item) => item>5)
console.log(newArr)
*/

/*
let newArr = arr.findIndex((item) => item>5)
console.log(newArr)
*/
/*

let newArr = arr.some((item) => typeof item == 'string')
console.log(newArr)*/

//let arr = ['salom' , 5 , 'as', 45, 'ads', 32]
/*
arr.sort()
console.log(arr)
*/

/*
let arr = [2,15,3,64,89,54,1,0,-9]

arr.sort((a,b) => a-b)
console.log(arr)

arr.sort(function(a,b){
    return b-a
})
console.log(arr)
*/

/*
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
// canada borligini tekshir
// sort -alfabit
// sort -teskari - alfabit

let isCanada = countries.find(item => item === 'Canada')
console.log(isCanada)

countries.reverse()
console.log(countries)

countries.sort()
console.log(countries)
*/

/*
console.log('%s Hello !!!', 'Shaxzoda')
console.log('%s Hello !!!', 500)
console.log('%d Hello !!!', 'Shaxzoda')
console.log('%c Hello !!!', 'color:red')
console.log('%c Hello !!!', 'color:red; background: pink; border:2px solid black; font-size: 20px;')

console.warn('Ogohlantirish')
console.error('Xato')
console.table(['sa','fvkjdsa', 5, 65, 'asdad'])

console.table([
    ['sa','fvkjdsa', 5, 65, 'dscdsds'],
    ['sfdse','scdsd', 5, 'asdad'],
    ['sefse','fvkjdsa', 65, 'sdfcdsfs']
])

console.table({name: 'Eshmat', age: 25})
*/

/*
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.time()
  for (let i = 0; i < countries.length; i++) {
   
  }
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)
  countries.forEach(item => item)

  console.timeEnd()
  */

let books = [
    {id:1,title:'JS Asoslari', pages: 12, author: 'Javlon Abdullo'},
    {id:2,title:'JS Asoslari', pages: 412, author: 'Javlon Abdullo'},
    {id:3,title:'JS Asoslari', pages: 2, author: 'Javlon Abdullo'},
    {id:4,title:'JS Asoslari', pages: 112, author: 'Javlon Abdullo'},
    {id:5,title:'JS Asoslari', pages: 412, author: 'Javlon Abdullo'},
    {id:6,title:'JS Asoslari', pages: 512, author: 'Javlon Abdullo'},
    {id:7,title:'JS Asoslari', pages: 312, author: 'Javlon Abdullo'},
]
//let id = +prompt('id ni kiriting')

/*
books.forEach((book) => {
    if(book.id == id){
        console.log(book)
    }
})*/

/*
let book = books.find((book) => book.id == id)
console.log(book)
*/


let book = books.filter(book => book.pages > 300)
console.table(book)







