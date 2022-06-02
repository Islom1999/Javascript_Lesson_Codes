
let url = 'https://jsonplaceholder.typicode.com/photos'

let id = 10
let url2 = ''

fetch(url)
    .then(res => res.json())
    .then((data) => {
        row = document.querySelector('#row-data')
        index = data.findIndex(image => image.id == id)
        url2 = `https://jsonplaceholder.typicode.com/photos/${data[index].id}`
        fetch(url2)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                row.innerHTML += `<div class="col-3">
                                    <div class="card">
                                        <img src="${data.url}">
                                        <h3 id="user-email">${data.title}</h3>
                                        <h3 id="user-address-street">${data.id}</h3>
                            
                                    </div>
                                </div>`  
            })  
    })
    .catch(err => console.log(err))

