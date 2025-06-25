import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Player from "./player.js";

createApp({
  data() {
    return {
      gameScreen: 1, // 1 - options 2 - game
      amountCards: 3,
      pc: null,
      player: null,
    };
  },
  methods: {
    startGame() {
      this.pc = new Player(this.amountCards);
      this.player = new Player(this.amountCards);
      this.gameScreen = 2;
      setTimeout(() => {
        this.player.flip = true;
      }, 800);
    },
    checkWinner({ target }) {
      this.pc.flip = true;
      const attribute = target.value;
      const index = this.amountCards - 1;

      const playerSelectedAttribute =
        this.player.currentCard.atributos[attribute];
      const pcSelectedAttribute = this.pc.currentCard.atributos[attribute];

      if (playerSelectedAttribute > pcSelectedAttribute) {
        this.player.points++;
      }
      if (playerSelectedAttribute < pcSelectedAttribute) {
        this.pc.points++;
      }

      if (index === 0) {
        this.gameScreen = 1;
        this.amountCards = 3;
        return;
      }

      setTimeout(() => {
        this.player.flip = false;
        this.pc.flip = false;
      }, 1800);

      setTimeout(() => {
        this.player.changeCurrentCard(index - 1);
        this.pc.changeCurrentCard(index - 1);
        this.amountCards = index;
        this.player.flip = true;
        console.log(this.player, this.pc);
      }, 2500);
    },
  },
}).mount("#app");
