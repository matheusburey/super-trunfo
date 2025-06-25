import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Player from "./player.js";


createApp({
  data() {
    return {
      gameStarted: false,
      amountCards: 3,
      pc: null,
      player: null,
    };
  },
  methods: {
    startGame() {
      this.pc = new Player(this.amountCards);
      this.player = new Player(this.amountCards);
      this.gameStarted = true;
      setTimeout(() => {
        this.player.flip = true;
      }, 800);
    },
    checkWinner({ target }) {
      this.pc.flip = true;
      const value = target.value;
      const cards = this.cards;
      const playerSelectedAttribute =
        this.player.cards[this.amountCards - 1].atributos[value];
      const pcSelectedAttribute =
        this.pc.cards[this.amountCards - 1].atributos[value];
      console.log(playerSelectedAttribute, pcSelectedAttribute);
      let winner = false;
      if (playerSelectedAttribute > pcSelectedAttribute) {
        winner = "player";
      }
      if (playerSelectedAttribute < pcSelectedAttribute) {
        winner = "pc";
      }
      if (this.amountCards === 1) {
        this.template_id = 1;
        this.amountCards = 3;
        return;
      }

      setTimeout(() => {
        this.flip = false;
        this.flip_pc = 2;
      }, 1800);

      setTimeout(() => {
        this.amountCards = this.amountCards - 1;
        this.flip = true;
      }, 2500);
    },
  },
}).mount("#app");
