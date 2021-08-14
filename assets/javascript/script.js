const screen = document.getElementById('screen');
const nomeCartas = Object.keys(objetoCartas);
const objPlayers = {
  player: {
    caratas: '',
    pontos: 0
  },
  pc: {
    caratas: '',
    pontos: 0
  }
};

let cartaMaquina = document.createElement('div');
let cartaJogador = document.createElement('div');


const functionRoutes = (event) => {
  const clickedTargetId = event.target.id;
  console.log()
  if (clickedTargetId === "startGame") {
    reset(sortearCarta);
  }
};

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