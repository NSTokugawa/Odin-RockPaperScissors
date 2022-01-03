let computerChoice = getRandomInt(3);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function computerPlay() {
  if (computerChoice === 0) {
  return "rock";
} else if (computerChoice === 1) {
  return "paper";
} else if (computerChoice === 2) {
  return "scissors";
}
};
