let sliderImg = document.querySelector('.slider-img')

let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let number = 0

let imgs = document.querySelectorAll('.slider img')

sliderImg.style.width = `${1000 * imgs.length}px`

function changeImg (number){
    sliderImg.style.transform =  `translateX(-${1000*number}px)` 
}

function nextImg (){
    if(number == imgs.length - 1){
        number = 0
        changeImg(number)
    }else{
        number++
        changeImg(number)
    }
}
function prevImg (){
    if(number == 0){
        number = imgs.length - 1
        changeImg(number)
    }else{
        number--
        changeImg(number)
    }
}
next.addEventListener('click', nextImg)
prev.addEventListener('click', prevImg)