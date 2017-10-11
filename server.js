// Require the Express Module
var express = require('express');
var path = require('path');

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
   

app.use(bodyParser.urlencoded({ extended: true }));
// Require path
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
require('./server/config/foxes.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});
// GET '/' Displays all of the mongooses.
// GET '/mongooses/:id' Displays information about one mongoose.
// GET '/mongooses/new' Displays a form for making a new mongoose.
// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
// POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
//POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID