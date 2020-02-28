// Modo estricto.
'use strict';

// Declaramos la super clase.
class Person {
    constructor() {
        this.firstname = 'John';
        this.lastname = 'Doe';
    }

    // Función miembro.
    greet() {
        console.log(`Hello 
        ${this.firstname} 
        ${this.lastname}`);
    }
}

// Declaración de la clase Policeman que extiende de Person.
class Policeman extends Person {
    constructor() {
        // Mandar llamar al constructor de la super clase.
        super();
        this.badgenumber = '1234';
    }

    // Función miembro.
    badgeNumber() {
        console.log(`Su número es  
        ${this.badgenumber}`);
    }
}

// Creamos un nuevo Policeman.
let officer = new Policeman();

// Mandamos llamar a las funciones.
officer.greet();
officer.badgeNumber();