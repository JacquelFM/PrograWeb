const user = require('./../models/userModel');

module.exports = {
    index: async(req, res) => {
        try {
            let users = await user.find({});
            res.render('home', { users });
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    },
    insert: async(req, res) => {
        try {
            let users = await user.find({});
            res.render('insert', { users });
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    },
    newUser: async(req, res) => {
        try {
            let newUser = user({
                userName: req.body.userName,
                password: req.body.password
            });

            let myUser = await newUser.save({});
            res.redirect('/');
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    },
    search: async(req, res) => {
        try {
            let users = await user.find({});
            res.render('personData', { users });
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    },
    findUser: async(req, res) => {
        try {
            let data = await user.find({ userName: req.body.userName });
            if (data.length > 0) res.render('results', { data });
            else res.send('No hay coincidencias para el criterio de búsqueda');
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    },
    deleteUser: async(req, res) => {
        try {
            let users = await user.findByIdAndRemove(req.params.id);
            res.redirect('/');
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    },
    update: async(req, res) => {
        try {
            let data = await user.find({ _id: req.params.id });
            if (data.length > 0) res.render('update', { data });
            else res.send('No hay coincidencias para el criterio de búsqueda.');
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    },
    updateUser: async(req, res) => {
        try {
            let users = await user.findOneAndUpdate({ _id: req.params.id }, {
                userName: req.body.userName,
                password: req.body.password
            });
            res.redirect('/');
        } catch (error) {
            res.send('Oh, oh. Algo salió mal, crack.');
        }
    }
}