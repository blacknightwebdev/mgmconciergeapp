// load mongoose to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: {
        firstName: String,
        lastName: String
    },
    userName: String,
    email: String,
    password: String,
    admin: Boolean,
    img: String,
    subcategories: Array
});