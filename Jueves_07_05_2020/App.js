//Inyección de dependencias.
const express = require('express');
const app = express();
const port = 3000;

//Mapeo.
app.use('/assets', express.static(__dirname + '/public')); //Aquí estarán nuestros contenidos estáticos.
app.set('view engine', 'ejs');

app.get('/person/:id', (req, res) => {
    res.render('index', { ID: req.params.id });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});