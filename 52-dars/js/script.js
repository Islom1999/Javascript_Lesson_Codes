
let url = 'https://jsonplaceholder.typicode.com/photos'

fetch(url)
    .then(res => res.json())
    .then((data) => {
        row = document.querySelector('#row-data')
        data.forEach((user,index) => {
            if(index <= 100){
                row.innerHTML += `<div class="col-3">
                                    <div class="card">
                                        <img src="${user.url}">
                                        <h3 id="user-email">${user.title}</h3>
                                        <h3 id="user-address-street">${user.id}</h3>
                                        <a href="index2.html">cfsdfsa</a>
                                    </div>
                                </div>`  
            }
        });
    })
    .catch(err => console.log(err))

