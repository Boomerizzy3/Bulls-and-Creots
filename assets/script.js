const computernumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var guessnumber = document.getElementById("guesses").innerHTML;
const element = document.querySelector("#computer-button");
var gamemode = 1
var submit = 1
var stage = 1;
var computerguess = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [],
    [],
    [],
];
var confirmedNumbers = [];
var confirmedOut = [];
var fiftyFifty = [];
var guesstotal = 0;
var possibleNumbers = [];

function bullsandcretos(guess, answer) {

    var bullsandcreots = [0, 0];

    if (guess[0] == answer[0]) {
    bullsandcreots[0]++
} else if (guess[0] == answer[1]){
    bullsandcreots[1]++
} else if (guess[0] == answer[2]){
    bullsandcreots[1]++
} else if (guess[0] == answer[3]){
    bullsandcreots[1]++
}
if (guess[1] == answer[1]) {
    bullsandcreots[0]++
} else if (guess[1] == answer[0]){
    bullsandcreots[1]++
} else if (guess[1] == answer[2]){
    bullsandcreots[1]++
} else if (guess[1] == answer[3]){
    bullsandcreots[1]++
}
if (guess[2] == answer[2]) {
    bullsandcreots[0]++
} else if (guess[2] == answer[1]){
    bullsandcreots[1]++
} else if (guess[2] == answer[0]){
    bullsandcreots[1]++
} else if (guess[2] == answer[3]){
    bullsandcreots[1]++
}
if (guess[3] == answer[3]) {
    bullsandcreots[0]++
} else if (guess[3] == answer[1]){
    bullsandcreots[1]++
} else if (guess[3] == answer[2]){
    bullsandcreots[1]++
} else if (guess[3] == answer[0]){
    bullsandcreots[1]++
}
return bullsandcreots;
};

function preventRepeating(number) {

for (let i = 1; i < number.length; i++) {
    if (number[0] == number[i]) {
        return false;
    }
  }

  for (let i = 2; i < number.length; i++) {
    if (number[1] == number[i]) {
        return false;
    }
  }

  for (let i = 3; i < number.length; i++) {
    if (number[2] == number[i]) {
        return false;
    } else return true;
  }
}

for (let i = 1; i < computerguess.length; i++) {
    computerguess[i] = computerguess[0];
};

console.log(computerguess);

for (let i = 0; i < 9877; i++) {
    index = [...i+''].map(n=>+n);
    index2 = 0
    index3 = 0
    index4 = 0
    if(i > 9){index2 = index[index.length - 2]}
    if(i > 99){index3 = index[index.length - 3]}
    if(i > 999){index4 = index[index.length - 4]}
    potentialNumber = [computerguess[0][index4],computerguess[0][index3],computerguess[0][index2],computerguess[0][index[index.length - 1]]]
    if(preventRepeating(potentialNumber)) {
    possibleNumbers.push(potentialNumber)
    }
};

console.log(possibleNumbers);

function randomize() { 
    for (let i = computernumber.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = computernumber[i]
    computernumber[i] = computernumber[j]
    computernumber[j] = k
}
}

randomize()

var computernumber1 = [computernumber[0], computernumber[1], computernumber[2], computernumber[3]]
// console.log(computernumber1);

