// Refactor:
//      A feature that only changes how you type something, 
//      but nothing changes under hood.

// Modo estricto.
'use strict';

var EventEmitter = require('events');

// Útil es un módulo nativo de JS.
//      Nos permite combinar la funcionalidad de dos objetos.
var util = require('util');

// Declaración de la clase Greetr que extiende de emitter.
class Greetr extends EventEmitter {
    constructor() {
        // Mandar llamar al constructor de la super clase.
        super();
        this.greeting = 'Hello world!';
    }

    // Función miembro.
    greet(data) {
        console.log(`${this.greeting}: ${data}`);

        // Emit -> Disparar el comportamiento.
        this.emit('greet', data);
    }
}

let data = 'Corona!';
var greeter1 = new Greetr();

// On -> Para ponerle comportamientos adentro o sacar eventos. 
//      Puedo pasarle parámetros.
greeter1.on('greet', function (data) {
    console.log(`Some greeted!: ${data}`);
});

greeter1.greet(data);