const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// let user = require('./../../models/userModel');

//Desestructuración de objeto
const { index, insert, newUser, search, findUser, deleteUser, update, updateUser } = require('../../controllers/user');
const { urlencoded } = require('body-parser');

router.get('/', index);
router.get('/insert', insert);
router.get('/search', search);

router.post('/newUser', urlencodedParser, newUser);
router.post('/findUser', urlencodedParser, findUser);
router.post('/deleteUser/:id', deleteUser);
router.post('/update/:id', update);
router.post('/updateUser/:id', urlencodedParser, updateUser);

module.exports = router;