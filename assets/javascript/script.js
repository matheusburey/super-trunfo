const screen = document.getElementById('screen');
const nameCards = Object.keys(objetoCartas);
const objPlayers = {
  player: {
    cards: '',
    points: 0
  },
  pc: {
    cards: '',
    points: 0
  }
};

const functionRoutes = (event) => {
  const clickedTarget = event.target;
  const clickedTargetId = clickedTarget.id;
  
  if (clickedTargetId === "startGame") {
    startGame(clickedTarget);
  };
  if(clickedTarget.name === "atributo"){
    console.log(clickedTargetId);
    playerAttribute(clickedTargetId);
  }
};

const startGame = clickedTarget => {
  const scoreboard = document.createElement('div');
  const scoreboardText = document.createElement('h2');
  const winner = document.createElement('di');
  const cardPc = document.createElement('div');
  const cardPlayer = document.createElement('div');
  const imgCardPc = document.createElement('img');
  const imgCardPlayer = document.createElement('img');

  clickedTarget.parentElement.classList.add('hidden');
  scoreboardText.innerHTML = 'Jogador 0 X 0 Maquina';
  scoreboard.classList = 'scoreboard';
  winner.className = 'winner'
  cardPc.classList = 'div-cards';
  cardPc.id = 'card-pc'
  cardPlayer.classList = 'div-cards';
  cardPlayer.id = 'card-player'
  imgCardPc.src = 'assets/imagens/fundo.jpg';
  imgCardPc.classList = 'cards';
  imgCardPlayer.src = 'assets/imagens/fundo.jpg';
  imgCardPlayer.classList = 'cards';

  scoreboard.appendChild(scoreboardText);
  scoreboard.appendChild(winner);
  cardPc.appendChild(imgCardPc);
  cardPlayer.appendChild(imgCardPlayer);
  screen.appendChild(scoreboard);
  screen.appendChild(cardPlayer);
  screen.appendChild(cardPc);

  sortearCarta();
};

const showScore = () => {
  const scoreboard = document.querySelector(".scoreboard h2");
  scoreboard.innerText = `Jogador ${objPlayers.player.points} X ${objPlayers.pc.points} Maquina`
};

const sortearCarta = () => {
  var numCartaMaquina = parseInt(Math.random() * nameCards.length)
  let indexObjetoMaquina = nameCards[numCartaMaquina]
  cartaMaquina = objetoCartas[indexObjetoMaquina]
  console.log(cartaMaquina.nome)

  var numCartaJogador = parseInt(Math.random() * nameCards.length)
  let indexObjetoJogador = nameCards[numCartaJogador];
  cardPlayer = objetoCartas[indexObjetoJogador]
  console.log(cardPlayer.nome)

  displaysPlayerCard();
}

function displaysPlayerCard() {
  const attributesValue = ['ki', "tecnica", "velocidade", "transformacoes"];
  const divCardPlayer = document.querySelector("#card-player")
  const imgCardPlayer = document.querySelector("#card-player .cards");
  const divInputs = document.createElement('div');
  for(let i = 0; i < 4; i++){
    const input = document.createElement('input');
    input.type = 'button';
    input.name = 'atributo';
    input.id = attributesValue[i]

    divInputs.appendChild(input);
  }

  imgCardPlayer.src = cardPlayer.img;
  divInputs.classList = "cards-status";
  divCardPlayer.appendChild(divInputs);
}

function playerAttribute(selectedAttribute) {
  const vencedor = document.querySelector(".winner")
  const playerSelectedAttribute = cardPlayer.atributos[selectedAttribute];
  const pcSelectedAttribute = cartaMaquina.atributos[selectedAttribute];

  if (playerSelectedAttribute > pcSelectedAttribute) {
    vencedor.innerHTML = "<h2>Venceu</h2>"
    objPlayers.player.points++;
  } else if (playerSelectedAttribute < pcSelectedAttribute) {
    vencedor.innerHTML = "<h2>Perdeu</h2>"
    objPlayers.pc.points++;
  } else {
    vencedor.innerHTML = "<h2>Empate</h2>"
  }

  showScore();
  exibeCartaMaquina();
}

function exibeCartaMaquina() {
  const divCards = document.getElementsByClassName("cards");
  divCards[1].src = cartaMaquina.img;

  setWaitingTime(4000,reset);
}

const setWaitingTime = (time, callBack) =>{
  setTimeout(function () { callBack(); }, time);
};

const reset = () => {
  const divCards = document.getElementsByClassName("cards");
  divCards[0].src = 'assets/imagens/fundo.jpg';
  divCards[1].src = 'assets/imagens/fundo.jpg';
  sortearCarta();
}

screen.addEventListener("click", functionRoutes);