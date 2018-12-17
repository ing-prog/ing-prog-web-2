"use strict";

// вычисляем площадь прямоугольника
function square(a, b) {
    let ss = a * b;
    return ss;
}

function volume(s, h) {
    let vv = s * h;
    return vv;
}

let s = square(3, 5);
let h = 10;
let v = volume(s, h);

console.log("Площадь = " + s); // строка1 + строка2 + переменная1 + строка3
console.log("Обьем = " + v);

// проверка числа на простоту
function isProst(num) {
    if (num === 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (let i = 2; i < num; i++) {
        let ostatok = num % i; // % - остаток от деления
        if (ostatok === 0) {
            return false;
        }
    }
    return true;
}

console.log(isProst(17)); // true
console.log(isProst(33)); // false
















