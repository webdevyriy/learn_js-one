'use strict';
/*

// Условия

let num = 50;

// (num === 50) ? console.log('ok') :  console.log('err');


switch (num) {
    case 49 :
        console.log('err');
        break;
    case 100 :
        console.log('err');
        break;
    case 85 :
        console.log('ok');
        break;
    default:
        console.log('default');
        break;
}
*/

/*цыклы*/

// let num = 50;

/*while (num <= 55){
    console.log(num)
    num++
}*/
// do {
//     console.log(num)
//     num++
// }
// while (num <= 55)

/*for(let i = 1; i < 8; i++ ){
   if(i === 6 ){
       // break
       continue
   }
    console.log(i)
}*/


/*Функции*/

// let num = 20;
/*
function showFirstMessage(text) {
    console.log(text);
    console.log(num)
}
showFirstMessage("Hello World");
console.log(num)*/
/*
console.log(calc(8,10))
console.log(calc(5,10))
console.log(calc(4,10))

function calc(a, b){
    return (a + b);
}*/

/*
function ret() {
    let num = 50;
    return  num;
}

const AnotherGum = ret()

console.log(AnotherGum)

const logger = function () {
    console.log("Hello")
};

logger();


const calc = (a, b) => {
    return a + b
}
console.log(calc(10, 20))*/


/*Методы и свойства  чисел и строк */

/*
let str = "teSt"
let arr  = [1, 3, 5]
// console.log(str.toLocaleUpperCase())
console.log(str.toLocaleLowerCase())
console.log(str)

let fruit  = "Some fruit";

console.log(fruit.indexOf("q"))

let logg = "Hello world"

console.log(logg.slice(-5, -1))

console.log(logg.substring(6, 11))

console.log(logg.substr(6, 5))
*/

const num = 12.2;

console.log(Math.round(num))

const test = "12.2px"

// console.log(parseInt(test))
console.log(parseFloat(test))
