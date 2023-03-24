const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const https =require("https");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,resp){
    resp.sendFile(__dirname + "/index.html")
});

app.post("/getJson", function(req,resp){
     console.log(req.body.example);
    console.log(req.body);
    const cityName = req.body.cityName;
    console.log(req.body.cityName);
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName +"&appid=2e0d022b85800260a6cfa48516ffcae0&units=metric";
    https.get(url, function(response){
        response.on("data", function(data){
            const jsondata =JSON.parse(data);
            const temp = jsondata.main.temp;
            const des = jsondata.weather[0].description;
            const icon = jsondata.weather[0].icon;
            const imageurl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
            resp.write(`<h1>The weather in  ${cityName} is ${temp} degree celcius</h1>`);
            resp.write(`<h1>The weather in ${cityName} is ${des}</h1>`);
            resp.write(`<img src=${imageurl}>`);
            resp.send();
        })
    })
})

app.listen(3000);
console.log("your listening to port 3000");