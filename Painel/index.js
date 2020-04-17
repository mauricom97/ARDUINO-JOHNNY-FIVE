const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--<link rel="stylesheet" href="style.css">--> 
        <!--<script src="script.js"></script>-->
        <title>Painel arduino</title>
    <style>
        body{
        background-color: rgba(255, 255, 255, 0.363);
    }
    .painel{
       width: 253px;
       height: 428px;
       background-color: rgb(0, 0, 0);
       border-radius: 20px;
       bottom: 100px;
       
       
    }
    .ledverde{
        padding: 60px;
        border-radius: 20px;
        background-color: rgba(1, 165, 1, 0.486);
        border-color: rgb(0, 255, 34);
        border-style: double;
    }
    .ledvermelho{
        padding: 60px;
        border-radius: 20px;
        background-color: rgba(255, 0, 0, 0.404);
        border-color: rgb(255, 0, 0);
        border-style: double;
    }
    .ledamarelo{
        padding: 60px;
        border-radius: 20px;
        background-color: rgba(217, 255, 0, 0.507);
        border-color: rgb(255, 251, 0);
        border-style: double;
    }
    .ledazul{
        padding: 60px;
        border-radius: 20px;
        background-color: rgba(17, 0, 255, 0.432);
        border-color: rgb(0, 38, 255);
        border-style: double;
    }
    .ledAleatorio{
        padding: 60px;
        border-radius: 20px;
        background-color: rgb(255, 136, 0);
        border-color: rgb(0, 255, 221);
        border-style: double;
    }
    
    .ledAleatorio2s{
        padding: 60px;
        border-radius: 20px;
        background-color: rgba(247, 0, 255, 0.342);
        border-color: rgb(89, 0, 255);
        border-style: double;
    }
    
    .texto{
        text-align: center;
        font-size: 50px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    .slider-wrapper {
        display: inline-block;
        width: 20px;
        height: 150px;
        padding: 0;
        
      }
    
      .slider-wrapper input {
        width: 250px;
        left: 30px;
        margin: 0;
        transform: rotate(-90deg);
        bottom: 0px;
        
        
      }
    
    </style>
    
    
        <script>
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
    
        </script>
        
    </head>
    <body>
        
        <h1 class="texto">Painel arduino</h1>
    
        
        <div class="painel">
            <input type="button" id="ledverde" class="ledverde" onclick="ledVerde();">
            <input type="button" id="ledazul" class="ledazul" onclick="ledAzul();"><br>
            <input type="button" id="ledvermelho" class="ledvermelho" onclick="ledVermelho();">
            <input type="button" id="ledamarelo" class="ledamarelo" onclick="ledAmarelo();">
            <input type="button" id="ledAleatorio" class="ledAleatorio" onclick="ledAleatorio();">
            <input type="button" id="ledAleatorio2s" class="ledAleatorio2s" onclick="ledAleatorio2s();">
        </div>
        
    </body>
    </html>
    
    `)
})

app.listen(3352, function(){
    console.log("Servidor rodando na url 3352");
});