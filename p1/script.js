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

Vue.component("game-history", {
  props: ["history"],
  template: `      <ul>
    <history-item v-for="game in history" v-bind:game="game"></history-item>
</ul>`,
});

Vue.component("history-item", {
  props: ["game"],
  template: `     
  <li v-bind:class="{win: gameResult==='win', lose: gameResult==='lose'}">
    {{game[0]}} vs. {{game[1]}}
  </li>`,
  computed: {
    gameResult() {
      return determineMatch(this.game[0], this.game[1]);
    }
  }
});

var app = new Vue({
  el: ".main",
  data: {
    history: [],
    playerChoice: null,
    computerChoice: null,
  },
  methods: {
    selectChoice(event) {
      this.playerChoice = event.target.innerHTML;
      this.computerChoice = getRandomChoice();
      this.history.push([this.playerChoice, this.computerChoice])
    },
    resetGame() {
      this.playerChoice = null;
      this.computerChoice = null;
      this.history = [];
    },
  },
  computed: {
    lastMatch() {
      return this.history[this.history.length-1];
    },
    lastGameOutcome() {
      if (this.lastMatch) {
        return determineMatch(...this.lastMatch)
      }
    },
    lastGameDisplay() {
      return `${this.lastMatch[0]} vs. ${this.lastMatch[1]}: ${
        OUTCOME_TEXT[this.lastGameOutcome]
      }`;
    },
  },
});
