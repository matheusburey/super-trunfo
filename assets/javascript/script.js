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
    console.log(clickedTarget);
    atributoJogador(clickedTargetId);
  }
};

const startGame = clickedTarget => {
  let scoreboard = document.createElement('div');
  let scoreboardText = document.createElement('h2');
  let winner = document.createElement('di');
  let cardPc = document.createElement('div');
  let cardPlayer = document.createElement('div');
  let imgCardPc = document.createElement('img');
  let imgCardPlayer = document.createElement('img');

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

const mostraPlacar = () => {
  let scoreboard = document.querySelector(".scoreboard h2");
  scoreboard.innerText = `Jogador ${objPlayers.player.points} X ${objPlayers.pc.points} Maquina`
};

const sortearCarta = () => {
  var numCartaMaquina = parseInt(Math.random() * nameCards.length)
  let indexObjetoMaquina = nameCards[numCartaMaquina]
  cartaMaquina = objetoCartas[indexObjetoMaquina]
  console.log(cartaMaquina.nome)

  var numCartaJogador = parseInt(Math.random() * nameCards.length)
  let indexObjetoJogador = nameCards[numCartaJogador];
  cartaJogador = objetoCartas[indexObjetoJogador]
  console.log(cartaJogador.nome)

  //document.getElementById("btnSortear").disabled = true;

  exibeCartaJogador();
}

function exibeCartaJogador() {
  var divcartaJogador = document.getElementById("card-player")

  divcartaJogador.innerHTML = `
  <img src="${cartaJogador.img}" class="cards">
  <div id="opcoes" class="carta-status">
    <input type="button" name="atributo" id="ki"><br>
    <input type="button" name="atributo" id="tecnica"><br>
    <input type="button" name="atributo" id="velocidade"><br>
    <input type="button" name="atributo" id="transformacoes">
  </div>`
}

function atributoJogador(jogadorAtributoscheck) {
  var vencedor = document.querySelector(".winner")
  if (jogadorAtributoscheck == "ki") {
    if (cartaJogador.atributos.ki > cartaMaquina.atributos.ki) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      objPlayers.player.points++;
    } else if (cartaJogador.atributos.ki < cartaMaquina.atributos.ki) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      objPlayers.pc.points++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  } else if (jogadorAtributoscheck == "tecnica") {
    if (cartaJogador.atributos.tecnicas > cartaMaquina.atributos.tecnicas) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      objPlayers.player.points++;
    } else if (cartaJogador.atributos.tecnicas < cartaMaquina.atributos.tecnicas) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      objPlayers.pc.points++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  } else if (jogadorAtributoscheck == "velocidade") {
    if (cartaJogador.atributos.velocidade > cartaMaquina.atributos.velocidade) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      objPlayers.player.points++;
    } else if (cartaJogador.atributos.velocidade < cartaMaquina.atributos.velocidade) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      objPlayers.pc.points++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  } else if (jogadorAtributoscheck == "transformacoes") {
    if (cartaJogador.atributos.transformacoes > cartaMaquina.atributos.transformacoes) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      objPlayers.player.points++;
    } else if (cartaJogador.atributos.transformacoes < cartaMaquina.atributos.transformacoes) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      objPlayers.pc.points++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  }
  mostraPlacar()
  exibeCartaMaquina()
}

function exibeCartaMaquina() {
  let divCards = document.getElementsByClassName("cards");
  divCards[1].src = cartaMaquina.img

  setWaitingTime(3000,reset);
}

const setWaitingTime = (time, callBack) =>{
  setTimeout(function () { callBack(); }, time);
};

const reset = () => {
  let divCards = document.getElementsByClassName("cards");
  divCards[0].src = 'assets/imagens/fundo.jpg';
  divCards[1].src = 'assets/imagens/fundo.jpg';
  sortearCarta()
}

screen.addEventListener("click", functionRoutes);