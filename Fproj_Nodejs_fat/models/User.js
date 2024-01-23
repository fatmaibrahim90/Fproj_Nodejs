
const mongoose = require('mongoose');

// to make the structure of your collection
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    date: Date,

})


const User = mongoose.model('User', UserSchema);
module.exports = User; //export Variable