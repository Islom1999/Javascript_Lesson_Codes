let btnModal = document.querySelector('.btn-modal')

let modal = document.querySelector('.modal')

let modalBg = document.querySelector('.modal-bg')

let isOpen = false

function modalToggle(){
    modal.style.transform = 'translate(-50%, -50%) scale(1)'
    modalBg.style.display = 'block'
    isOpen = true
}

btnModal.addEventListener('click', modalToggle)

modalBg.addEventListener('click', () => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)'
    modalBg.style.display = 'none'
    isOpen = false
})





document.querySelector('#close-modal').addEventListener('click', () => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)'
    modalBg.style.display = 'none'
    isOpen = false
})


document.querySelector('.btn-res').addEventListener('click', () => {
    document.querySelector('.nav-responsive').style.right = '0px'
    
})

document.querySelector('.btn-res-close').addEventListener('click', () => {
    document.querySelector('.nav-responsive').style.right = '-100%'
    
})