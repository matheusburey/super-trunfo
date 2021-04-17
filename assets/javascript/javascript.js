var vegeta = {
    nome: "Vegeta",
    atributos: {
      ki: 8500,
      tecnicas: 8200,
      velocidade: 58,
      transformacoes: 5
    },
    img:"https://cdna.artstation.com/p/assets/images/images/019/993/052/large/eduardo-medeiros-prancheta-3.jpg?1565888013"
}; 
var goku = {
    nome: "Son-goku",
    atributos: {
      ki: 8700,
      tecnicas: 8500,
      velocidade: 85,
      transformacoes: 7
    },
    img:"https://cdnb.artstation.com/p/assets/images/images/019/993/047/large/eduardo-medeiros-prancheta-1.jpg?1565888009"
}; 
var gohan = {
    nome: "Gohan",
    atributos: {
      ki: 7800,
      tecnicas: 7100,
      velocidade: 80,
      transformacoes: 3
    },
    img:"https://cdna.artstation.com/p/assets/images/images/019/993/056/large/eduardo-medeiros-prancheta-5.jpg?1565888021"
}; 
var broly = {
    nome: "Broly",
    atributos: {
      ki: 9000,
      tecnicas: 7500,
      velocidade: 78,
      transformacoes: 3
    },
    img: "https://cdnb.artstation.com/p/assets/images/images/019/993/055/large/eduardo-medeiros-prancheta-4.jpg?1565888017"
}; 
var trunks = {
    nome: "Mirai Trunks",
    atributos: {
        ki: 8100,
        tecnicas: 8300,
        velocidade: 77,
        transformacoes: 3
    },
    img:"https://cdnb.artstation.com/p/assets/images/images/019/993/057/large/eduardo-medeiros-prancheta-6.jpg?1565888025"
}; 
var piccolo = {
    nome: "Piccolo",
    atributos: {
      ki: 7000,
      tecnicas: 7200,
      velocidade: 65,
      transformacoes: 1
    },
    img:"https://cdna.artstation.com/p/assets/images/images/019/993/046/large/eduardo-medeiros-prancheta-7.jpg?1565888007"
};

var cartas = [vegeta, goku, gohan, broly, piccolo, trunks];
var cartaMaquina;
var cartaJogador;
var pontosJogador = 0;
var pontosMaquina = 0;

mostraPlacar()

function mostraPlacar(){
  var divPlacar = document.getElementById("placar")
  divPlacar.innerHTML = `<h2>Jogador ${pontosJogador} X ${pontosMaquina} Maquina</h2>`
}
function sortearCarta(){
  var numCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numCartaMaquina]
  console.log(cartaMaquina.nome)

  var numCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numCartaJogador]
  console.log(cartaJogador.nome)

  document.getElementById("btnSortear").disabled = true;

  exibeCartaJogador()
}

function exibeCartaJogador(){
  var divcartaJogador = document.getElementById("carta-jogador")

  divcartaJogador.innerHTML = `<img src="${cartaJogador.img}" id="carta-jogador"> <div id="opcoes" class="carta-status">
  <input type="button" name="atributo" onclick="atributoJogador('ki')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('tecnica')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('velocidade')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('transformacoes')"></div>`
}

function atributoJogador(jogadorAtributoscheck){
  var vencedor = document.getElementById("quantidade-cartas")
  if (jogadorAtributoscheck == "ki"){
    if(cartaJogador.atributos.ki > cartaMaquina.atributos.ki){
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    }else if(cartaJogador.atributos.ki < cartaMaquina.atributos.ki){
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina ++;
    }else{
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  }else if (jogadorAtributoscheck == "tecnica"){
    if(cartaJogador.atributos.tecnicas > cartaMaquina.atributos.tecnicas){
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    }else if(cartaJogador.atributos.tecnicas < cartaMaquina.atributos.tecnicas){
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina ++;
    }else{
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  }else if (jogadorAtributoscheck == "velocidade"){
    if(cartaJogador.atributos.velocidade > cartaMaquina.atributos.velocidade){
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    }else if(cartaJogador.atributos.velocidade < cartaMaquina.atributos.velocidade){
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina ++;
    }else{
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  }else if (jogadorAtributoscheck == "transformacoes"){
    if(cartaJogador.atributos.transformacoes > cartaMaquina.atributos.transformacoes){
      vencedor.innerHTML = "<h2>Venceu</h2>"
      pontosJogador++;
    }else if(cartaJogador.atributos.transformacoes < cartaMaquina.atributos.transformacoes){
      vencedor.innerHTML = "<h2>Perdeu</h2>"
      pontosMaquina ++;
    }else{
      vencedor.innerHTML = "<h2>Empate</h2>"
    }
  }
  mostraPlacar()
  exibeCartaMaquina()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.innerHTML = `<img src='${cartaMaquina.img}' id="carta-maquina">`

  setTimeout(function(){ novaRodada(); }, 3000);
}

function novaRodada(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.innerHTML = `<img src='https://cdnb.artstation.com/p/assets/images/images/019/993/153/large/eduardo-medeiros-verso-card.jpg?1565888227' id="carta-maquina">`
  sortearCarta()
}