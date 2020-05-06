//Inyección de dependencias.
const express = require('express');
const app = express();
const port = 3000;

//Mapeo.
app.use('/assets', express.static(__dirname + '/public')); //Aquí estarán nuestros contenidos estáticos.

//route handler para la ruta raíz
app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>Page Title</title>
        </head>
        <body>
            <h1>My First Heading</h1>nomde
            <p>My first paragraph.</p>
        </body>
    </html>`);
});

//route handler para obtener un dato del querystring
app.get('/person/:idProducto', (req, res) => {

    //console.log(`El id enviado es : ${req.params.idProducto}`)

    res.send(`
    <html>
        <head>
            <title>Page Title</title>
        </head>
        <link href="/assets/style.css" type="text/css" rel="stylesheet">
        <body>
            <h1>El id enviado es : ${req.params.idProducto}</h1>
            <p>My first paragraph.</p>
        </body>
    </html>`);

});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});