function userguess() {

    cpuwinornot = Math.floor(Math.random() * 4)
    // console.log("cpuwinornot = " + cpuwinornot);

    var computernumber1 = [computernumber[0], computernumber[1], computernumber[2], computernumber[3]]
    // console.log(computernumber1);

    const userguessfailsafe = document.getElementById("your-number").value;

    if (userguessfailsafe.length <4 ) {
        alert("Your guess must be 4 digits long. Please try again.")
        return;
    }

    var guesspreventreapeating = Array.from(userguessfailsafe);

    for (let i = 1; i < guesspreventreapeating.length; i++) {
        if (guesspreventreapeating[0] == guesspreventreapeating[i]) {
            alert("Your number cannot contain any repeating numbers. Please try again.")
                 return;
        }
      }
    
      for (let i = 2; i < guesspreventreapeating.length; i++) {
        if (guesspreventreapeating[1] == guesspreventreapeating[i]) {
            alert("Your number cannot contain any repeating numbers. Please try again.")
                 return;
        }
      }

      for (let i = 3; i < guesspreventreapeating.length; i++) {
        if (guesspreventreapeating[2] == guesspreventreapeating[i]) {
            alert("Your number cannot contain any repeating numbers. Please try again.")
                 return;
        }
      }
    
    if (submit == 0) {
        alert("Please enter your number for the computer to guess.")
        return;
    }

    var creot = 0
    var bull = 0
    var cpucreot = 0
    var cpubull = 0

    var x = document.getElementById("your-number").value;

    if (x[0] == computernumber1[0]) {
        bull++
    } else if (x[0] == computernumber1[1]){
        creot++
    } else if (x[0] == computernumber1[2]){
        creot++
    } else if (x[0] == computernumber1[3]){
        creot++
    }
    if (x[1] == computernumber1[1]) {
        bull++
    } else if (x[1] == computernumber1[0]){
        creot++
    } else if (x[1] == computernumber1[2]){
        creot++
    } else if (x[1] == computernumber1[3]){
        creot++
    }
    if (x[2] == computernumber1[2]) {
        bull++
    } else if (x[2] == computernumber1[0]){
        creot++
    } else if (x[2] == computernumber1[1]){
        creot++
    } else if (x[2] == computernumber1[3]){
        creot++
    }
    if (x[3] == computernumber1[3]) {
        bull++
    } else if (x[3] == computernumber1[0]){
        creot++
    } else if (x[3] == computernumber1[1]){
        creot++
    } else if (x[3] == computernumber1[2]){
        creot++
    }


    const para = document.createElement("p");
    const node = document.createTextNode(x + " - " + bull + " Bull(s) and " + creot + " Creot(s)");
    para.appendChild(node);
    const element = document.getElementById("game");
    element.appendChild(para);
    guessnumber++
    document.getElementById("guesses").innerHTML = guessnumber;
    
    //computer guess function below here

    var usersubmitnumber = document.getElementById("user-submit-number").value;
    var prevguesstotal = 0
    var y = [];
    if (stage == 1) {
        for (let i = computerguess[0].length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = computerguess[0][i]
            computerguess[0][i] = computerguess[0][j]
            computerguess[0][j] = k
        }
        y = [computerguess[0][0], computerguess[1][1], computerguess[2][2], computerguess[3][3]];
    };


    if (stage == 2) {
        y = [computerguess[0][4], computerguess[1][5], computerguess[2][6], computerguess[3][7]];
    };

    var a = [];

    if (stage == 3 && guesstotal == 4){
        confirmedOut.push(computerguess[0][8], computerguess[0][9]);
        for (let i = 0; i < possibleNumbers.length; i++) {
            if (!possibleNumbers[i].includes(confirmedOut[0]) && !possibleNumbers[i].includes(confirmedOut[1])) {
                a.push(possibleNumbers[i])
            }
        }
        // console.log(a)
        possibleNumbers = a;
    }

    if (stage == 3 && guesstotal == 3){
        fiftyFifty.push(computerguess[0][8], computerguess[0][9]);
        for (let i = 0; i < possibleNumbers.length; i++) {
            if (possibleNumbers[i].includes(fiftyFifty[0]) || possibleNumbers[i].includes(fiftyFifty[1])) {
                a.push(possibleNumbers[i])
            }
        }
        // console.log(a)
        possibleNumbers = a;
    }

    if (stage == 3 && guesstotal == 2){
        confirmedNumbers.push(computerguess[0][8], computerguess[0][9]);
        for (let i = 0; i < possibleNumbers.length; i++) {
            if (possibleNumbers[i].includes(confirmedNumbers[0]) && possibleNumbers[i].includes(confirmedNumbers[1])) {
                a.push(possibleNumbers[i])
            }
        }
        // console.log(a)
        possibleNumbers = a;
    }

    if (stage == 3) {
        y = [computerguess[0][8], computerguess[1][9], computerguess[2][0], computerguess[3][1]];
    };

    if (stage == 4) {
        stageIndex = Math.floor(Math.random() * possibleNumbers.length)
        y = possibleNumbers[stageIndex]
        stage--
    };

    stage++


    // if (stage == 2 && guesstotal == 2) {
    //     y = [computerguess[0][4], computerguess[1][5], computerguess[2][6], computerguess[3][7]];
    //     confirmedNumbers.push(computerguess[0][8], computerguess[0][9]);
    //     console.log(confirmedNumbers);
    //     console.log("stagegs2")
    // } else if (stage == 2 && guesstotal == 3) {
    //     y = [computerguess[0][0], computerguess[1][1], computerguess[2][2], computerguess[3][9]];
    //     console.log("stagegs3")
    // } else if (stage == 2 && guesstotal == 4) {
    //     confirmedOut.push(computerguess[0][8], computerguess[0][9]);
    //     stage = 4
    //     console.log("stagegs4")
    // };

    // if (stage == 3) {
    //     y = [computerguess[0][0], computerguess[1][1], computerguess[2][2], computerguess[3][8]];
    //     console.log("stage3")
    // };

    // if (stage == 4) {
    //     y = [computerguess[0][0], computerguess[1][1], computerguess[2][2], computerguess[3][stageIndex]];
    //     stageIndex++
    //     stage--
    // };

    // console.log(stage + "stage");




    // if (guessnumber > 7 && cpuwinornot == 3) {
    //     computerguess = usersubmitnumber
    // } else {
    //     for (let i = computerguess.length -1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * i)
    //         let k = computerguess[i]
    //         computerguess[i] = computerguess[j]
    //         computerguess[j] = k
    //     }
    // }
    
    // console.log(computerguess);

    // console.log(y)

    if (y[0] == usersubmitnumber[0]) {
        cpubull++
    } else if (y[0] == usersubmitnumber[1]){
        cpucreot++
    } else if (y[0] == usersubmitnumber[2]){
        cpucreot++
    } else if (y[0] == usersubmitnumber[3]){
        cpucreot++
    }
    if (y[1] == usersubmitnumber[1]) {
        cpubull++
    } else if (y[1] == usersubmitnumber[0]){
        cpucreot++
    } else if (y[1] == usersubmitnumber[2]){
        cpucreot++
    } else if (y[1] == usersubmitnumber[3]){
        cpucreot++
    }
    if (y[2] == usersubmitnumber[2]) {
        cpubull++
    } else if (y[2] == usersubmitnumber[1]){
        cpucreot++
    } else if (y[2] == usersubmitnumber[0]){
        cpucreot++
    } else if (y[2] == usersubmitnumber[3]){
        cpucreot++
    }
    if (y[3] == usersubmitnumber[3]) {
        cpubull++
    } else if (y[3] == usersubmitnumber[1]){
        cpucreot++
    } else if (y[3] == usersubmitnumber[2]){
        cpucreot++
    } else if (y[3] == usersubmitnumber[0]){
        cpucreot++
    }

    guesstotal = guesstotal + cpucreot + cpubull;
    prevguesstotal = cpucreot + cpubull;
    if (prevguesstotal == 0) {
        confirmedOut.push(y[0], y[1], y[2], y[3]);
        for (let i = 0; i < possibleNumbers.length; i++) {
            if (!possibleNumbers[i].includes(confirmedOut[0]) && !possibleNumbers[i].includes(confirmedOut[1]) && !possibleNumbers[i].includes(confirmedOut[2]) && !possibleNumbers[i].includes(confirmedOut[3]) && !possibleNumbers[i].includes(confirmedOut[4]) && !possibleNumbers[i].includes(confirmedOut[5])) {
                a.push(possibleNumbers[i])
            }
        }
        possibleNumbers = a;
    }
    
    var a = [];
    for (let i = 0; i < possibleNumbers.length; i++) {
        if (bullsandcretos(y, possibleNumbers[i])[0] == bullsandcretos(y, usersubmitnumber)[0] || bullsandcretos(y, possibleNumbers[i])[1] == bullsandcretos(y, usersubmitnumber)[1]) {
            a.push(possibleNumbers[i])
        }
    };
    possibleNumbers = a;
    console.log(possibleNumbers)

    const para2 = document.createElement("p");
    const node2 = document.createTextNode(y.join("") + " - " + cpubull + " Bull(s) and " + cpucreot + " Creot(s)");
    para2.appendChild(node2);
    const element2 = document.getElementById("cpu-game");
    element2.appendChild(para2);

    if (gamemode == 0 && cpubull == 4) {
        const para2 = document.createElement("p");
        const node2 = document.createTextNode("Computer wins");
        para2.appendChild(node2);
        const element2 = document.getElementById("cpu-game");
        element2.appendChild(para2);
        element.style.opacity = "85%";
        document.getElementById("your-button").disabled = true;
        document.getElementById("your-number").disabled = true;
    }

    // console.log(y + " - " + cpubull + " Bull(s) and " + cpucreot + " Creot(s)")

    //computer guess funtion above here

    if (bull == 4) {
    const para = document.createElement("p");
    const node = document.createTextNode("YOU WIN!!!");
    para.appendChild(node);
    const element = document.getElementById("game");
    element.appendChild(para);
    element.style.opacity = "85%";
    document.getElementById("your-button").disabled = true;
    document.getElementById("your-number").disabled = true;
    }

    document.getElementById("your-number").value = null;

}


