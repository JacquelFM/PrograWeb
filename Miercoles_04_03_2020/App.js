setTimeout(() => {
    console.log('Hola, Tierra.');
}, 0);

// Esta accede al event loop y hace todo el prcoeso, a pesar de tener "0".

setTimeout(() => {
    console.log('Hola, Marte.');
}, 0);

// Este no tiene de asíncronia, este no lo hace.

console.log('Hola, Júpiter.')