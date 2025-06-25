import listCards from "./cards.js";

export default class Player {
  constructor(amountCards) {
    this.flip = false;
    this.cards = this.selectCards(amountCards);
    this.points = 0;
  }

  selectCards(amountCards) {
    const cards = Array(amountCards).fill(0).map((_) => {
      const index = parseInt(Math.random() * listCards.length);
      return listCards[index];
    });
    console.log(cards);

    return cards;
  }

  flipCard() {
    this.flip = !this.flip;
  }
}
