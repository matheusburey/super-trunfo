const initialOptions = (screen) => {
	const divIniti = document.createElement('div');
	const span = document.createElement('span');
	const select = document.createElement('select');
	const options1 = document.createElement('option');
	const options2 = document.createElement('option');
	const options3 = document.createElement('option');
	const button = document.createElement('button');

	divIniti.className = 'initi-div';
	span.innerText = 'Deck com:';
	select.className = 'game-options';
	select.id = 'numberCards'
	options1.innerText = '03 cartas';
	options1.value = '03';
	options2.innerText = '05 cartas';
	options2.value = '05';
	options3.innerText = '10 cartas';
	options3.value = '10';
	button.innerText = 'Start Game';
	button.dataset.callback = 'startGame';
	button.id = 'startGame';
	button.className = 'button';

	select.appendChild(options1);
	select.appendChild(options2);
	select.appendChild(options3);
	divIniti.appendChild(span);
	divIniti.appendChild(select);
	divIniti.appendChild(button);

	screen.appendChild(divIniti);
};

const toggleHidden = (element, toggle = 'add') =>{
	const getElement = document.querySelector(element);
	getElement.classList[toggle]('hidden');
}


const cleanScreen = (screen) => {
	screen.innerText = ''
}

const createElementCards = (screen, statusGame, player) =>{
	const card = document.createElement('div');
	const front = document.createElement('img');
	const back = document.createElement('img');

	card.className = 'div-cards';
	card.id = `card-${player}`;
	back.src = 'assets/imagens/fundo.jpg';
	front.src = statusGame.returnImagen(player);
	front.className = 'front';

	card.append(back);
	card.append(front);

	screen.append(card);
};

const addInputAtributs = () => {
	const divCardPlayer = document.querySelector('#card-player');
	const attributesValue = ['ki', 'tecnicas', 'velocidade', 'transformacoes'];
	const divInputs = document.createElement('div');

	for(let i = 0; i < 4; i++){
		const input = document.createElement('input');
		input.type = 'button';
		input.id = attributesValue[i];
		input.dataset.callback = 'attributes';

		divInputs.appendChild(input);
	};

	divInputs.className = 'cards-status';
	divCardPlayer.appendChild(divInputs);
};

const showScore = ({pointPlayer, pointPc}) => {
	const scoreboard = document.querySelector('h2.scoreboard');
	scoreboard.innerText = `Jogador ${pointPlayer} X ${pointPc} Maquina`;
};

export { initialOptions, toggleHidden, cleanScreen, createElementCards, addInputAtributs, showScore };
