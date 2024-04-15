function draw() {
    background(0); //1 - Desenha o background 
    mostraBolinha(); // 2 - Desenha a bolinha
    movimentaBolinha(); // 3 - Movimenta a Bolinha
    verificaColisaoBorda(); // 4 - Verifica Colisão da bolinha
   
   // 5- Volta para o início da função draw()
  }
  

  //variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}


let esquerdaBolinha = xBolinha - raio;
let superiorBolinha = yBolinha - raio;
let inferiorBolinha = yBolinha + raio;

let direitaRaquete = xRaquete + raqueteComprimento;
let superiorRaquete = yRaquete;
let inferiorRaquete = yRaquete + raqueteAltura;	


function verificaColisaoRaquete() {	
    if (esquerdaBolinha < direitaRaquete
        && superiorBolinha < inferiorRaquete
        && inferiorBolinha > superiorRaquete) {
        velocidadeXBolinha *= -1;
    }
}


function verificaColisaoRaquete() {	
    if (esquerdaBolinha < direitaRaquete  // bolinha alcançou a raquete
        && superiorBolinha < inferiorRaquete  // bolinha não está abaixo da raquete
        && inferiorBolinha > superiorRaquete) {  // bolinha não está acima da raquete
        velocidadeXBolinha *= -1;
    }
}
