
let show = document.querySelector('#show')
function addValue(str) {
    let strNumber = show.value.length - 1 

    if(show.value == 0){
        show.value = ''
    }
    if(show.value[strNumber] != "+" && show.value[strNumber] != "-" && show.value[strNumber] != "*" && show.value[strNumber] != "/"){
        show.value += str
    }else{
        if(str != '+' && str != '-' && str != '*' && str != '/'){
            show.value += str
        }  
    }
}
function natija() {
    show.value = eval(show.value)
}
function tozala() {
    show.value = '0'
}
function del(){
    let strShow = show.value
    show.value = strShow.slice(0,-1)
    if(show.value == ''){
        show.value = 0
    }
}
document.querySelector('#equal').addEventListener('click', natija)
document.querySelector('#clear').addEventListener('click', tozala)
document.querySelector('#del').addEventListener('click', del)


/*
var a
console.log(a)
a = 10

console.log(a)
var a = 10
*/
/*
console.log(a)
let a = 10
*/

/*
function hi(){
    console.log('salom')
}
hi()

hi()
function hi(){
    console.log('salom')
}
*/
/*
let hi = () => {
    console.log('salom')
}
hi()

hi()
let hi = () => {
    console.log('salom')
}
*/