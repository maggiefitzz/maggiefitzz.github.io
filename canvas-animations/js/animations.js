let myCanvas = document.getElementById("my-canvas");
let canvy = myCanvas.getContext("2d");

//player position
let playerX = 250;
let playerY = 250;
let playerSpeed = 2;
let playerXDir = 0;
let playerYDir = 0;
//ball pos
let ballX = 100;
let ballY = 100;
let ballXDir = 1.5;
let ballYDir = 2;
let ballRadius = 15;

function drawPlayer() {
    canvy.fillRect(playerX, playerY, 100, 20);
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);
    playerY += (playerSpeed * playerYDir);
    if (playerX < 0) {
        playerX = 0;

    } else if (playerX > 500 - 100) {
        playerX = 500 - 100;
    }
    if (playerY < 0) {
        playerY = 0;
    } else if (playerY > 500 - 20) {
        playerY = 500 - 20
    }
}

function drawBall() {
    canvy.beginPath()
    canvy.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    canvy.fill();
}

function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

function wallbounce() {
    if ((ballY > 500 - ballRadius) || (ballY < 0 + ballRadius)) {
        ballYDir = ballYDir * -1;
    } else if ((ballX > 500 - ballRadius) || (ballX < 0 + ballRadius)) {
        ballXDir = ballXDir * -1;
    }
}

function refreshUI() {
    canvy.clearRect(0, 0, 500, 500)
    movePlayer();
    drawPlayer();
    wallbounce();
    moveBall();
    drawBall();
}
//get paragraphs
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

//when key is pressed
function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;
    if (key === 37) {
        playerXDir = -1;
    } else if (key === 39) {
        playerXDir = 1
    }
    if (key === 38) {
        playerYDir = -1;
    } else if (key === 40) {
        playerYDir = 1;
    }

}
//when key is realeased
function keyRealesed(event) {
    let keyup = event.keyCode;
    keyupOutput.innerHTML = "Key realesed code: " + keyup;
    //stop
    if (keyup === 37) {
        playerXDir = 0;
    } else if (keyup === 39) {
        playerXDir = 0;
    }
    if (keyup === 38) {
        playerYDir = 0;
    } else if (keyup === 40) {
        playerYDir = 0;
    }
}





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
setInterval(refreshUI, 30);