"use strict";

/**
 * Случайное число в интервале от min до max
 * @param min
 * @param max
 * @returns {*}
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(a, b) {
    console.log(a + b);
}
// sum(3,5);

/**
 * Распечатать целые числа на отрезке от a до b
 */
function printOtr() {
    let a = 1;
    let b = 5;
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}
// printOtr();

/**
 * Подсчитать сумму на отрезке от a до b
 */
function sumOtr() {
    let a = getRandom(-5, 7);
    let b = getRandom(-5, 7);
    console.log("a = " + a + " b = " + b);
    let sum = 0;
    if (a > b) { // меняем местами a и b, если a > b
        let c = a;
        a = b;
        b = c;
    }
    for (let i = a; i <= b; i++) {
        sum = sum + i; // можно так sum += i
    }
    console.log(sum);
}
// sumOtr();

/**
 * Среднее арифметическое элементов в массиве
 */
function srednArif() {
    let mas = [1, 2, 3, 4, 5];
    let kolich = mas.length;
    let sum = 0;
    for (let k = 0; k < kolich; k++) { // k = {0..4}
        sum += mas[k];
    }
    let ans = sum / kolich;
    console.log(ans);
}
srednArif();























