// Plays five rounds
for (i = 1; i <= 5; i++) {

// Prompts user for input
let playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");
// Calls function computerRandom to fetch computer's input for function battle
let computerPlay = computerRandom(getRandomInt(3));

// Generates a random number 0, 1, 2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

// Converts random number into playable variable
function computerRandom() {
  if (getRandomInt(3) === 0) {
  return "rock";
} else if (getRandomInt(3) === 1) {
  return "paper";
} else if (getRandomInt(3) === 2) {
  return "scissors";
}
};

// Checks player input against computer input to determine game outcome
function battle() {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    alert("Please choose 'Rock', 'Paper', or 'Scissors'");
  } else if (playerSelection === "rock" && computerPlay === "scissors" || playerSelection === "scissors" && computerPlay === "paper" || playerSelection === "paper" && computerPlay === "rock") {
    return "Player Wins!";
  } else if (playerSelection === computerPlay) {
    return "Game is a Draw!";
  } else {
    return "Computer Wins!";
  }
};

// Logs round outcome
console.log(battle(playerSelection,computerPlay + i));
};
