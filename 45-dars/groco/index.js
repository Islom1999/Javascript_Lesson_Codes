
function addActive(classElem1, classElem2, classElem3){
    document.querySelector(`.${classElem1}`).classList.add('active')
    document.querySelector(`.${classElem2}`).classList.remove('active')
    document.querySelector(`.${classElem3}`).classList.remove('active')
}