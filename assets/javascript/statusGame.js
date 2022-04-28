import listCards from './cards.js';

export const statusGame = {
	player: {
		cards: [],
		points: 0,
	},
	pc: {
		cards: [],
		points: 0
	},
	amountCards: 0,
	returnImagen: function(player){
		const i = this.amountCards - 1;
		return this[player].cards[i].img;
	},
	amountOfCards: function(){
		const number = document.getElementById('numberCards');
		this.amountCards = Number(number.value);
	},
	returnAtributs: function(player, atribut) {
		const i = this.amountCards - 1;
		return this[player].cards[i].atributos[atribut];
	}, 
	selectCards: function() {
		const maxValue = listCards.length;
		for(let i = 0; i < this.amountCards * 2; i++){
			const index = parseInt(Math.random() * maxValue);
			const card = listCards[index]
			if (i % 2 === 0){
				this.player.cards.push(card)
			} else {
				this.pc.cards.push(card)
			}
		}
	},
	updateScore: function(winer){
		if (winer){
			this[winer].points++;
		}
		const pointPlayer = this.player.points
		const pointPc = this.pc.points
		return [ pointPlayer, pointPc ]
	},
	endRound: function() {
		this.amountCards--
	}
};


