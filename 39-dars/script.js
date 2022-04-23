
/*
let person = {
    name: 'Go\'zal',
    age: 18
}
person.name = 'Shaxzoda'
person.age = 14
person.isStudent = false

console.log(person)
console.log(person.name)
console.log(person.age)
*/

/*
let people = [
    {
        name:'Ruhshona',
        age: 18,
        login: 'some',
        pass: 'thing'
    },
    {
        name:'Shaxzoda',
        age: 14
    },
    {
        name:'Ilhom',
        age: 17
    }
]

console.log(people[0].pass)
*/

/*
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
}
let person2 = person

person2.name = 'Ruxshona'

console.log(person)
console.log(person2)
*/

/*
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
}
let person2 = Object.assign({}, person)

person2.name = 'Ruxshona'

console.log(person)
console.log(person2)
*/

/*
let obj1 = {
    age: 25
}
let obj2 = {
    name: 'Toshmat'
}
console.log(Object.assign(obj1, obj2))
*/

/*
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
    
    hi: function() {
        console.log(this.name + ' Hi !!!')
    }
}
let person2 = Object.assign({}, person)

person2.name = 'Ruxshona'

person2.hi()

console.log(person)
console.log(person2)
*/

/*
console.log(this)
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
    
    hi: function() {
        console.log(this)
        console.log(this.age)
    }
}
person.hi()
*/

/*
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
    
    hi: function() {
        console.log(this)
        console.log(this.age)
    }
}
console.log(Object.keys(person))
*/

/*
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
    
    hi: function() {
        console.log(this)
        console.log(this.age)
    }
}
console.log(Object.values(person))
*/

/*
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
    
    hi: function() {
        console.log(this)
        console.log(this.age)
    }
}
console.log(Object.entries(person))

//[['name', 'Ruxshona'],['age', 18],]
*/

/*
let person = {
    name: 'Shaxzoda',
    age: 18,
    lang: ['rus', 'eng', 'uz'],
    
    hi: function() {
        console.log(this)
        console.log(this.age)
    }
}
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('18'))
console.log(person.hasOwnProperty('Name'))
*/

/*
let arr = [1,2,3,,45,654,864,654,454,651,511,,65,55,'Ruxshona']
console.log(arr[arr.length-1])
*/

/*
let i=0
setInterval(()=>{
    console.log(++i, 'Hi !!')
},1000)
*/


/*
setTimeout(()=>{
    console.log('Hi !!')
},5000)
*/

/*
let i=0
let a = setInterval(()=>{
    console.log(++i, 'Hi !!')
    if(i==5){
        clearInterval(a)
    }
},1000)
*/

/*
let arr = [1,2,3,4,5,6,7,8,9]

for(item of arr){
    console.log(item)
}
for(index in arr){
    console.log(item)
}

arr.forEach((item, index, array) => {
    console.log(item, index, array)
})

arr.forEach((item) => {
    console.log(item)
})
*/

/*
let arr = [1,2,3,4,5,6,7,8,9]

let arr2 = arr.forEach((item) => {
    return item*3
})
console.log(arr2)

let arr1 = arr.map((item, index, array)=>{
    return item*2
})

console.log(arr1)

arr.map((item, index, array)=>{
    console.log(item)
})
*/

/*
let countries = ['ozbekiston', 'qozagiston', 'rassiya', 'tojigiston', 'xitoy']

arr1 = countries.filter((item)=>{
    return item.includes('iston')
})

console.log(arr1)
*/

/*
let countries = [1,2,3,4,5,6,7,8,9]
arr1 = countries.filter((item)=>{
    if(item % 2 == 0){
        return item
    }
})
console.log(arr1)
*/

/*
let countries = [1,2,3,4,5,6,7,8,9]
arr1 = countries.filter((item)=>{
    if(item >= 5){
        return item
    }
})
console.log(arr1)
*/

/*
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 2, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5

console.log(areAllStr)
*/

/*
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.sort()
console.log(names)

const ages = [24, 22, 2, 25, 32, 35, 18]
ages.sort((a,b)=>{
    return a-b
})
console.log(ages)

ages.sort((a,b)=>{
    return b-a
})
console.log(ages)*/


