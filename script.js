// Prompts user for input
let playerInput = prompt("Choose your weapon: Rock, Paper, or Scissors?");
// Calls function getRandomInt to fetch a variable for function computerRandom
let computerSelection = getRandomInt(3);
// Calls function computerRandom to fetch input for function battle
let computerPlay = computerRandom(computerSelection);
// Assigns result of function battle to a variable for printing
let result = battle(playerInput,computerSelection);

// Generates a random number 0, 1, 2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

// Converts random number into computerPlay variable
function computerRandom() {
  if (computerSelection === 0) {
  return "rock";
} else if (computerSelection === 1) {
  return "paper";
} else if (computerSelection === 2) {
  return "scissors";
}
};

// Checks player input against computer input to determine game outcome
function battle() {
  let playerSelection = playerInput.toLowerCase();
  if (playerSelection === "rock" && computerPlay === "scissors" || playerSelection === "scissors" && computerPlay === "paper" || playerSelection === "paper" && computerPlay === "rock") {
    return "Player Wins!";
  } else if (playerSelection === computerPlay) {
    return "Game is a Draw!";
  } else {
    return "Computer Wins!";
  }
};

// Alerts game outcome
alert(result);
