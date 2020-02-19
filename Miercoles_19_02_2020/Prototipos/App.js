// -- Prototipos --

// Class.

function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

// Cuando aparece un "prototype" están agregando funcionalidades y propiedades.

Person.prototype.greet = function () {
    console.log(`Hello, ${this.firstname} ${this.lastname}.`);
}

var john = new Person('John', 'Doe');
john.greet();

    // Puede acceder al prototipo porque sigue una persona. Es una clase.

var jane = new Person('Jane', 'Doe');
jane.greet();