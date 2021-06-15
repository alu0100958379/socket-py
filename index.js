var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server,{
  cors: {
    origin: "http://flotas.officialtaxitenerife.com",
    methods: ["GET", "POST"],
    credentials: true
  }
});
var port = process.env.PORT || 8000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({
  extended: true
})); 

// Metiendo io a la app
app.io = io;
// Para que se pueda acceder al io a través de una petición


server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
/*
var app = require('express')();
var server = app.listen(3000);
var io = require('socket.io').listen(server);
var url = require("url");
var fs = require('fs');
var path = require("path");
*/

// "res" no envía nada aún
// "res" no envía nada aún
// "res" no envía nada aún



app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.html');
  console.log('GET /')
  //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
  //var html = fs.readFileSync(__dirname + '/index.html');
  //res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin':'http://localhost'});
  res.send('');
});

app.get('/recibir_llamada', function(req, res){
  console.log("Recibiendo llamada");
  //console.log(req.body.origin);
  io.emit('llamadaRecibida', null);
  res.send('');
});



io.on('connection', (socket) => {
  console.log("Conexion");
  console.log(Object.keys(io.sockets.sockets));
    socket.on('disconnect', () => {
        console.log("Desconexion");
    });
});
