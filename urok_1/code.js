"use strict";

window.onload = function () {
    let f1 = document.getElementById("field1");
    let f2 = document.getElementById("field2");
    let b1 = document.getElementById("btn1");
    let resBox = document.getElementById("result");

    b1.onclick = function () {
        let a = f1.value;
        let b = f2.value;
        a = parseInt(a);
        b = parseInt(b);
        let sum = a + b;
        // alert(sum);
        resBox.innerHTML = sum;
    }

    // z = x / y
};
