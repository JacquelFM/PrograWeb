const express = require('express');
const users = require('./users/userRoutes');

const router = express.Router();

router.use('/', users);

module.exports = router;