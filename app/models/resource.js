// load mongoose to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Resource', {
    name: String,
    location: String,
    locationUrl: String,
    subcategory: String,
    category: String,
    approved: Boolean,
    url: String,
    img: String,
    doc1: {
        name: String,
        path: String
    },
    doc2: {
        name: String,
        path: String
    },
    club: {
        schedule: {
            day: {
                name: String,
                note: String
            }
        },
        space: String,
        music: String,
        management: String,
        contact: {
            firstName: String,
            lastName: String,
            phone: String,
            altPhone: String,
            email:String
        }
    }
});