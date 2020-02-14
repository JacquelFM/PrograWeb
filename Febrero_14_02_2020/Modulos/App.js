// -> Funciones
// Es un función sencilla, la ejecutas con "()".

var greet = require('./Greet');
greet();

// -> Método
// Se accede a él por medio de ".".

var greet2 = require('./Greet2').greet;
greet2();

// -> Objeto
// Acceso al greet por medio de ".", 
// porque es una instancia de objeto.

var greet3 = require('./Greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// La referencia física, va a tener acceso a él. 
// Si modifico antes se va a afectar todo lo demás.

var greet3b = require('./Greet3');
greet3b.greet();

// -> Constructor
// Se necesita instanciarse.

var Greet4 = require('./Greet4');
var grtr = new Greet4();
grtr.greet();