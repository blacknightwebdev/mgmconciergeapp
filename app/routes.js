/**
 * Created by bryanknight on 2/17/16.
 */
var path = require('path');

// load the model
var Resource = require('./models/resource');
var Category = require('./models/category');
var SubCategory = require('./models/subcategory');
var User = require('./models/user');

// expose routes to app with module.exports
module.exports = function (app) {
    //api =============================
    // get all categories
    app.get('/api/category', function (req, res) {
        console.log('hit', req.query);

        var name = req.query['name'];
        var subcategories = req.query['subcategories'];

        console.log(name, subcategories);

        //check if subcategory, and resources for category exists and return resources
        if(req.query.subcategories && req.query.name){
            Resource.find(function(err, docs){
                console.log('err',err, 'docs',docs);
                res.json(docs);
            });
            //resource.exec(function(err, docs){
            //    console.log('err',err, 'docs',docs);
            //    res.json(docs);
            //});
            console.log('detected');

        }else{
            // use mongoose to get all categories in the database
            Category.find(function (err, resources) {

                //if there is an error retrieving, send the error.
                if (err) res.status(500).send(err);

                console.log('resources', resources);

                res.json(resources); // return all categories as JSON
            });
        }


    });
    //get all subcategories for category or return all resources for category if not subcategories exist
    app.get('/api/category', function (req, res) {

        // use mongoose to get all categories in the database
        Category.find(function (err, resources) {

            //if there is an error retrieving, send the error.
            if (err) res.send(err);

            res.json(resources); // return all categories as JSON
        });
    });

    // create resource and send back all resources after creation
    app.post('/api/resource', function (req, res) {
        console.log(req.body);
        //create a resource, information comes from AJAX request from Angular
        Resource.create({
            text: req.body.text,
            done:  false
        }, function (err, resource) {

            console.log(err, resource);
            if (err) {res.send(err)}

            // get and return all teh resources after you create another
            Resource.find(function (err, resources) {
                if (err) res.send(err);

                res.json(resources);
            })
        });
    });

    //delete a resource
    app.delete('/api/resource/:resource_id', function (req, res) {
        Resource.remove({
            _id: req.params.resource_id
        }, function (err, resource) {
            if (err) res.send(err);

            //get and return all the resources after delete
            Resource.find(function (err, resources) {
                if (err) res.send(err);

                res.json(resources);
            })
        });
    });

    // application ========================
    app.get('', function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html')); //load the single view file (angular will handle the page changes on the frontend)
    });
};


