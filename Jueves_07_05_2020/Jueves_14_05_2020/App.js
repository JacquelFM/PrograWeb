//Inyección de dependencias.
const mongoose = require('mongoose');
const express = require('express');

//Hacemos la conexión.
mongoose.connect('mongodb+srv://admin:admin@beducluster-eiuzk.mongodb.net/test?retryWrites=true&w=majority');

//Mapear algo lógico con algo físico.
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    password: String
});

var user = mongoose.model('User', userSchema);

var myUser = user({
    userName: 'Jacqueline',
    password: "Flores"
});

myUser.save((err) => {
    if (err) {
        console.log('Algo salió mal' + err);
    } else {
        console.log('Todo en orden, crack.');
    }
});