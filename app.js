let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(playerChoice, compChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    
    result_p.innerHTML = playerChoice + " beats " + compChoice + ". You win! 🔥"; 
}

function lose() {
    // compScore++;
}

function tie() {
    console.log("tie");
}

function game(playerChoice) {
  const compChoice = getComputerChoice();
  switch (playerChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(playerChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(playerChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
