const express = require("express");
const bodyParser = require("body-parser");
const weather = require("openweather-apis");

var app = express();
app.set('view engine', 'html');
// app.set('view engine', 'home');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,resp){
    resp.render('home',{temp:null});
});

app.get('/',function(req,resp){
    weather.setCity(req.body.city);
    weather.setAPPID('2e0d022b85800260a6cfa48516ffcae');
    weather.getAllWeather(function(err,temp){
      console.log(temp);
      resp.render('home',{temp:temp});
    });

});
var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('server running at' + port)
});
