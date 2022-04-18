//jshint esversion:6
const express = require("express");

const app=express();

app.get("/", function(request,response){
response.send("<h1>Hello,world!</h1>");
});

app.get("/about",function(req,res){
    res.send("I am Shown Shaju . trying to learn Full Stack Web Development ")

})

app.listen(3000,function(){
    console.log("Server started on port 3000")
});
