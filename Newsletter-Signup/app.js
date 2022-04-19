const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function(req,res){

const firstName=req.body.fname;
const lastName=req.body.lname;
const email=req.body.email;

console.log(firstName,lastName,email);

});


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});



app.listen(3000,function(){
    console.log("Server is running on port 3000");

});