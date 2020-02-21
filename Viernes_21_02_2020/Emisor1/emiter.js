// listener o handler: The code that responds to an event.
// Puede haber más de un listener, así que más de una cosa puede ocurrir a la vez.

function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

module.exports = Emitter;