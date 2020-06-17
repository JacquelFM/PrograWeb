const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);