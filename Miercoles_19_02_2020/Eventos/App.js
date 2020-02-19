// -- Eventos --

// Object properties and methods.

var obj = {
    greet: 'Hello',
    event: function () {
        console.log("How are you?");
    },
    eventWithArrowFunction: () => {
        console.log('Hello world!');
    }
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// Ejecutar función de una key de un objeto.

// Function Normal.

var eventFunction = 'event';
obj[eventFunction]();

// Arrow Function.

var arrow = 'eventWithArrowFunction';
obj[arrow]();

// Function and arrays.

var arr = [];

arr.push(function () {
    console.log('Hello Venus!');
});

arr.push(() => {
    console.log('Hello Jupiter!');
});

arr.push(() =>
    console.log('Hello Earth!')
);

arr.forEach((item) =>
    item()
);
