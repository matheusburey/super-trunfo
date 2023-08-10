import listCards from "../cards.js";

export default {
  name: "Game",
  data() {
    return {
      template_id: 1,
      amountCards: 3,
      flip: true,
      flip_pc: 0,
      cards: {
        player: [],
        pc: [],
      },
      points: {
        player: 0,
        pc: 0,
      },
    };
  },
  methods: {
    selectCards() {
      const player_cards = [];
      const pc_cards = [];
      for (let i = 0; i < this.amountCards * 2; i++) {
        const index = parseInt(Math.random() * listCards.length);
        const card = listCards[index];
        if (i % 2 === 0) {
          player_cards.push(card);
        } else {
          pc_cards.push(card);
        }
      }
      this.cards = {
        player: player_cards,
        pc: pc_cards,
      };
      this.template_id = 2;
    },
    checkWinner({ target }) {
      this.flip_pc = 1;
      const value = target.value;
      const cards = this.cards;
      const playerSelectedAttribute =
        cards.player[this.amountCards - 1].atributos[value];
      const pcSelectedAttribute =
        cards.pc[this.amountCards - 1].atributos[value];
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
  template: `
    <div>
      <div class="initi-div" v-if="template_id == 1">
        <span>Deck com: </span>
        <select class="game-options" v-model="amountCards">
          <option value="3">03 cartas</option>
          <option value="5">05 cartas</option>
          <option value="10">10 cartas</option>
        </select>
        <button class="button" @click="selectCards">Start Game</button>
      </div>
      <div v-if="template_id == 2">
        <div class="div-cards" :class="flip ? 'flip-card' : 'untap-card'">
          <img class="front" :src="cards.player[amountCards -1].img" />
          <img src="assets/imagens/fundo.jpg" />
          <div class="cards-status" v-if="flip">
            <input type="button" value="ki" @click="checkWinner" />
            <input type="button" value="tecnicas" @click="checkWinner" />
            <input type="button" value="velocidade" @click="checkWinner" />
            <input type="button" value="transformacoes" @click="checkWinner" />
          </div>
        </div>
        <div class="div-cards" :class="flip_pc === 0 ? '' : flip_pc === 1 ? 'flip-card' : 'untap-card'">
          <img class="front" :src="cards.pc[amountCards -1].img" />
          <img src="assets/imagens/fundo.jpg" />
        </div>
      </div>
    </div>
  `,
};
