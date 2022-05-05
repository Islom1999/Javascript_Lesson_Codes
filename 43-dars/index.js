/*
let h1 = document.getElementById('h1')

console.log(h1)

let p = document.getElementsByClassName('p')
console.log(p)

let h2 = document.getElementsByTagName('h2')
console.log(h2)
*/

/*
let h1 = document.querySelector('h1')
console.log(h1)

let p = document.querySelector('.p')
console.log(p)

let id = document.querySelector('#p')
console.log(id)
*/

/*
let p = document.querySelectorAll('.p')
console.log(p)
let h1 = document.querySelectorAll('h1')
console.log(h1)
*/

/*
console.log(document.querySelectorAll('.p'))
*/


/*
let p = document.querySelector('input')

p.id = 'p'
p.title = 'parag'
p.type = 'password'
*/

/*
let p = document.querySelector('li')

p.setAttribute('class' , 'h2')
*/

/*
let p = document.querySelectorAll('li')

p[1].title = 'Salom'
*/

/*
let div = document.querySelector('div')

div.classList.add('active')
div.classList.remove('div')
div.classList.toggle('div')
*/

/*
document.querySelector('div').textContent = 'Salom'
*/
/*
document.querySelector('div').textContent = ''
for(let i = 5; i<=10; i++){
    document.querySelector('div').textContent += 'Salom'
}
*/
/*
document.querySelector('div').textContent = '<h1>salom</h1>'

document.querySelector('div').innerHTML = '<h1>salom</h1>'

for(let i = 1; i<=10; i++){
    document.querySelector('div').innerHTML += `<ul>
    <li>${i}</li>
</ul> ` 
}

let div = document.querySelector('div')

div.style.color = 'red'
div.style.backgroundColor = 'blue'
div.style.borderRadius = '50px'
*/

let toggle = () => {
    document.querySelector('div').classList.toggle('active')

}








