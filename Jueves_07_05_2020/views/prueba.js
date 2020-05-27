//Inyección de dependencias.
const mongoose = require('mongoose');
const express = require('express');

//Hacemos la conexión.
mongoose.connect('mongodb+srv://JacquelineFlores:Jacqueline119@clusterjacqueline-bnkn2.mongodb.net/test?retryWrites=true&w=majority');

var Schema = mongoose.Schema;

var gameSchema = new Schema({
    id: String,
    nameGame: String,
    platform: String,
    rating: Number,
    genders: String
});

//Model
var game = mongoose.model('game', gameSchema);

var myGame = game({
    id: 1,
    nameGame: "Minecraft",
    platform: "Xbox",
    rating: 4.5,
    genders: "Supervivencia"
});

//Promise.
const promise = new Promise((resolve, reject) => {
    myGame.save((err) => {
        //Mostrar operación fallida y resolver.
        if (err) rejection(`Oh, oh. Error ${err}`);
        else resolve('Todo en orden, crack');
    });
});

//Retornar promesa.
promise.then(data =>
    console.log(data)
).catch(error =>
    console.log(error)
);