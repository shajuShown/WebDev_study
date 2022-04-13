const express =require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
    var h=Number(req.body.height);
    var w=Number(req.body.weight);
    var h2=h*h;
    
    var n=(w/h2);
    n=n.toFixed(2);
    res.send("Your BMI is" +n );
});

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html")
})




app.listen(3000,function(){
    console.log("Server is started on port 3000.")
})