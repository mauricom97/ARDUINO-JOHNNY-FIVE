const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.render("painel/painel")

    var five = require("johnny-five");
    var board = new five.Board();

    board.on("ready", function() {
    var led = new five.Led(13);
    led.blink(500);
    });
})
module.exports = router;