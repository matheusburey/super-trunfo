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
  const clickedTarget = event.target
  const clickedTargetId = clickedTarget.id;
  console.log(clickedTarget);
  if (clickedTargetId === "startGame") {
    startGame(clickedTarget);
  }
};

const startGame = clickedTarget => {
  let scoreboard = document.createElement('div');
  let scoreboardText = document.createElement('h2');
  let cardPc = document.createElement('div');
  let cardPlayer = document.createElement('div');
  let imgCardPc = document.createElement('img');
  let imgCardPlayer = document.createElement('img');

  clickedTarget.parentElement.classList.add('hidden');
  scoreboardText.innerHTML = 'Jogador 0 X 0 Maquina'
  scoreboard.classList = 'scoreboard';
  cardPc.classList = 'div-carta';
  cardPlayer.classList = 'div-carta';
  imgCardPc.src = 'assets/imagens/fundo.jpg';
  imgCardPc.classList = 'cartas';
  imgCardPlayer.src = 'assets/imagens/fundo.jpg'
  imgCardPlayer.classList = 'cartas';

  scoreboard.appendChild(scoreboardText)
  cardPc.appendChild(imgCardPc);
  cardPlayer.appendChild(imgCardPlayer);
  screen.appendChild(scoreboard);
  screen.appendChild(cardPlayer);
  screen.appendChild(cardPc);
}
const mostraPlacar = () => {
  var divPlacar = document.createElement("p");
  divPlacar.innerHTML = `<h2>Jogador ${objPlayers.player.pontos} X ${objPlayers.pc.pontos} Maquina</h2>`
}

function sortearCarta() {
  var numCartaMaquina = parseInt(Math.random() * nomeCartas.length)
  let indexObjetoMaquina = nomeCartas[numCartaMaquina]
  cartaMaquina = objetoCartas[indexObjetoMaquina]
  console.log(cartaMaquina.nome)

  var numCartaJogador = parseInt(Math.random() * nomeCartas.length)
  let indexObjetoJogador = nomeCartas[numCartaJogador];
  cartaJogador = objetoCartas[indexObjetoJogador]
  console.log(cartaJogador.nome)

  document.getElementById("btnSortear").disabled = true;

  exibeCartaJogador()
}

function exibeCartaJogador() {
  var divcartaJogador = document.getElementById("carta-jogador")

  divcartaJogador.innerHTML = `<img src="${cartaJogador.img}" id="carta-jogador"> <div id="opcoes" class="carta-status">
  <input type="button" name="atributo" onclick="atributoJogador('ki')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('tecnica')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('velocidade')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('transformacoes')"></div>`
}

function atributoJogador(jogadorAtributoscheck) {
  var vencedor = document.getElementById("quantidade-cartas")
  if (jogadorAtributoscheck == "ki") {
    if (cartaJogador.atributos.ki > cartaMaquina.atributos.ki) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    } else if (cartaJogador.atributos.ki < cartaMaquina.atributos.ki) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  } else if (jogadorAtributoscheck == "tecnica") {
    if (cartaJogador.atributos.tecnicas > cartaMaquina.atributos.tecnicas) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    } else if (cartaJogador.atributos.tecnicas < cartaMaquina.atributos.tecnicas) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  } else if (jogadorAtributoscheck == "velocidade") {
    if (cartaJogador.atributos.velocidade > cartaMaquina.atributos.velocidade) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    } else if (cartaJogador.atributos.velocidade < cartaMaquina.atributos.velocidade) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  } else if (jogadorAtributoscheck == "transformacoes") {
    if (cartaJogador.atributos.transformacoes > cartaMaquina.atributos.transformacoes) {
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    } else if (cartaJogador.atributos.transformacoes < cartaMaquina.atributos.transformacoes) {
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina++;
    } else {
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  }
  mostraPlacar()
  exibeCartaMaquina()
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.innerHTML = `<img src='${cartaMaquina.img}' id="carta-maquina">`

  setTimeout(function () { novaRodada(); }, 3000);
}

const reset = (callback) => {
  screen.innerHTML = ""
  callback()
}

screen.addEventListener("click", functionRoutes)