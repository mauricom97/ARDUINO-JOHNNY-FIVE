const express       = require("express")
const handlebars    = require("express-handlebars")
const painel        = require('./routes/painel')
const path          = require("path")

app = express();

app.engine('handlebars', handlebars({defaultlayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "public")))

app.use('/painel', painel)



const port = 3352;
app.listen(port, () =>{
    console.log('Painel do arduino escutando a porta 3352')
})