
/*
// 1-masala
let arr = [25, 35, 32, 18, 12, 21, 27, 12, 45, 63, 52]
let arr_len = arr.length
let umYosh = 0

for(let i=0; i<=arr_len-1; i++){
    umYosh += arr[i]
}
console.log(Math.ceil(umYosh/arr_len))
*/

/*
// 2-masala
let narx = 45000
for(let i=1; i<=10; i++){
    console.log(i+' kg konfet ' + i*narx + ' sum')
}
*/


/*
// 3-masala
let n = 10
let s = 0
for(let i=1; i<=n; i++){
    s += 1/i
}
console.log(s)*/

/*
// 4-masala
let arr = []
for(let i=1; i<=50; i++){
    arr[i-1] = i 
}
for(let i=0; i<=49; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}
for(let i=0; i<=49; i++){
    if(arr[i] % 2 != 0){
        console.log(arr[i])
    }
}*/

/*
// 5-masala
let arr = []
let s = 0 
for(let i=1; i<=100; i++){
    arr[i-1] = i 
}
for(let i=0; i<=99; i++){
    if(arr[i] % 3 == 0){
        s += arr[i]
    }
}
console.log(arr)
console.log(s)*/

/*
// 6-masala
let arr = []
let juft = []
let toq = []

for(let i=0; i<=19; i++){
    arr[i] = parseInt(Math.random()*100)
}
console.log(arr)
for(let i=0; i<=19; i++){
    if(arr[i] % 2 == 0){
        juft.push(arr[i])
    }
    else{
        toq.push(arr[i])
    }
}
console.log(juft)
console.log(toq)*/

/*
let str = 'Frontend'
let a = str.split('')
console.log(a.join(''))
console.log(a)*/

/*
let str = 'Frontend'
let a = str.split('')
console.log(a.slice(0,2))*/

/*
let a = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd']
a.splice(5,3)
console.log(a)
*/


/*
let str = 'Frontend'
let a = str.split('')
a.splice(0,5,'Back')
console.log(a.join(''))
*/

/*
let a = [1,2,3,4]
console.log(a)
a.push(5,6,7)
console.log(a)
*/

/*
let a = [1,2,3,4]
console.log(a)
a.pop()
console.log(a)
*/

/*
let a = [1,2,3,4]
console.log(a)
a.shift()
console.log(a)*/

/*
let a = [1,2,3,4]
console.log(a)
a.unshift(0,2)
console.log(a)*/

/*
let a = [1,2,3,4]
console.log(a)
a.reverse()
console.log(a)
*/

/*
let a = ['c','k','a','b']
console.log(a)
a.sort()
console.log(a)*/


/*
let a = [2,63,25,86,74,-9,18,0]
console.log(a)
a.sort()
console.log(a)*/

/*
let a = [1,2,3,4]
let b = [5,6,7]
let c = [...a,...b]

console.log(c)*/

/*
let person = [['Ogabek', 12, 'oquchi'],['Ilhom', 17, 'oquchi'],['Shahzoda', 13, 'oquchi'],]

for(let i=0; i<=2; i++){
    console.log('Ismi: '+person[i][0], 'Yoshi: ' + person[i][1],)

}*/

'+ - * /' 

parseInt(Math.random()*10)%5;
a = '+'
son1 = null
son2 = null

switch(a){
    case 0:
        console.log('nol'); break;
    case 1:
        console.log('bir'); break;
    case 2:
        console.log('ikki'); break;
    case 3:
        console.log('uch'); break;
    case 4:
        console.log("to'rt"); break;
    default:
        console.log('xato'); break;
}











