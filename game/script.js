let state = {
  playerWins: 0,
  computerWins: 0,
};
const CHOICES = ["rock", "paper", "scissors"];
const WINNING_PLAY = {
  "rock scissors": true,
  "paper rock": true,
  "scissors paper": true,
};
const OUTCOME_TEXT = {
    win: "You win!",
    tie: "You tie!",
    lose: "Computer wins!",
};

document.addEventListener("DOMContentLoaded", function () {
  addClickHandlers();
  render();
});

const addClickHandlers = () => {
  document.querySelectorAll(".play").forEach((button) => {
    button.addEventListener("click", (e) => {
      const choice = e.target.innerHTML;
      play(choice);
    });
  });
};

const determineMatch = (choice1, choice2) => {
  if (choice1 === choice2) {
    return "tie";
  }
  if (WINNING_PLAY[`${choice1} ${choice2}`]) {
    return "win";
  }
  return "lose";
};

const getRandomChoice = () => {
  const choice = Math.floor(Math.random() * Math.floor(3));
  return CHOICES[choice];
};

const play = (playerChoice) => {
  const computerChoice = getRandomChoice();
  const outcome = determineMatch(playerChoice, computerChoice);
  if (outcome === "win") {
    state = { ...state, playerWins: state.playerWins + 1 };
  }
if (outcome === "lose") {
    state = { ...state, computerWins: state.computerWins + 1 };
  }
  render(playerChoice, computerChoice, outcome);
};

const render = (playerChoice, computerChoice, outcome) => {
  if (outcome) {
    document.querySelector(
      ".aar"
    ).innerHTML = `${playerChoice}-${computerChoice}: ${OUTCOME_TEXT[outcome]}`;
  }
  document.querySelector(".player-score").innerHTML = state.playerWins;
  document.querySelector(".computer-score").innerHTML = state.computerWins;
};
