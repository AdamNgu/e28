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

const getRandomChoice = () => {
  const choice = Math.floor(Math.random() * Math.floor(3));
  return CHOICES[choice];
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

Vue.component("score-board", {
  props: ["playerWins", "computerWins"],
  template: `<div>
  <div>
    Player: <span class="player-score">{{playerWins}}</span> 
    Computer: <span class="computer-score">{{computerWins}}</span>
  </div>
</div>`,
});

var app = new Vue({
  el: ".main",
  data: {
    playerWins: 0,
    computerWins: 0,
    playerChoice: null,
    computerChoice: null,
    outcome: "",
  },
  methods: {
    selectChoice(event) {
      this.playerChoice = event.target.innerHTML;
      this.computerChoice = getRandomChoice();
      if (this.playerChoice === this.computerChoice) {
        this.outcome = "tie";
        return;
      }
      if (WINNING_PLAY[`${this.playerChoice} ${this.computerChoice}`]) {
        this.playerWins++;
        this.outcome = "win";
        return;
      }
      this.computerWins++;
      this.outcome = "lose";
    },
    resetGame() {
      this.playerWins = 0;
      this.computerWins = 0;
      this.playerChoice = null;
      this.computerChoice = null;
      this.outcome = null;
    },
  },
  computed: {
    lastGameResult() {
      return `${this.playerChoice} vs. ${this.computerChoice}: ${
        OUTCOME_TEXT[this.outcome]
      }`;
    },
  },
});
