const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const app = express();
//Carpeta view y visor ejs
app.set('views',__dirname + '/views');
app.set('view_engine', 'ejs');

//Carpeta publica
app.use(express.static(__dirname + "public"));

const node_modules = path.join(__dirname, 'node_modules');
app.use(express.static("public"));
app.use(express.static(node_modules));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Requiriendo rutas
const routes = require('./routes/routes');
//Declarando body parser y sus funciones
app.use(bodyParser.urlencoded({extended:true}));
//Declarando rutas de express
app.use(routes);



//Declarando puertos a utilizarse
app.set('port', process.env.PORT || 3000)
//Encendiendo el servidor 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
