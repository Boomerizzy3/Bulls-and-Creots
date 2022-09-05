const computernumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var guessnumber = document.getElementById("guesses").innerHTML;
const element = document.querySelector("#computer-button");
var gamemode = 1
var submit = 1


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
console.log(computernumber1);

function userguess() {

    cpuwinornot = Math.floor(Math.random() * 4)
    console.log("cpuwinornot = " + cpuwinornot);

    var computernumber1 = [computernumber[0], computernumber[1], computernumber[2], computernumber[3]]
    console.log(computernumber1);

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

    var computerguess = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var usersubmitnumber = document.getElementById("user-submit-number").value;

    if (guessnumber > 7 && cpuwinornot == 3) {
        computerguess = usersubmitnumber
    } else {
        for (let i = computerguess.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = computerguess[i]
            computerguess[i] = computerguess[j]
            computerguess[j] = k
        }
    }
    
    console.log(computerguess);

    var y = [computerguess[0], computerguess[1], computerguess[2], computerguess[3]];

    console.log(y)

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

    console.log(y + " - " + cpubull + " Bull(s) and " + cpucreot + " Creot(s)")

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
