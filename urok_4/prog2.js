"use strict";

let otrezok = {
    x1: 5,
    x2: 16,
    y1: 3,
    y2: 15
};

// object
console.log(otrezok);

// JSON-object
console.log(JSON.stringify(otrezok));

// (x1, y1)
console.log(otrezok.x1 + "; " + otrezok.y1);

/**
 * Случайное число в интервале от min до max
 * @param min
 * @param max
 * @returns {*}
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createOtrezok(x1,y1,x2,y2) {
    let obj = {};
    obj.x1 = x1;
    obj.x2 = x2;
    obj.y1 = y1;
    obj.y2 = y2;
    return obj;
}

let new_otrezok_1 = createOtrezok(getRandom(-10,10), getRandom(-10,10),
                                getRandom(-10,10), getRandom(-10,10));

console.log(new_otrezok_1);

let new_otrezok_2 = createOtrezok(getRandom(-10,10), getRandom(-10,10),
    getRandom(-10,10), getRandom(-10,10));

console.log(new_otrezok_2);

// ДЗ: создать массив отрезков
// След урок: сервер





