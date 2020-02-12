// function statement

/*function greet(){
    console.log('hi');
}

greet();*/

let greet = () => {
    console.log('Hi');
}

greet();

// functions are first-class

/*function logGreeting(fn){
    fn();
}

let logGreeting = (fn) => {
    fn();
}

let logGreeting = fn => fn();

logGreeting(greet);

*/

// functions expressions on the fly

let logGreeting = (() => {
    console.log('Hi');
});

logGreeting();