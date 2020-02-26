var person = {
    firstname: '',
    lastname: '',
    greet: function () {
        return `${this.firstname} ${this.lastname}`;
    }
}

// Formas de crear objetos:
//      obj = {};
//      obj = new Person();
//      obj = Object.create(); -> Con object literals {};

// Forma diferente de crear objetos con object literal.

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

// Cada quien tiene su espacio de memoria.

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());