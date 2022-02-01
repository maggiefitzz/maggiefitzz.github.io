let pee = 7;
let belly = 7;
let energy = 7;

function feedPet() {
    console.log("feeding doggie...")
    if (belly > 0) {
        belly -= 1;
    }
    console.log("belly: " + belly)
    refreshUI()
}





function letOut() {
    console.log("letting out doggie...")
    if (pee > 0) {
        pee -= 1;
    }
    console.log("pee: " + pee)
    refreshUI()
}


function tireDog() {
    console.log("tiring out doggie...")
    console.log("letting out doggie...")
    if (energy > 0) {
        energy -= 1;
    }
    console.log("energy: " + energy)
    refreshUI()
}



function refreshUI() {
    let hungerMeter = document.getElementById("hunger-meter");
    hungerMeter.value = belly;
    let hungerParagraph = document.getElementById("hunger-para")
    hungerParagraph.innerHTML = belly;

    let peeMeter = document.getElementById("pee-meter");
    peeMeter.value = pee;
    let peeParagraph = document.getElementById("pee-para")
    peeParagraph.innerHTML = pee;

    let energyMeter = document.getElementById("energy-meter");
    energyMeter.value = energy;
    let energyParagraph = document.getElementById("energy-para")
    energyParagraph.innerHTML = energy;
    //update image
    let petImg = document.getElementById("pet-img");
    let petPara = document.getElementById("pet-cond")
    if (belly === 0 && pee === 0 && energy === 0) {
        petImg.src = "images/max-asleep.jfif"
        petPara.innerHTML = "max asleep"
        alert("you won good job!")
    } else if (belly >= 6 && pee <= 5 && energy >= 6) {
        petImg.src = "images/max-hungry.jpg"
        petPara.innerHTML = "max is hungry"
    } else if (belly <= 5 && pee <= 5 && energy <= 5) {
        petImg.src = "images/max-sleepy.jfif"
        petPara.innerHTML = "max is sleepy you are close!"
    } else if (belly <= 5 && pee >= 6 && energy <= 5) {
        petImg.src = "images/max-peedonfloor.jfif"
        petPara.innerHTML = "oh no! max peed on the floor"
    } else if (belly <= 5 && pee >= 6 && energy >= 6) {
        petImg.src = "images/max-needtopee.jfif"
        petPara.innerHTML = "max needs to pee"
    } else if (belly >= 6 && pee >= 6 && energy <= 5) {
        petImg.src = "images/max-tired.jfif"
        petPara.innerHTML = "max is tired"
    } else if (belly === 10 && pee === 10 && energy === 10) {
        petImg.src = "images/max-restless.jfif"
        petPara = "max is restless"
        alert("max is restless you failed :(")
    } else {
        petImg.src = "images/max-base.jpg"
        petPara = "this is max"
    }

}

function decreasePet() {
    if (belly < 10 && belly >= 1) {
        belly += 1;
    }
    if (pee < 10 && pee >= 1) {
        pee += 1;
    }
    if (energy < 10 && pee >= 1) {
        energy += 1;
    }
    refreshUI();
}
let petTimer = setInterval(decreasePet, 3500);


/* function refreshUIII() {
    let energyMeter = document.getElementById("energy-meter");
    energyMeter.value = energy;
    let energyParagraph = document.getElementById("energy-para")
    energyParagraph.innerHTML = energy;

}
function refreshUII() {
    let peeMeter = document.getElementById("pee-meter");
    peeMeter.value = pee;
    let peeParagraph = document.getElementById("pee-para")
    peeParagraph.innerHTML = pee;

}
*/
;