const express = require('express');
const bodyParser = require('body-parser');
var http = require('http');


const app = express();



//Declarando puertos a utilizarse
app.set('port', process.env.PORT)
//Carpeta view y visor ejs
app.set('views',__dirname + '/views');
app.set('view_engine', 'ejs');
//Carpeta publica
app.use(express.static('public')); 
//Requiriendo rutas
const routes = require('./routes.js');
//Declarando body parser y sus funciones
app.use(bodyParser.urlencoded({extended:true}));
//Declarando rutas de express
app.use(routes);
//Encendiendo el servidor 
var server = http.createServer(app)
    server.listen(app.get('port'), function () {
      console.log('Servidor encendido en el puerto ' + app.get('port'))
    })


