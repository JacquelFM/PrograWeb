var EventEmitter = require('events');

// Útil es un módulo nativo de JS.
//      Nos permite combinar la funcionalidad de dos objetos.
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

// Herencia.
//      Greetr quiero que sea un emisor de eventos, tenga todo el comportamiento de EventEmitter.
util.inherits(Greetr, EventEmitter);

// En el prorotype no importaen donde está, igual lo hace.
Greetr.prototype.greet = function () {
    console.log(this.greeting);

    // Emit -> Disparar el comportameinto.
    this.emit('greet');
}

var greeter1 = new Greetr();

// On -> Para ponerle comportamientos adentro o sacar eventos. 
//      Puedo pasarle parámetros.
greeter1.on('greet', function () {
    console.log('Someone greeted!: ');
});

greeter1.greet();