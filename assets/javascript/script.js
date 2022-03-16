import listCards from './cards.js';

const screen = document.getElementById('screen');

const stausGame = {
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
  returnAtributs: function(player, atribut) {
    const i = this.amountCards - 1;
    return this[player].cards[i].atributos[atribut];
  },
  amountOfCards: function() {
    const number = document.getElementById('numberCards');
    this.amountCards = Number(number.value);
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
  }
};

const initialOptions = () => {
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
  button.id = 'startGame';
  button.className = 'button';

  select.appendChild(options1);
  select.appendChild(options2);
  select.appendChild(options3);
  divIniti.appendChild(span);
  divIniti.appendChild(select);
  divIniti.appendChild(button);
  screen.appendChild(divIniti);
  screen.addEventListener("click", functionRoutes);
};

const functionRoutes = (event) => {
  const clickedTarget = event.target;
  const clickedTargetId = clickedTarget.id;

  if (clickedTargetId === "startGame") {
    stausGame.amountOfCards()
    stausGame.selectCards()
    cleanScreen();
    startGame();
    addInputAtributs();
    displaysPlayerCard();
  };
  if(clickedTarget.name === "atributo"){
    changeClassInputAttributes('add')
    playerAttribute(clickedTargetId);
    showCardPc(stausGame);
    setWaitingTime(200, showScore);
  };
};

const startGame = () => {
  const scoreboard = document.querySelector('h2.scoreboard');
  const winner = document.createElement('di');
  const cardPc = document.createElement('div');
  const cardPlayer = document.createElement('div');
  const imgCardPc = document.createElement('img');
  const imgCardPlayer = document.createElement('img');

  scoreboard.classList.remove("hidden")
  winner.className = 'winner';
  cardPc.className = 'div-cards';
  cardPc.id = 'card-pc';
  cardPlayer.className = 'div-cards';
  cardPlayer.id = 'card-player';
  imgCardPc.src = 'assets/imagens/fundo.jpg';
  imgCardPc.className = 'cards';
  imgCardPlayer.src = 'assets/imagens/fundo.jpg';
  imgCardPlayer.className = 'cards';

  cardPc.appendChild(imgCardPc);
  cardPlayer.appendChild(imgCardPlayer);
  screen.appendChild(cardPlayer);
  screen.appendChild(cardPc);
};

const showScore = () => {
  const scoreboard = document.querySelector("h2.scoreboard");
  scoreboard.innerText = `Jogador ${stausGame.player.points} X ${stausGame.pc.points} Maquina`;
};

const displaysPlayerCard = () => {
  const imgCardPlayer = document.querySelector("#card-player .cards");
  imgCardPlayer.src = stausGame.returnImagen('player');
  animationEffects(500, imgCardPlayer, 'flip');

  changeClassInputAttributes('remove');
}

const addInputAtributs = () => {
  const divCardPlayer = document.querySelector("#card-player");
  const attributesValue = ['ki', "tecnicas", "velocidade", "transformacoes"];
  const divInputs = document.createElement('div');

  for(let i = 0; i < 4; i++){
    const input = document.createElement('input');
    input.type = 'button';
    input.name = 'atributo';
    input.id = attributesValue[i];

    divInputs.appendChild(input);
  };

  divInputs.classList.add("cards-status",'hidden');

  divCardPlayer.appendChild(divInputs);
}

function playerAttribute(target) {
  const divCards = document.getElementsByClassName("cards");
  const vencedor = document.querySelector(".winner");
  const playerSelectedAttribute = stausGame.returnAtributs('player',target);
  const pcSelectedAttribute = stausGame.returnAtributs('pc',target);
  let playerWinner = 'Empate';

  if (playerSelectedAttribute > pcSelectedAttribute) {
    playerWinner = "Venceu";
    stausGame.player.points++;
    animationEffects(1100, divCards[0], 'winner');
  }
  if (playerSelectedAttribute < pcSelectedAttribute) {
    playerWinner = "Perdeu";
    stausGame.pc.points++;
    animationEffects(1100, divCards[1], 'winner');
  }

  //vencedor.innerHTML = `<h2>${playerWinner}</h2>`;
}

const showCardPc = (objPlayers) => {
  const divCards = document.querySelector("#card-pc .cards");
  animationEffects(500, divCards, 'flip');
  divCards.src = objPlayers.returnImagen('pc');
  setWaitingTime(5000, turnCard);
}

const turnCard = () => {
  const divCards = document.getElementsByClassName("cards");
  divCards[0].src = 'assets/imagens/fundo.jpg';
  animationEffects(500, divCards[0], 'flip');
  divCards[1].src = 'assets/imagens/fundo.jpg';
  animationEffects(500, divCards[1], 'flip');

  stausGame.amountCards--;

  if(stausGame.amountCards > 0){
    displaysPlayerCard()
  }else {
    reset(stausGame);
  }
}

const setWaitingTime = (time, callBack, value) =>{
  setTimeout(() => callBack(value), time);
};

const reset = (objPlayers) => {
  cleanScreen();

  objPlayers.player.cards = [];
  objPlayers.player.index = 0;
  objPlayers.player.points = 0;

  objPlayers.pc.cards = [];
  objPlayers.pc.index = 0;
  objPlayers.pc.points = 0;
  initialOptions();
}

const cleanScreen = () => {
  screen.innerText = ''
}

const animationEffects = (time, imgCard, className) => {
  imgCard.classList.add(className);
  setTimeout(() => imgCard.classList.remove(className), time);
}

const changeClassInputAttributes = (clas) =>{
  const divInputs = document.querySelector('.cards-status');
  divInputs.classList[clas]('hidden');
}

initialOptions();