var input = document.getElementById("your-number");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("your-button").click();
    }
  });

var input1 = document.getElementById("user-submit-number");
input1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("computer-button").click();
    }
  });

  function usernumber() {
    const usernumberfailsafe = document.getElementById("user-submit-number").value;

    if (usernumberfailsafe.length <4) {
        alert("Your number must be 4 digits long. Please try again.")
        return;
    }

    var userpreventreapeating = Array.from(usernumberfailsafe);

    for (let i = 1; i < userpreventreapeating.length; i++) {
        if (userpreventreapeating[0] == userpreventreapeating[i]) {
            alert("Your number cannot contain any repeating numbers. Please try again.")
                 return;
        }
      }
    
      for (let i = 2; i < userpreventreapeating.length; i++) {
        if (userpreventreapeating[1] == userpreventreapeating[i]) {
            alert("Your number cannot contain any repeating numbers. Please try again.")
                 return;
        }
      }

      for (let i = 3; i < userpreventreapeating.length; i++) {
        if (userpreventreapeating[2] == userpreventreapeating[i]) {
            alert("Your number cannot contain any repeating numbers. Please try again.")
                 return;
        }
      }

    element.style.opacity = "85%";
    document.getElementById("computer-button").disabled = true;
    document.getElementById("user-submit-number").disabled = true;
    if (submit == 0) {
    submit++}
  }

