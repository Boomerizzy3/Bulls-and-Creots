const computernumber = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9];
var guessnumber = document.getElementById("guesses").innerHTML;

for (let i = computernumber.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = computernumber[i]
  computernumber[i] = computernumber[j]
  computernumber[j] = k
}

var computernumber1 = [computernumber[0], computernumber[1], computernumber[2], computernumber[3]]

console.log(computernumber1);

function userguess() {
    var creot = 0
    var bull = 0
    console.log("bull is " + bull)
    console.log("creot is " + creot)
    var x = document.getElementById("your-number").value;
    console.log(x)
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

    if (bull == 4) {
    const para = document.createElement("p");
    const node = document.createTextNode("YOU WIN!!!");
    para.appendChild(node);
    const element = document.getElementById("game");
    element.appendChild(para);
    }
}

if (computernumber1.includes(1)) {
    console.log("hello");
}

console.log(guessnumber)
