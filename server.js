const express = require('express')
const res = require('express/lib/response');
const path = require('path')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

var total = 0

app .use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', (req, res) =>{
    res.render('index.html')
})
app.get("/tela", (req, res) => {
    res.render('tela.html');
});
io.on('connection',function(socket){
    console.log('Socket conectado com o id '+ socket.id)
    socket.on('somar', function(fator){
        total += fator
        console.log('total '+ total)
        socket.broadcast.emit('somado', total)
    })
})
server.listen(3000)