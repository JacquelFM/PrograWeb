// Emisor de evento prácticamente.
//      Inyección de dependencia http y fs.
var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    //      Escribiendo los headers del paquete, viene el status 200 code ahí.
    //      Contesta un 200.
    //      El contenido va a ser texto plano.
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var html = fs.readFileSync(__dirname + '/index.html');
    res.end(html);

}).listen(1337, '127.0.0.1');