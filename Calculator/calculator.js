//jshint esversion:6

const express= require("express");
const bodyParser =require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));



app.listen(3000,function(){
    console.log("The server has started at port 3000")
});

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});


app.post("/",function(req,res){



    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result = num1+num2;
res.send("The result of the calculationn is "+ result)
});