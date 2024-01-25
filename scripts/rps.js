
const rockPaperScissors = Array("Rock", "Paper", "Scissor");

function pickCompChoice(){
     pickOneItem = rockPaperScissors[Math.floor(Math.random()*3)];

     return pickOneItem;
}

compChoice = pickCompChoice();

console.log(compChoice);
