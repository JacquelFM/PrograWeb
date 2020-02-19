// Objetos

function Greetr() {
    this.greeting = 'Hello world!!';
    this.greet = () => {
        console.log(this.greeting);
    }
}

// Mayúscula porque es una Class.

module.exports = new Greetr();