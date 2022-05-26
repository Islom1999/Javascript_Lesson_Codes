/*
class Person{
    constructor(name, surname, age, isStudent,){
        this.name = name
        this.surname = surname
        this.age = age
        this.isStudent = isStudent
    }
}

let islom = new Person('Islom', 'Karimov', 23, true)

let ruxshona = new Person('Ruxshona', 'Yusupova', 18, false)

console.log(ruxshona.age)
*/

/*
class Person{
    constructor(name, surname, age, isStudent,){
        this.name = name
        this.surname = surname
        this.age = age
        this.isStudent = isStudent
        this.coursers = []
    }
    printFullName(){
        console.log(this.name + ' ' + this.surname)
    }
}

let islom = new Person('Islom', 'Karimov', 23, true)

let ruxshona = new Person('Ruxshona', 'Yusupova', 18, false)

ruxshona.printFullName()

console.log(ruxshona)
*/

//Math.min(1,3,56,8)


let arr = [1,5,7,2,5,45]

class Arr{
    constructor(){}
    max(arr){
        arr.sort((a,b)=>b-a)
        return arr[0]
    }
    min(arr){
        arr.sort((a,b)=>a-b)
        return arr[0]
    }
}

let array = new Arr()

console.log(array.max(arr))
console.log(array.min(arr))