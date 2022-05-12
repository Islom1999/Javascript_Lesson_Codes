

/*  `` */

/*
let btnWhite = document.querySelector('#white')
let btnDark = document.querySelector('#dark')

btnDark.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'black'
})

btnWhite.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'white'
})
*/

/*
document.body.addEventListener('mouseover', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.pageX)
    console.log(e.pageY)
})
*/

/*
let btnDark = document.querySelector('#dark')
btnDark.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'black'
})
*/
/*
let btnDark = document.querySelector('#dark')
btnDark.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'black'
})
*/
/*
let btnDark = document.querySelector('#dark')
btnDark.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = 'black'
})

btnDark.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'white'
})
*/

/*
let btn = document.querySelector('.box')
document.body.addEventListener('mousemove', (e) => {
    console.log('x -', e.pageX)
    console.log('y -', e.pageY)
    
    btn.style.left = `${e.pageX}px`
    btn.style.top = `${e.pageY}px`
    btn.style.display = 'block'
})
*/

/*
let btn = document.querySelector('.box')
document.body.addEventListener('click', (e) => {
    console.log('x -', e.pageX)
    console.log('y -', e.pageY)
    
    btn.style.left = `${e.pageX}px`
    btn.style.top = `${e.pageY}px`
    btn.style.display = 'block'
})
*/

/*
let btnDark = document.querySelector('#dark')

btnDark.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'black'
})
*/

/*
let btnDark = document.querySelector('input')
btnDark.addEventListener('input', () => {
    document.body.style.backgroundColor = 'black'
})
*/

/*
let btnDark = document.querySelector('input')
btnDark.addEventListener('change', () => {
    console.log('btnDark.value')
})
*/


/*
let btnDark = document.querySelector('input')
btnDark.addEventListener('blur', () => {
    console.log('dada')
})
*/

/*
let btn = document.body
document.body.addEventListener('keypress', (e) => {
    console.log(e.key)
})
*/

/*
let btn = document.body
document.body.addEventListener('keypress', (e) => {
    if(e.key == 'i' || e.key == 'I'){
        console.log('Islom')
    }
    else if(e.key == 'r' || e.key == 'R'){
        console.log('Ruxshona')
    }
    else{
        console.log('notogri')
    }
})
*/

/*
const input = document.querySelector('input');
const log = document.querySelector('#log');

input.addEventListener('keydown', logKey);

function logKey(e) {
  log.innerText += `${e.key}`;
}
*/


let btnDark = document.querySelector('input')
btnDark.addEventListener('blur', () => {
    console.log(btnDark.value)
    console.log(document.querySelector('.div'))
    document.querySelector('#div').style.borderRadius = `${btnDark.value}%`
})









