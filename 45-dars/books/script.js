
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
let indexGlobal

const section = document.querySelector('#section')

const printBooks = () => {
    section.innerHTML = ''
    books.forEach((book, index) => {
        section.innerHTML += `<ul class="list-group list-group-horizontal">
        <li class="list-group-item col-3">${book.name}</li>
        <li class="list-group-item col-3">${book.author}</li>
        <li class="list-group-item col-3">${book.pages}</li>
        <li class="list-group-item col-1 text-danger" onclick='deleteBook(books[${index}].id)'>X</li>
        <li class="list-group-item col-1" onclick='updateBook(${index})'>update</li>
        </ul>`  
    })
}
printBooks()

const deleteBook = (id) => {
    books.forEach((item,index )=> {
        if(item.id == id){
            books.splice(index,1)
        }
    })
    printBooks()
}
const updateBook = (index) => {
    indexGlobal = index
    let inputUpdate = document.querySelectorAll('.data-update')

    document.querySelector('.modal-update').style.display = 'block'

    inputUpdate[0].value = books[index].name
    inputUpdate[1].value = books[index].author
    inputUpdate[2].value = books[index].pages
}

const updateBook1 = () => {
    let inputUpdate = document.querySelectorAll('.data-update')

    books[indexGlobal].name = inputUpdate[0].value
    books[indexGlobal].author = inputUpdate[1].value 
    books[indexGlobal].pages = inputUpdate[2].value 
    printBooks()

    document.querySelector('.modal-update').style.display = 'none'
}


let add = () => {
    document.querySelector('.modal-add').style.display = 'block'
}
let addBook = () => {
    let inputAdd = document.querySelectorAll('.data-add')
    let book = {
        id: inputAdd[0].value,
        name: inputAdd[1].value,
        author: inputAdd[2].value,
        pages: inputAdd[3].value,
    }
    books.push(book)
    printBooks()

    inputAdd.forEach(input => {
        input.value = ''
    })
    document.querySelector('.modal-add').style.display = 'none'
}