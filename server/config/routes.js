var animals = require('../controllers/animals.js');
module.exports = function(app) {
    
    


app.get('/', function(req, res) {  
animals.show(req,res)   
 })
app.get('/foxes/:id', function(req, res){
    animals.showsingle(req, res)
  })
  
app.get('/new', function(req, res){
 animals.getnew(req, res)
})
// Add User Request 
app.post('/foxes', function(req, res) {
 animals.add(req, res)
})
app.get('/foxes/edit/:id', function(req,res){
animals.edit(req, res)
})
app.post('/foxes/update/:id', function(req,res){
 animals.update(req, res)
    })

app.post('/foxes/destroy/:id', function(req, res){
 animals.destroy(req, res)
})
}