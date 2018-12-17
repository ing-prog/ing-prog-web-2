"use strict";

/**
 * Функция печати - удобная обертка над console.log
 * @param stroka
 */
function print(stroka) {
    console.log(stroka);
}

/**
 * Случайное число в интервале от min до max
 * @param min
 * @param max
 * @returns {*}
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function legthOfOtrezok(otr) {
    let length = Math.sqrt(
        Math.pow((otr.x1 - otr.x2), 2) + Math.pow((otr.y1 - otr.y2), 2)
    );
    return length;
}

let otrezok = {
    x1: 1,
    y1: 5,
    x2: 1,
    y2: 12
};

print(legthOfOtrezok(otrezok)); // 7

print(otrezok);
print(JSON.stringify(otrezok));
print(otrezok.x1 + " " + otrezok.y1);

function createOtrezok(x1,y1,x2,y2) {
    let emptyOtrezok = {};

    emptyOtrezok.x1 = x1;
    emptyOtrezok.y1 = y1;
    emptyOtrezok.x2 = x2;
    emptyOtrezok.y2 = y2;

    emptyOtrezok.len = legthOfOtrezok(emptyOtrezok);

    return emptyOtrezok;
}

let newOtrezok_1 = createOtrezok(getRandom(-10,10), getRandom(-10,10),
    getRandom(-10,10), getRandom(-10,10));
let newOtrezok_2 = createOtrezok(getRandom(-10,10), getRandom(-10,10),
    getRandom(-10,10), getRandom(-10,10));
print(newOtrezok_1);
print(newOtrezok_2);
