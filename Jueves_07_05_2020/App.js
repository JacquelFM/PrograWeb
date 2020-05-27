//Inyección de dependencias.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

mongoose.connect('mongodb+srv://admin:admin@beducluster-eiuzk.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: String,
    password: String
});

app.use('/assets', express.static(__dirname + '/public')); //Aquí estarán nuestros contenidos estáticos.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('personData');
});

app.get('/person/:id', (req, res) => {
    res.render('person', {
        ID: req.params.id,
        Qstr: req.query.Qstr
    });
});

app.post('/person', urlencodedParser, (req, res) => {
    var user = mongoose.model('User', userSchema);

    user.find({ userName: req.body.userName }, function(err, data) {
        if (err) console.log('Hubo un error');
        else {
            if (data.length > 0) res.render('results', { data });
            else res.send('No hay coincidencias para el criterio de búsqueda');
        }
    });
});

/*
app.post('/person', urlencodedParser, (req, res) => {
    // res.send('Thanks');
    console.log(req.body.userName);
    // console.log(req.body.lastname);
    //Aquí empieza la busqueda
    var user = mongoose.model('User', userSchema);

    user.find({ userName: req.body.userName }, function (err, data) {
        // doc is a Document
        if (err) {
            console.log('Hubo un error');
        } else {
            if (data.length > 0) {
                // console.log(data);
                res.render('results', { data });
                //res.send(data);
                // console.log(doc);
            } else { res.send('no hay coincidencias para el criterio de busqueda'); }
        }
    });
});
*/
/*
app.get('/person', (req, res) => {
    var user = mongoose.model('User', userSchema);

    user.find({ userName: req.body.userName }, function(err, data) {
        if (err) {
            console.log('Lo sentimos. Ocurrió un error.');
        } else {
            res.send(data);
        }
    });
});
*/

app.post('/personJson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser.');
    console.log(req.body.userName);
    console.log(req.body.lastname);
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});