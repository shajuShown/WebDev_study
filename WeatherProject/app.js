const { json } = require("express");
const express = require("express");
const app=express();

const https = require("https");




app.get("/",function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Kozhikode&appid=641f5af9def507247bee8ea3c54a437e&units=metric"
   https.get(url,function(response){
       console.log(response.statusCode);

       response.on("data",function(data){
         const weatherData=JSON.parse(data);
         console.log(weatherData);
         const temp =weatherData.weather[0].description;
         console.log(temp);
       })

   })
    res.send("Server is running");
})








app.listen(3000,function(){
    console.log("Server is running on port  3000");
})