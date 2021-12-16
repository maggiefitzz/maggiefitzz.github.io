//while loop:
/*let number = 10;
while (number >= 0) {
    console.log(number);
    number = number - 1;
    //    stop(number = 0);
}
*/



let welcomeMsg = "Welcome to Follow the rainbow you must choose to go north or south";
alert(welcomeMsg);
let continueGame = "yes"

while (continueGame === "yes") {
    //ask witch cave

    let playerChoice = prompt("Which Path would you like to take (north or south)");
    let playerChoiceNum = 0;
    let wrongPath = Math.floor(Math.random() * 2) + 1;
    if (playerChoice === "south") {
        playerChoiceNum = 1;
    } else if (playerChoice === "north") {
        playerChoiceNum = 2;
    }
    if (playerChoiceNum === wrongPath) {
        alert("sorry you lost the rainbow :(");
    } else {
        alert("you are close to the end of the rainbow!");
        let playerAge = Number(prompt("How old are you?"));
        if (playerAge < 13) {
            alert("you are too young to have gold!");
        } else if (playerAge >= 14 && playerAge <= 29) {
            alert("you get the gold yayaya");
        } else {
            alert("you are too old for the gold!");
        }
    }

    continueGame = prompt("Would you like to play again?");

}