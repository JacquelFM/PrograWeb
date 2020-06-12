//Inyección de dependencias.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const app = express();
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

mongoose.connect('mongodb+srv://admin:admin@beducluster-eiuzk.mongodb.net/test?retryWrites=true&w=majority');

app.use('/', routes);
app.use('/assets', express.static(__dirname + '/public')); //Aquí estarán nuestros contenidos estáticos.
app.set('view engine', 'ejs'); // Route handler para la ruta raíz.

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));