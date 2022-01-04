// Stores points for each round
let computerPoints = 0;
let playerPoints = 0;

// Plays five rounds
for (i = 1; i <= 5; i++) {

// Prompts user for input
let playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");
// Stores random integer
let computerChoice = getRandomInt(3);
// Calls function <computerRandom> to fetch computer's input for function <battle>
let computerPlay = computerRandom(computerChoice);
// Stores result of round
let result = battle(playerSelection, computerPlay);

// Generates a random number 0, 1, 2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

// Converts random number into playable variable
function computerRandom() {
  if (computerChoice === 0) {
  return "rock";
} else if (computerChoice === 1) {
  return "paper";
} else if (computerChoice === 2) {
  return "scissors";
}
};

// Checks player input against computer input to determine round outcome
function battle() {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    alert("Please choose 'Rock', 'Paper', or 'Scissors'");
  } else if (playerSelection === "rock" && computerPlay === "scissors" || playerSelection === "scissors" && computerPlay === "paper" || playerSelection === "paper" && computerPlay === "rock") {
    return `You choose ${playerSelection}, I choose ${computerPlay}, You Win!`;
  } else if (playerSelection === computerPlay) {
    return `You choose ${playerSelection}, I choose ${computerPlay}, Game is a Draw!`;
  } else {
    return `You choose ${playerSelection}, I choose ${computerPlay}, I Win!`;
  }
};

// Keeps score between rounds
if (result === `You choose ${playerSelection}, I choose ${computerPlay}, You Win!`) {
  playerPoints ++;
} else if (result === `You choose ${playerSelection}, I choose ${computerPlay}, I Win!`) {
  computerPoints ++;
};

// Logs round outcome
console.log(result);
};

// Logs game outcome
if (playerPoints > computerPoints) {
  console.log(`You win the game, ${playerPoints} to ${computerPoints}!`);
} else if (playerPoints < computerPoints) {
  console.log(`I win the game, ${computerPoints} to ${playerPoints}!`);
} else {
  console.log(`The game is a Draw, ${playerPoints} to ${computerPoints}!`);
};
