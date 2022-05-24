
let arr = [
    {
        img: 'url(courses/1.jpg)',
        number: '01',
        content: 'We oup of garden archtects'
    },
    {
        img: 'url(courses/2.jpg)',
        number: '02',
        content: 'oup of garden archtects'
    },
    {
        img: 'url(courses/3.jpg)',
        number: '03',
        content: 'We are a group of ga'
    },
    {
        img: 'url(courses/4.jpg)',
        number: '04',
        content: 'We are  garden aects'
    }
]
let header = document.querySelector('header')
header.style.backgroundImage = 'url(courses/1.jpg)'

function imgToggle(number){
    header.style.backgroundImage = arr[number].img;
    document.querySelector('#number').textContent = arr[number].number;
    document.querySelector('#content').textContent = arr[number].content;

}
let number = 0
setInterval(() => {

    imgToggle(number)

    if(number == arr.length - 1){
        number = 0
    }else{
        number++
    }
}, 3000);


