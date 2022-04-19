const { json } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const app=express();

const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req, res){

res.sendFile(__dirname+"/index.html");

   
});
app.post("/",function(req,res){
    
    console.log("post recived");


    
const query = req.body.cityName;
const apiKey="641f5af9def507247bee8ea3c54a437e";
const unit="metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+ unit;
    https.get(url,function(response){
        console.log(response.statusCode);

       response.on("data",function(data){
        const weatherData=JSON.parse(data);
        console.log(weatherData);
        const temp =weatherData.main.temp;
        const city =weatherData.name;
        const desc=weatherData.weather[0].description;
        const icon=weatherData.weather[0].icon;
        const imageUrl= "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        console.log(temp);
        console.log(city);
        console.log(desc);
        res.write("<p></p> The weather sescription is "+desc+"</p>");
        res.write("<h1> The temperature in "+city+ " is "+temp+" Degree celcius </h1>")
        res.write("<img src="+imageUrl+">");
        res.send();
        });
      });
   });








app.listen(3000,function(){
    console.log("Server is running on port  3000");
})