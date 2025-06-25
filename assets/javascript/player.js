import listCards from "./cards.js";

export default class Player {
  constructor(amountCards) {
    this.flip = false;
    this.cards = this.selectCards(amountCards);
    this.points = 0;
    this.changeCurrentCard(amountCards - 1);
  }

  selectCards(amountCards) {
    const cards = Array(amountCards)
      .fill(0)
      .map((_) => {
        const index = parseInt(Math.random() * listCards.length);
        return listCards[index];
      });

    return cards;
  }

  changeCurrentCard(i) {
    this.currentCard = this.cards[i];
  }
}
