let computerSelection = getRandomInt(3);
let playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");
let computerPlay = computerRandom(computerSelection);
let result = battle(playerSelection,computerSelection);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function computerRandom() {
  if (computerSelection === 0) {
  return "rock";
} else if (computerSelection === 1) {
  return "paper";
} else if (computerSelection === 2) {
  return "scissors";
}
};

function battle() {
  if (playerSelection === "rock" && computerPlay === "scissors" || playerSelection === "scissors" && computerPlay === "paper" || playerSelection === "paper" && computerPlay === "rock") {
    return "Player Wins!";
  } else if (playerSelection === computerPlay) {
    return "Game is a Draw!";
  } else {
    return "Computer Wins!";
  }
};

alert(result);
