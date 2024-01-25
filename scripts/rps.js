
const rockPaperScissors = Array("rock", "paper", "scissor");
let humanwins = 0;
let computerwins = 0;

function pickCompChoice() {
     return rockPaperScissors[Math.floor(Math.random() * 3)];

}

function pickPlayersChoice() {

     return prompt("What is it gonna be! Rock, Paper or.... Scissor").toLowerCase();
}

function game(compChoice, playersChoice) {
     if ((compChoice === "paper" && playersChoice === "rock") || 
        (compChoice === "rock"  && playersChoice === "scissor") ||
        (compChoice === "scissor" && playersChoice === "paper")) {
          computerwins++;
        } else if (compChoice !== playersChoice) {
          humanwins++;
        }
}

for (i = 1;i<= 5; i++) {
     compChoice = pickCompChoice();
     playersChoice = pickPlayersChoice();
     game(compChoice, playersChoice)
}

if (computerwins > humanwins) {
     console.log(`Computer wins! with ${computerwins} out of 5`)
} else if (computerwins < humanwins) {
     console.log(`Human wins! with ${humanwins} out of 5`)
} else {
     console.log("Its a TIE!")
}


