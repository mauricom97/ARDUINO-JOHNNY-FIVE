const express = require('express');
const app = express();

   

        
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
    


app.listen(3352, function(){
    console.log("Servidor rodando na url 3352");
});