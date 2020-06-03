//Inyección de dependencias.
const mongoose = require('mongoose');
const express = require('express');

//Hacemos la conexión.
mongoose.connect('mongodb+srv://admin:admin@beducluster-eiuzk.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    password: String
});

var user = mongoose.model('User', userSchema);

var myUser = user({
    userName: 'Bob',
    password: "Sponge"
});

myUser.save((err) => {
    if (err) {
        console.log('algo salio mal' + err);
    } else {
        console.log('todo ok');
    }
});