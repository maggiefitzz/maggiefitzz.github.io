/*console.log("hello world");

function hello(name) {
    console.log("Hi " + name);
}
hello("nola");

function hello3(name) {
    let counter = 0;
    while (counter < 5) {
        hello(name);
        counter++;
    }
}
hello3("Katie")

function sub(num1, num2) {

    let result = num1 - num2;

    return result;
}

function square(x) {
    p = x * x;
    return p;
}
console.log(square(5));
console.log(sub(5, 4)); */
function magicAlgorithm(numLikes, comments) {
    let rank = 0;

    if (numLikes >= 10000 && comments.includes("food", or "fjg")) {
        rank = 1;
    } else if (numLikes >= 5000 && comments.includes("dancing")) {
        rank = 100
    } else {
        rank = 1000;
    }
    return rank;
}

alert("welcome to tiktok")
let likeCount = NumberPrompt("how many likes did the video get")
let comment = promt("what is the most recent coment on the video?")
let rankResult = magicAlgorithm(likeCount, comment);
//let resultString =