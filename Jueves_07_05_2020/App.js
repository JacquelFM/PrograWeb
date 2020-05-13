//Inyección de dependencias.
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Codificador del URL.
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//Mapeo.
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
    res.send('Thanks');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personJson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser.');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});