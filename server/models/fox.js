var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var FoxSchema = new mongoose.Schema({
    name: String,
    age: String,
    funfact: String,
   })
   // We are setting this Schema in our Models as 'User'
   var Fox = mongoose.model('Fox', FoxSchema);