//LED-VERDE

botaoVerde = document.getElementById('ledverde')
function ledVerde(){

    var led = document.getElementById('led');

    var five = require("johnny-five");
    var board = new five.Board();
    board.on("ready",);
    var led = new five.Led(13);
    led.blink(500);
}
  



//LED-AZUL
botaoAzul = document.getElementById('ledazul')
function ledAzul(){
    var led = document.getElementById('led');
   alert('O LED AZUL ACENDEU')
    led.style.backgroundColor = 'red'

}

//LED-VERMELHO
botaoVermelho = document.getElementById('ledvermelho')
function ledVermelho(){
   alert('O LED VERMELHO ACENDEU')
   var led = document.getElementById('led');
   led.style.backgroundColor = 'red'




}

//LED-AMARELO
var botaoamarelo = document.getElementById('ledamarelo')
function ledAmarelo(){
    alert('O LED AMARELO ACENDEU')
    var led = document.getElementById('led');
    led.style.backgroundColor = 'red'




}

//LED-ALEATORIO
var botaoAleatorio = document.getElementById('ledAleatorio')
function ledAleatorio(){
    var aleatorio;
    aleatorio = Math.floor(Math.random() * 5);
    if(aleatorio == 0){
        ledVerde();
    }else if(aleatorio == 1){
        ledAzul();
    }else if(aleatorio == 2){
        ledVermelho();
    }else if(aleatorio == 3){
        ledAmarelo();
    }
}

//LED-ALEATORIO-2S
var botaoAleatorio2s = document.getElementById('ledAleatorio2s');
function ledAleatorio2s(){
var doisSegundos = setInterval( ledAleatorio, 100);
}


