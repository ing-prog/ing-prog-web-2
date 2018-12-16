"use strict";

console.log("hello node"); // вывод на экран

// считаем (a + b) / c
let a = 5;
let b = 7;
let c = 2;
let ans = (a + b) / c; // так
console.log(ans);
console.log((a + b) / c); // или так

// вывод элементов массив
let mas = [11, 22, 33, 44, 55, 66, 77]; // 0,1,2,3,4,5,6
let dlinaMas = mas.length; // 7

for (let i = 0; i < dlinaMas; i++) { // i = {0..6}
    console.log(i + "-ыйэлемент массива = " + mas[i]);
}

let i = 0;
while (i < dlinaMas) {
    console.log(i + "-ыйэлемент массива = " + mas[i]);
    i++;
}

// let objStudent = {
//     name: "Peter",
//     age: 18,
//     group: "5B"
// };
// console.log(objStudent.name);











