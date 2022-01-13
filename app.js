let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(playerChoice, compChoice) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(
    playerChoice
  )}${smallPlayerWord} beats ${convertToWord(
    compChoice
  )}${smallCompWord}. You win! 😊`;
  playerChoice_div.classList.add("green-glow");
  setTimeout(() => playerChoice_div.classList.remove("green-glow"), 300);
}

function lose(playerChoice, compChoice) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  compScore++;
  playerScore_span.innerHTML = playerScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(
    playerChoice
  )}${smallPlayerWord} loses to ${convertToWord(
    compChoice
  )}${smallCompWord}. You lost! 😡`;
  playerChoice_div.classList.add("red-glow");
  setTimeout(() => playerChoice_div.classList.remove("red-glow"), 300);
}

function tie(playerChoice, compChoice) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  result_p.innerHTML = `${convertToWord(
    playerChoice
  )}${smallPlayerWord} equals ${convertToWord(
    compChoice
  )}${smallCompWord}. You tied! 🤬`;
  playerChoice_div.classList.add("gray-glow");
  setTimeout(() => playerChoice_div.classList.remove("gray-glow"), 300);
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
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
