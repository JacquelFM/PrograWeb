// No agregamos la extensión, primero revisa si está en el directorio y 
// si no lo encuentra lo busca en la extensión.

var Emitter = require('events');

// Magic string: 
//  A string that has some special meaning in our code.
// Nota: lo utilizamos en la siguiente línea para la resolución del 'greet' y el eror de typing.
// Sólo tomamos 'events' porque es la key que necesitamos para acceder al valor que se necesita.

var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, () =>
    console.log('Somewhere, someone said hello.')
);

emtr.on(eventConfig.GREET, () =>
    console.log('A greeting ocurred!')
);

console.log('Hello!');
emtr.emit(eventConfig.GREET);