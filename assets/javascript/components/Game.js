export default {
  name: 'Game',
  data() {
    return {
      template_id: 1,
      players: {
        player: {
          cards: ["assets/imagens/android17.jpg", "assets/imagens/android17.jpg", "assets/imagens/android17.jpg"],
          points: 0,
        },
        pc: {
          cards: ["assets/imagens/android17.jpg", "assets/imagens/android17.jpg", "assets/imagens/android17.jpg"],
          points: 0
        },
      },
    }
  },
  props: {
    card_id: Number,
  },
  methods: {
    nextStageGame() {
      if (this.template_id === 3) {
        this.template_id = 1;
      } else {
        this.template_id++;
      }
    },
    teste() {
      this.template_id = 10;
    }
  },
  template: `
    <div>
    <div class="initi-div" v-if="template_id == 1">
      <span>Deck com:</span>
      <select class="game-options" @change="card_id">
        <option value="3">03 cartas</option>
        <option value="5">05 cartas</option>
        <option value="10">10 cartas</option>
      </select>
      <button class="button" @click="nextStageGame">Start Game</button>
    </div>
    <div v-if="template_id == 2">
      <div class="div-cards flip-card"><img class="front" :src="players.player.cards[card_id]" /><img
          src="assets/imagens/fundo.jpg" /></div>
      <div class="div-cards"><img class="front" :src="players.pc.cards[card_id]" /><img
          src="assets/imagens/fundo.jpg" /></div>
    </div>
    <div v-if="template_id == 3">
      <h1>Deck com:</h1>
    </div>
    </div>
  `
}