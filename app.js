//import required modules
var express= require('express');
var todoController = require('./controllers/todoController');
var app = express();
// set up view engine
app.set('view engine','ejs');
// set up the static files
app.use('/assets',express.static('assets'));
//fire the controller
todoController(app);
//add listen port
app.listen(3001);
console.log('The program is running at the given port.');
