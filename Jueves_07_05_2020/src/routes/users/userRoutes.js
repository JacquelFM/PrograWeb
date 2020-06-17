const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let user = require('./../../models/userModel');

router.get('/', (req, res) => res.render('index'));
router.get('/insert', (req, res) => res.render('insert'));
router.get('/search', (req, res) => res.render('personData'));

// UsersList -> Inicio
router.get('/usersList', async(req, res) => {
    try {
        let users = await user.find({});
        res.render('home', { users });
    } catch (error) {
        res.send("Oh, oh. Algo salió mal, crack.");
    }
});
// UsersList -> Fin

// Insert -> Inicio
router.post('/insertUser', urlencodedParser, (req, res) => {
    let myUser = user({
        userName: req.body.userName,
        password: req.body.password
    });

    myUser.save()
        .then(res.redirect('/usersList'))
        .catch((err) => res.send("Oh, oh. Algo salió mal, crack."));
});
// Insert -> Fin

// Search -> Inicio
router.post('/person', urlencodedParser, (req, res) => {
    user.find({ userName: req.body.userName })
        .exec()
        .then((data) => {
            if (data.length > 0) res.render('results', { data });
            else res.send('No hay coincidencias para el criterio de búsqueda');
        })
        .catch((err) => res.send("Oh, oh. Algo salió mal, crack."));
});
// Search -> Fin

// Remove -> Inicio
router.post('/remove/:id', (req, res) => {
    user.findByIdAndRemove(req.params.id)
        .exec()
        .then(res.redirect('/usersList'))
        .catch((err) => res.send("Oh, oh. Algo salió mal, crack."));
});
// Remove -> Fin

// Update -> Inicio
router.post('/update/:id', (req, res) => {
    user.find({ _id: req.params.id })
        .exec()
        .then((data) => {
            if (data.length > 0) res.render('update', { data });
            else res.send('No hay coincidencias para el criterio de búsqueda.');
        })
        .catch((err) => res.send("Oh, oh. Algo salió mal, crack."));
});

router.post('/updateOne/:id', urlencodedParser, (req, res) => {
    user.findOneAndUpdate({ _id: req.params.id }, {
            userName: req.body.userName,
            password: req.body.password
        })
        .exec()
        .then(res.redirect('/usersList'))
        .catch((err) => res.send("Oh, oh. Algo salió mal, crack."));
});
// Update -> Fin

module.exports = router;