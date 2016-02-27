// load mongoose to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Category', {
    name: String,
    img: String,
    subcategories: [String]
});