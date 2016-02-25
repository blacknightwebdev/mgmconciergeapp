// load mongoose to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Subcategory', {
    name: String,
    category: String,
    resources: Array
});