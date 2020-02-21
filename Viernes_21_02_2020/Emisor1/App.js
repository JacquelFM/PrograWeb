var Emitter = require('./emiter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!');

// Ejecuta los dos 'greet' por el tipo al que corresponden.
emtr.emit('greet');