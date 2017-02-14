var bodyParser =require('body-parser');
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/my_items');
var data=  [{item:'Play Cricket'},{item:'Watch Cricket'},{item:'Listen to Music'}];
var Comment = new mongoose.Schema({
  item: { type: String}
});
var MyModel = mongoose.model('items', Comment);
// var itemOne=MyModel({item:'Good Evening'}).save(function(err){
//   if(err) throw err;
//   console.log("item saved.");
// });
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
  app.get('/',function(req,res){
    MyModel.find({},function(err,data){
      if(err) {
        console.log(err);
      }else{
          res.render('todo',{todos:data});
      }
    });

  });
app.get('/todo',function(req,res){
  MyModel.find({},function(err,data){
    if(err) {
      console.log(err);
    }else{
        res.render('todo',{todos:data});
    }
  });

});
app.post('/todo',urlencodedParser,function(req,res){
  console.log(req.body);
  var newItems=MyModel(req.body).save(function(err,data){
    if(err) {
      console.log(err);
    }else{
        res.json(data);
    }
  });

});
app.delete('/todo/:item',function(req,res){
  console.log(req.params.item);
  MyModel.remove({item:req.params.item},function(err,data){
    if(err) {
      console.log(err);
    }else{
        res.json(data);
    }
  })
});
};
