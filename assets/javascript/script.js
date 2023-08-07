import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import template from "./template.js";
import { statusGame } from './statusGame.js'
import { initialOptions, cleanScreen, toggleHidden, createElementCards, addInputAtributs, showScore } from './screen.js';

// const screen = document.getElementById('screen');


const startGame = () => {
	statusGame.amountOfCards()
	statusGame.selectCards()
	cleanScreen(screen);
	toggleHidden('.scoreboard', 'remove')
	createElementCards(screen, statusGame, 'player')
	createElementCards(screen, statusGame, 'pc')
	setWaitingTime(1000, flipUnflip, '#card-player');
	setWaitingTime(1500, addInputAtributs);
};

const funsemNome = ({ id }) => {
	toggleHidden('.cards-status')
	flipUnflip('#card-pc');
	const winer = checkWinner(id);
	const [pointPlayer, pointPc] = statusGame.updateScore(winer)
	showScore({ pointPlayer, pointPc });
	setWaitingTime(2000, turnCard);
};

const flipUnflip = (idElement, flip = true) => {
	const card = document.querySelector(idElement);
	if (flip) {
		card.style.animation = 'flip 0.5s linear both'
	}
	else {
		card.style.animation = 'untap 0.5s linear both'
	}
}

const checkWinner = (target) => {
	const playerSelectedAttribute = statusGame.returnAtributs('player', target);
	const pcSelectedAttribute = statusGame.returnAtributs('pc', target);
	let playerWinner = false;
	if (playerSelectedAttribute > pcSelectedAttribute) {
		playerWinner = 'player';
	}
	if (playerSelectedAttribute < pcSelectedAttribute) {
		playerWinner = 'pc';
	}
	return playerWinner;
}

const turnCard = () => {
	statusGame.endRound();
	if (statusGame.amountCards > 0) {
		flipUnflip('#card-pc', false);
		flipUnflip('#card-player', false);

		setTimeout(() => {

			updatecard();
			toggleHidden('.cards-status', 'remove')
			setWaitingTime(1500, flipUnflip, '#card-player');

		}, 200);
	} else {
		reset(statusGame);
	}
};

const updatecard = () => {
	const cards = document.getElementsByClassName('front');
	cards[0].src = statusGame.returnImagen('player');
	cards[1].src = statusGame.returnImagen('pc');
};

const setWaitingTime = (time, callBack, value) => {
	setTimeout(() => callBack(value), time);
};

const reset = (objPlayers) => {
	cleanScreen(screen);

	objPlayers.player.cards = [];
	objPlayers.player.index = 0;
	objPlayers.player.points = 0;

	objPlayers.pc.cards = [];
	objPlayers.pc.index = 0;
	objPlayers.pc.points = 0;
	initialOptions(screen);
}

/* initialOptions(screen);
screen.addEventListener('click', functionRoutes);s */

createApp(template).mount('#app')