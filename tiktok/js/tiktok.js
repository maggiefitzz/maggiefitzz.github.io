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
function magicAlgorithm(numLikes, comments, numShares, numFollowers) {
    let rank = 0;

    if (numLikes >= 10000 && comments.includes("goats") && numShares >= 10000 && numFollowers >= 10000) {
        rank = 1;
    } else if (numLikes >= 5000 && comments.includes("dancing") && numShares >= 100 && numFollowers >= 1000) {
        rank = 100;
    } else {
        rank = 1000;
    }
    return rank;
}

function popup() {
    alert("welcome to tiktok")
    let likeCount = Number(prompt("how many likes did the video get"));
    let comment = prompt("what is the most recent coment on the video?");
    let numShares = Number(prompt("how many shares did this video get?"));
    let rankResult = magicAlgorithm(likeCount, comment, numShares);
    let resultString = "the video's rating is: " + rankResult;
    alert(resultString);
}

function showUI() {
    let likeCount = Number(document.getElementById("like-textbox").vaulue);
    let comment = document.getElementById("comment-textbox").vaulue;
    let shareCount = Number(document.getElementById("share-textbox").vaule);
    let followerCount = Number(document.getElementById("followers-textbox").value);

    let rankResult = magicAlgorithm(likeCount, comment, shareCount, followerCount)
    document.getElementById("result").innerHTML = "Tiktok Rank" + rankResult;
}