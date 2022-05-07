
/*
let h1 = document.createElement('h1')

h1.textContent = 'Ruxshona'
h1.align = 'center'
h1.setAttribute('class', 'h1')
h1.style.color = 'pink'

/*
document.body.removeChild(h1)
document.body.appendChild(h1)
*/

/*
let arr = ['Ruxshona', "Shaxzoda","Shabbona", "Ilhom", "Akobir"]

arr.forEach(name => {
    h1.textContent = name
    document.querySelector("#section").appendChild(h1)
})

console.log(h1)
*/

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

const section = document.querySelector('#section')

books.forEach(book => {
    section.innerHTML += `<ul class="list-group list-group-horizontal">
    <li class="list-group-item col-4">${book.name}</li>
    <li class="list-group-item col-4">${book.author}</li>
    <li class="list-group-item col-4">${book.pages}</li>
    </ul>`  
})