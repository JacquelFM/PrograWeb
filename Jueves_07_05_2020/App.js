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
    res.render('index');
});

app.get('/insert', (req, res) => {
    res.render('insert');
});

app.get('/search', (req, res) => {
    res.render('personData');
});

app.get('/person/:id', (req, res) => {
    res.render('person', {
        ID: req.params.id,
        Qstr: req.query.Qstr
    });
});

// UsersList -> Inicio
app.get('/usersList', (req, res) => {
    let user = mongoose.model('User', userSchema);

    user.find({}, function(err, users) {
        if (err) {
            res.send("Oh, oh. Algo salió mal, crack.");
        }
        res.render('home', { users });
    });
});
// UsersList -> Fin

// Insert -> Inicio
app.post('/insertUser', urlencodedParser, (req, res) => {
    var user = mongoose.model('User', userSchema);

    var myUser = user({
        userName: req.body.userName,
        password: req.body.password
    });

    myUser.save((err) => {
        if (err) {
            console.log('Oh, oh. Salió algo mal: ' + err);
        } else {
            console.log('Todo en orden, crack.');
        }
    });
});

app.post('/insertJson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser.');
    console.log(req.body.userName);
    console.log(req.body.password);
});
// Insert -> Fin

// Search -> Inicio
app.post('/person', urlencodedParser, (req, res) => {
    var user = mongoose.model('User', userSchema);

    user.find({ userName: req.body.userName }, function(err, data) {
        if (err) console.log('Hubo un error');
        else {
            if (data.length > 0) {
                res.render('results', { data });
            } else {
                res.send('No hay coincidencias para el criterio de búsqueda');
            }
        }
    });
});

app.post('/personJson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser.');
    console.log(req.body.userName);
    console.log(req.body.lastname);
});
// Search -> Fin

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});