const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname+'/painel.html')
})

app.get('/', function(req, res){
    res.sendFile(__dirname+'/script.js')
})

app.get('/', function(req, res){
    res.sendFile(__dirname+'/style.css')
})

app.listen(3352, function(){
    console.log("Servidor rodando na url 3352");
});