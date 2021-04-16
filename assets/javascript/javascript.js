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
  divcartaJogador.style.backgroundImage = `url(${cartaJogador.img})`

  divcartaJogador.innerHTML = `<div id="opcoes" class="carta-status">
  <input type="button" name="atributo" onclick="atributoJogador('ki')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('tecnica')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('velocidade')"><br>
  <input type="button" name="atributo" onclick="atributoJogador('transformacoes')"><br></div>`
}

function atributoJogador(jogadorAtributoscheck){
  if (jogadorAtributoscheck == "ki"){
    if(cartaJogador.atributos.ki > cartaMaquina.atributos.ki){
      console.log('venceu')
    }else if(cartaJogador.atributos.ki < cartaMaquina.atributos.ki){
      console.log('perdeu')
    }else{
      console.log('impatou')
    }
  }else if (jogadorAtributoscheck == "tecnica"){
    if(cartaJogador.atributos.tecnicas > cartaMaquina.atributos.tecnicas){
      console.log('venceu')
    }else if(cartaJogador.atributos.tecnicas < cartaMaquina.atributos.tecnicas){
      console.log('perdeu')
    }else{
      console.log('impatou')
    }
  }else if (jogadorAtributoscheck == "velocidade"){
    if(cartaJogador.atributos.velocidade > cartaMaquina.atributos.velocidade){
      console.log('venceu')
    }else if(cartaJogador.atributos.velocidade < cartaMaquina.atributos.velocidade){
      console.log('perdeu')
    }else{
      console.log('impatou')
    }
  }else if (jogadorAtributoscheck == "transformacoes"){
    if(cartaJogador.atributos.transformacoes > cartaMaquina.atributos.transformacoes){
      console.log('venceu')
    }else if(cartaJogador.atributos.transformacoes < cartaMaquina.atributos.transformacoes){
      console.log('perdeu')
    }else{
      console.log('impatou')
    }
  }

  exibeCartaMaquina()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`
  divCartaMaquina.innerHTML = "<img src=''>"
}