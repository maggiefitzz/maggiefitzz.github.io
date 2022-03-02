function stateAnswer() {
    let usersAnswer = prompt("what is the correct answer?")
    if (usersAnswer === "alabama") {
        alert("good job that is the correct answer")
    } else {
        alert("try again")
    }
}


/* html code:
 <form action="" id="state-name">
 <label for="sname">state name:</label>
 <input type="text" id="sname" name="sname" value=""><br>
 <input type="submit" value="Submit">
</form>
js code:
function stateAnswer() {
    let state = getElementById.document("state-name");
    if (state == 'alabama') {
        alert("this is correct!");
    } else {
        alert("try again");
    }
} */