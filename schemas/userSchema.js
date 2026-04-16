const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fullName: { type: String , required: true },
    email: {type: String , required: true , unique: true , validate: {
        validator: validator.isEmail,
        message: "Email must be formatted correctly!!"
    }},
    password: {type: String , required: true},
    role: {type: String , required: true , enum:["user" , "admin"]},
    token: {type: String}
});

module.exports = mongoose.model('User', userSchema);