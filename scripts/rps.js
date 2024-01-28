const rockPaperScissors = Array("rock", "paper", "scissor");

let humanwins = 0;
let computerwins = 0;
let buttonRock = document.querySelector("#btnRock");
let buttonPaper = document.querySelector("#btnPaper");
let buttonScissor = document.querySelector("#btnScissor");
let divresult = document.querySelector(".result");


buttonRock.addEventListener("click", function () {
     game(pickCompChoice(), "rock");
     resetCounter();
});

buttonPaper.addEventListener("click", function () {
     game(pickCompChoice(), "paper");
     resetCounter();
});

buttonScissor.addEventListener("click", function () {
     game(pickCompChoice(), "scissor");
     resetCounter();
});

function pickCompChoice() {
     return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function resetCounter() {

     if (computerwins === 5 || humanwins === 5) {
          computerwins = 0;
          humanwins = 0;
     }
}

function displayResult(whoWon, computerwins, humanwins) {

     if (computerwins === 5 || humanwins === 5) {
          if (computerwins === 5) {
               winner = "computer"
          } else {
               winner = "human"
          }
          let displayText = "We have a winner! " + winner + " Wins the game!"
          divresult.textContent = displayText;
          return;
     }
     if (whoWon !== "TIE") {


          let displayText = "This round " + whoWon + " won! "
               + "Computer has: " + computerwins + " Humans has: " + humanwins;
          divresult.textContent = displayText;
     } else {
          let displayResult = "This round is a TIE " + "Computer has: "
               + computerwins + " Humans has: " + humanwins;
     }

}

function game(compChoice, playersChoice) {
     if ((compChoice === "paper" && playersChoice === "rock") ||
          (compChoice === "rock" && playersChoice === "scissor") ||
          (compChoice === "scissor" && playersChoice === "paper")) {
          computerwins++;
          displayResult("computer", computerwins, humanwins);
     } else if (compChoice !== playersChoice) {
          humanwins++;
          displayResult("Human", computerwins, humanwins);
     } else {
          displayResult("TIE!", computerwins, humanwins);

     }
}


