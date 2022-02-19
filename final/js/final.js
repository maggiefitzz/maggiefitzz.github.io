let myCanvas = document.getElementById("my-canvas");
let canvy = myCanvas.getContext("2d");
//clouds 
let cloud1X = 350;
let cloud1Y = 400;
let cloud2X = 50;
let cloud2Y = 350;
let cloud3X = 290;
let cloud3Y = 250;
let cloud4X = 000;
let cloud4Y = 150;
let playerX = 200;
let playerY = 200;
let playerSpeed = 2;
let playerXDir = 0;
let playerYDir = 0;

function drawClouds() {
    canvy.fillRect(cloud1X, cloud1Y, 150, 20);
    canvy.fillRect(cloud2X, cloud2Y, 150, 20);
    canvy.fillRect(cloud3X, cloud3Y, 150, 20);
    canvy.fillRect(cloud4X, cloud4Y, 150, 20);
}

function drawPlayer() {
    canvy.fillRect(playerX, playerY, 20, 20);
}

function refreshUI() {
    canvy.clearRect(0, 0, 500, 500)
    drawClouds();
    drawPlayer();
}
setInterval(refreshUI, 30);