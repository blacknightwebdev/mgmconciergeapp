// load mongoose to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: {
        firstName: String,
        lastName: String
    },
    userName: {type: String, unique: true},
    email: {type:String, unique:true},
    password: String,
    admin: Boolean,
    img: String,
    subcategories: Array
});