
       //LED-VERDE
    
       botaoVerde = document.getElementById('ledverde')
       function ledVerde(){
           alert("O LED VERDE ACENDEU")
           var led = document.getElementById('led');
           var five = require("johnny-five");
           var board = new five.Board();
           
           board.on("ready", function() {
             var led = new five.Led(2);
             led.blink(500);
           });

       }
       



       //LED-AZUL
       botaoAzul = document.getElementById('ledazul')
       function ledAzul(){
            var led = document.getElementById('led');
            alert('O LED AZUL ACENDEU')
            led.style.backgroundColor = 'red'

            const { Board, Led } = require("johnny-five");
            const board = new Board();

            board.on("ready", () => {
            // Create a standard `led` component
            // on a valid pwm pin
            const led = new Led(11);

            led.pulse();

            // Stop and turn off the led pulse loop after
            // 10 seconds (shown in ms)
            board.wait(10000, () => {

                // stop() terminates the interval
                // off() shuts the led off
                led.stop().off();
                });
            });
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

       function expVerde(){
        var funcionalidade = document.getElementById('funcionalidade')
        funcionalidade.innerHTML = 'O BOTÃO VERDE ACIONA O LED ALTERNAR DE 5 EM 5 SEGUNDOS'
       }

       function expAzul(){
        var funcionalidade = document.getElementById('funcionalidade')
        funcionalidade.innerHTML = 'PULSO DE LED QUE APAGA E ACENDE O LED REPETIDAMENTE'
       }

       function expVermelho(){
        var funcionalidade = document.getElementById('funcionalidade')
        funcionalidade.innerHTML = 'O BOTÃO VERMELHO'
       }

       function expAmarelo(){
        var funcionalidade = document.getElementById('funcionalidade')
        funcionalidade.innerHTML = 'O BOTÃO AMARELO'
       }

       function expLaranja(){
        var funcionalidade = document.getElementById('funcionalidade')
        funcionalidade.innerHTML = 'O BOTÃO LARANJA'
       }

       function expRosa(){
        var funcionalidade = document.getElementById('funcionalidade')
        funcionalidade.innerHTML = 'O BOTÃO ROSA'
       }
       
       function fora(){
        var funcionalidade = document.getElementById('funcionalidade')
        funcionalidade.innerHTML = `MANIPULANDO LED COM JOHNNY-FIVE`
       }

       var funcionalidade = document.getElementById('funcionalidade')
       funcionalidade.innerHTML = `MANIPULANDO LED COM JOHNNY-FIVE`