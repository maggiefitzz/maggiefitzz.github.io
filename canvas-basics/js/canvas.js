//count 1-10
for (let counter = 1; counter <= 10; counter++) {
    //console.log(counter)
}
//count 10-1
for (let minus = 10; minus >= 1; minus--) {
    //console.log(minus)
}

//count 1-10 only odd
for (let odd = 1; odd <= 10; odd += 2) {
    //console.log(odd)
}
//count 1-10 only even
for (let even = 2; even <= 10; even += 2) {
    //console.log(even)
}
//canvy elemenet
let myCanvas = document.getElementById("my-canvas");
//canvas object
let canvy = myCanvas.getContext("2d");
canvy.fillStyle = "#FFE4C4"
canvy.fillRect(0, 0, 200, 100);
//draw a line! yayayyayy
canvy.beginPath();
canvy.moveTo(0, 0);
canvy.lineTo(200, 100);
canvy.stroke();
//draw another line! yayaya
canvy.beginPath();
canvy.moveTo(200, 0);
canvy.lineTo(0, 100);
canvy.stroke();
//draw circle 
canvy.beginPath();
canvy.arc(100, 50, 25, 0, 2 * Math.PI);
canvy.strokeStyle = "RED"
canvy.stroke();
//bullseye
for (let radius = 20; radius <= 20; radius -= 5) {
    canvy.beginPath();
    canvy.arc(100, 50, radius, 0, 2 * Math.PI);
    canvy.strokeStyle = "Red"
    canvy.stroke();
}