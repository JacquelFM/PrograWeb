//Inyección de dependencias.
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

//Hacemos la conexión.
mongoose.connect('mongodb+srv://JacquelineFlores:Jacqueline119@clusterjacqueline-bnkn2.mongodb.net/test?retryWrites=true&w=majority');

//Mapear algo lógico con algo físico.
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    id: String,
    nameGame: String,
    platform: String,
    rating: Number,
    genders: String
});

app.get('/game', (req, res) => {
    var game = mongoose.model('game', gameSchema);

    game.find({ nameGame: 'Minecraft' }, function(err, data) {
        // doc is a Document
        if (err) {
            console.log('Lo sentimos. Ocurrió un error.');
        } else {
            // res.send(data);
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});

//Busca todos
/*
user.find({ userName: 'Oscar' }, function(err, data) {
    // doc is a Document
    if (err) {
        console.log('Lo sentimos. Ocurrió un error.');

    } else {
        // res.send(data);
        console.log(data);
    }
});*/

/*
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
});*/