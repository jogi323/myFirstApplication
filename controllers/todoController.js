var bodyParser =require('body-parser');
var mongoose =require('mongoose');
var data=  [{item:'Play Cricket'},{item:'Watch Cricket'},{item:'Listen to Music'}];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
  app.get('/',function(req,res){
    res.render('todo',{todos:data});
  });
app.get('/todo',function(req,res){
  res.render('todo',{todos:data});
});
app.post('/todo',urlencodedParser,function(req,res){
  data.push(req.body);
  res.json(data);
});
app.delete('/todo/:item',function(req,res){
  for (var i=0;i<data.length;i++){
       if(data[i].item.replace(/ /g, "") == req.params.item.replace(/ /g, "")){
           data.splice(i,1);
       };

    };
  res.json(data);
});
};
