const express =require("express");
const app=express();




app.get("/", function(req,res){
    res.send("Working");
})




app.listen(3000,function(){
    console.log("Server is started on port 3000.")
})