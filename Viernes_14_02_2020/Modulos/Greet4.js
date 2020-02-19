// Constructor

function Greetr() {
    this.greeting = 'Hello world!!';
    this.greet = () => {
        console.log(this.greeting);
    }
}

// Lo colocas así y ya el resto se debe de encargar del resto.

module.exports = Greetr;