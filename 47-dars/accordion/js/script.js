
let accordionItems = document.querySelectorAll('.accordion-item')

function addClass(){
    accordionItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            removeClass(index)
            item.classList.toggle('active')
        })
    })
}

function removeClass(index){
    accordionItems.forEach((item, index1) => {
        if(index !== index1){
            item.classList.remove('active')
        }
    })
}

addClass()

