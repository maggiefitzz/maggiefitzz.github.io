alert("Ms. Stearns has the highest score at 105! see if you can beat her");
let stateImg = document.getElementById("state-img");
let imgCount = 0;
photos = ["images/alabama.jpg", "images/alaska.png", "images/arizona.png", "images/arkansas.jpg", "images/california.jpg", "images/colorado.jpg", "images/connecticut.png", "images/delaware.jpg", "images/georgia.png", "images/hawaii.png", "images/idaho.jpg", "images/illinois.jpg", "images/indiana.jpg", "images/iowa.jpg", "images/kansas.jpg", "images/kentucky.png", "images/louisiana.jpg", "images/maine.jpg", "images/maryland.jpg", "images/massachusetts.png", "images/michigan.jpg", "images/minnesota.png", "images/mississippi.png", "images/missouri.jpg", "images/montana.jpg", "images/nebraska.jpg", "images/nevada.jpg", "images/newhampshire.png", "images/newjersey.jpg", "images/newmexico.jpg", "images/newyork.jpg", "images/northcarolina.jpg", "images/northdakota.png", "images/ohio.jpg", "images/oklahoma.jpg", "images/oregon.jpg", "images/pennsylvania.png", "images/rhodeisland.jpg", "images/southcarolina.png", "images/southdakota.png", "images/tennessee.png", "images/texas.png", "images/utah.jpg", "images/vermont.png", "images/virginia.png", "images/washington.png", "images/westvirginia.png", "images/wisconsin.jpg", "images/wyoming.jpg", ]
statearray = ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming", ]
notAsked = ["true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", "true", ]
let randomNum = 0;
let image = photos[randomNum];
let answer = statearray[randomNum];
//let true = beenthere[randomNum];
let myCanvas = document.getElementById("my-canvas");
let canvy = myCanvas.getContext("2d");
let correct = document.getElementById("correct");
let incorrect = document.getElementById("incorrect");
const IMG_HEIGHT = 75;
const IMG_WIDTH = 75;
/*function imgFunction() {
    console.log('hello')
    image.src = photos[randomNum];
    answer = photos[randomNum];
    [html in img: onload="imgFunction()"]
} */
function clearCanvy() {
    canvy.clearRect(0, 0, 100, 100);
}

function drawCorrect() {
    canvy.drawImage(correct, 5, 0, IMG_WIDTH, IMG_HEIGHT);
    setTimeout(clearCanvy, 3000);

}

function drawInncorrect() {
    canvy.drawImage(incorrect, 5, 0, IMG_WIDTH, IMG_HEIGHT);
    setTimeout(clearCanvy, 3000);
}

function stateAnswer() {
    let answerT = document.getElementById("textbox").value;
    answerT = answerT.toLowerCase()
    if (answerT === answer) {
        // alert('you got the correct answer');
        drawCorrect();
        randomNum = Math.floor(Math.random() * 50) + 1;
        answer = statearray[randomNum];
        image = photos[randomNum];
        stateImg.src = image;
        imgCount += 1;
        while (notAsked[randomNum] === false && imgCount <= 50) {
            randomNum = Math.floor(Math.random() * 50) + 1;
            answer = statearray[randomNum];
            image = photos[randomNum];
        }
        notAsked[randomNum] = false;
    } else {
        drawInncorrect();
    }
}
if (imgCount === 50) {
    resetGame();
}



function resetGame() {
    for (let i = 0; i < notAsked.length; i++) {
        notAsked[i] = true
    }
}

function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("Your time is up! You got: " + imgCount)
            imgCount = 0;
        }
    }, 1000);
}

window.onload = function() {
    let fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

randomNum = Math.floor(Math.random() * 50) + 1;
answer = statearray[randomNum];
image = photos[randomNum];
stateImg.src = image;