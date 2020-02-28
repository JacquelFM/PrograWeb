var util = require('util');

// Creación de la clase Person.
function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

// Creación del método greet para la clase Person.
Person.prototype.greet = function () {
    console.log(`Hello 
    ${this.firstname} 
    ${this.lastname}`);
}

// Creación del método greet para la clase Policeman.
Policeman.prototype.numPoliceman = function () {
    console.log(`Su número es  
    ${this.badgenumber}`);
}

function Policeman() {
    // Aquí ingresamos al constructor de la super clase;
    //      Nota: Sin esto no se va a poder ingresar, 
    //      ya que se debe invocar al constructor de la super clase y no al método.

    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

var officer = new Policeman();

// Mandamos llamar a los métodos.
officer.greet();
officer.numPoliceman();