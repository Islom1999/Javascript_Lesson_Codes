
/*
let arr = [2,5,6,8,1,80,-6,6,105,15,19,3]
let max = arr[0]
let min = arr[0]
for(index in arr){
    if(max < arr[index]){
        max = arr[index];
    }
    if(min > arr[index]){
        min = arr[index];
    }
}
console.log(max)
console.log(min)
*/

/*
let arr = [2,5,6,8,1,80,-6,6,105,15,19,3]
let max = arr[0]
let min = arr[0]
for(index in arr){
    if(index % 2 == 0){
        if(max < arr[index]){
            max = arr[index];
        }
        if(min > arr[index]){
            min = arr[index];
        }
    }
}
console.log(max)
console.log(min)
*/

/*
let year = prompt('Tugulgan sanangiz(yyyy-mm-dd): ')
year = new Date(year)
let nowDate = new Date()

let mSecond = nowDate - year

let soat = mSecond / (1000*60*60)
let day = mSecond / (1000*60*60*24)
let month = mSecond / (1000*60*60*24*30)
let yil = mSecond / (1000*60*60*24*365)

console.log(soat)
console.log(day)
console.log(month)
console.log(yil)
*/

/*
function arr (n){
    let arr = [];
    let s = 0
    for(let i = 0; i<=n; i++){
        arr.push(i+1)
    }
    for(item of arr){
        s+=item
    }
    console.log(s)
}
arr(20)*/

/*
function arr (n,k,l){
    let arr = [];
    let s = 0
    for(let i = 0; i<=n; i++){
        arr.push(i+1)
    }
    for(let i= k; i<=l; i++){
        s+=arr[i]
    }
    console.log(arr)
    console.log(s)
}
arr(20,0,5)*/

/*
let age = prompt('sdcdsdss')
let person = {
    firstName: 'Ilhom',
    lastName: 'Raxmonov',
    age: age,
    lang: ['Uzbek', 'Ruscha', 'English'],
    pass: '123456',
}

person.login = 'Ilhom_2005'

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.lang)
console.log(person.login)
*/

/*
let a = 5
a = 10
let b = a

console.log(a,b)


let a = 5
let b = a
a = 10

console.log(a,b)*/

/*
let arr = [1,2,3,4,'Islom']
let newArr = arr.concat()
newArr[5] = 'Karimov'


console.log(arr)
console.log(newArr)
*/