function competitivefun() {
    randomize()
    element.style.opacity = "100%";
    document.getElementById("computer-button").disabled = false;
    document.getElementById("user-submit-number").disabled = false;
    element.style.opacity = "100%";
    document.getElementById("your-button").disabled = false;
    document.getElementById("your-number").disabled = false;
    document.querySelector(".computerside").style.display = "block"
    document.querySelector("#cpu-game").style.display = "block"
    document.querySelector(".maingame").style.justifyContent = "space-around";
    document.querySelector(".results").style.justifyContent = "space-around";

    const remove1 = document.getElementById("game");

    while (remove1.hasChildNodes()) {
        remove1.removeChild(remove1.firstChild)
    }

    const remove = document.getElementById("cpu-game");

    while (remove.hasChildNodes()) {
        remove.removeChild(remove.firstChild)
    }

    guessnumber *= 0;
    document.getElementById("guesses").innerHTML = guessnumber;
    if (gamemode == 1) {
    gamemode--;}
    stage = 1
    if (submit == 1) {
        submit--}
    
}

function singleplayerfun() {
    randomize()
    element.style.opacity = "100%";
    document.getElementById("your-button").disabled = false;
    document.getElementById("your-number").disabled = false;
    document.querySelector(".computerside").style.display = "none"
    document.querySelector("#cpu-game").style.display = "none"
    document.querySelector(".maingame").style.justifyContent = "left";
    document.querySelector(".results").style.justifyContent = "left";

    const remove1 = document.getElementById("game");

    while (remove1.hasChildNodes()) {
        remove1.removeChild(remove1.firstChild)
    }

    const remove = document.getElementById("cpu-game");

    while (remove.hasChildNodes()) {
        remove.removeChild(remove.firstChild)
    }

    guessnumber *= 0;
    document.getElementById("guesses").innerHTML = guessnumber;
    if (gamemode == 0) {
    gamemode++;
    }
    if (submit == 0) {
        submit++}
}
