// let gameNum = 123;
let randIx = Math.floor(Math.random() * 100);
    // return options[randIx];
let userNum = prompt("Guess the Game Number : (1-100)");

while(userNum != randIx) {
    if(userNum >=randIx) {
        userNum = prompt(" HINT: You enter high number. Guess low again :");
    }
    else {
        userNum = prompt(" HINT: You enter low number. Guess high again :");
    }
}
prompt("Congratulations, You enter right number");
console.log("Congratulations, You enter right number");