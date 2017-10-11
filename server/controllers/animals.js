var mongoose = require('mongoose');
   // We are setting this Schema in our Models as 'User'
   var Fox = mongoose.model('Fox') // We are retrieving this Schema from our Models, named 'User'
   module.exports = {
    show: function(req, res){
        Fox.find({}, function(err, results){       
             console.log("foxes")

        res.render('index', {foxes: results})
})
},
    showsingle: function(req, res){
    Fox.find({ _id: req.params.id }, function(err, results) {
      res.render('show', { foxes: results });
    })
  },
  
getnew:function(req, res){
        Fox.find({}, function(err, results){    
      
  res.render('new')
    })
},
// Add User Request 
add: function(req, res){
   console.log("POST DATA", req.body);
    Fox.create(req.body, function(err, results){
        if(err) { console.log(err); }

    // This is where we would add the user from req.body to the database.
    res.redirect('/');
})
},
edit: function( req, res) {
    Fox.find({_id:req.params.id}, function(err, results){
if(err){console.log(err)}
res.render('edit',{ foxes:results[0]})
})
},
update: function(req, res){

  Fox.update({ _id: req.params.id }, req.body, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
    })
    },

destroy: function(req, res){
        console.log('die');
    Fox.remove({_id:req.params.id}, function(req, err){
        if(err){console.log(err);}
        res.redirect('/')
    })
}
   }