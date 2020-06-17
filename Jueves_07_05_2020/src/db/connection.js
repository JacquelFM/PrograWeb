const mongoose = require('mongoose');

let url = 'mongodb+srv://admin:admin@beducluster-eiuzk.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(function(db) { // <- db as first argument
        console.log('Conectado, crack.');
    })
    .catch(function(err) {
        console.log('Oh, oh. Algo salió mal, crack.');
    });