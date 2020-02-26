var obj = {
    name: 'John Doe',
    greet: function (edad) {
        console.log(`Hello ${this.name }, tienes ${edad} años.`);
    }
}

// Parámetros.
var edad = 18;

obj.greet(edad);

// Método de una función.
// Darle un valor a la función constructura.
// En el resto de LP no se puede aplicar por no son firstClass.

//Lista de argumentos
obj.greet.call({
    name: 'Jane Doe'
}, edad);

// Array de argumentos.
obj.greet.apply({
    name: 'Jane Doe'
}, [edad]);