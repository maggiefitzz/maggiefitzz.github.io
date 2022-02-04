let myCanvas = document.getElementById("my-canvas");
let canvy = myCanvas.getContext("2d");
//position
let xPosition = 10

function moveH() {
    //clear screen
    canvy.clearRect(0, 0, 500, 500);
    //draw rect at current
    canvy.fillRect(xPosition, 0, 20, 20)
    canvy.fillStyle = "purple";
    // move x position over by x pixels
    xPosition += 1;
    //did i hit wall? oops
    if (xPosition >= 500) {
        xPosition = 0;
    }
}
//setInterval(moveH, 10);

let yPosition = 0

function moveV() {
    //clear screen
    canvy.clearRect(0, 0, 500, 500);
    //draw rect at current
    canvy.fillRect(0, yPosition, 20, 20)
    canvy.fillStyle = "purple";
    // move x position over by x pixels
    yPosition += 1;
    //did i hit wall? oops
    if (yPosition >= 500) {
        yPosition = 0;
    }
}
//setInterval(moveV, 10);
let xDir = 1

function bounceH() {
    //clear screen
    canvy.clearRect(0, 0, 500, 500);
    //draw rect at current
    canvy.fillRect(xPosition, 0, 20, 20)
    canvy.fillStyle = "purple";
    // move x position over by x pixels
    xPosition = xPosition + xDir;
    //did i hit wall? oops
    if (xPosition >= 490) {
        xDir = -1;

    }
    if (xPosition <= 0) {
        xDir = 1;
    }
}
//setInterval(bounceH, 10)

function ballBounce() {
    canvy.arc(100, 50, 10, 0, 2 * Math.PI);

}