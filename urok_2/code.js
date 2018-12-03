"use strict";

window.onload = function () {
    let can = document.getElementById("can");
    let holst = can.getContext("2d");

    function clearFon() {
        holst.clearRect(0,0,800,600);
        holst.fillStyle = "#cccccc";
        holst.fillRect(0,0,800,600);
    }

    let xHero = 200;
    let yHero = 200;
    let speedHero = 5;

    function drawHero () {
        holst.fillStyle = "green";
        holst.fillRect(xHero,yHero,50,50);
    }

    clearFon();
    drawHero();

    function moveHero() {
        if (xHero + 50 >= 800) {
            speedHero = speedHero * (-1);
        } else if (xHero < 0) {
            speedHero = speedHero * (-1);
        }
        xHero = xHero + speedHero;
    }

    let inter = setInterval(function () {
        clearFon();
        moveHero();
        drawHero();
    }, 50);
};



















