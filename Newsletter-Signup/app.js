const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request")


const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function(req,res){

    const firstName=req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.email;

    const data ={
        members:[
        {
            email_address: email,
            status:"subscribed",
            merge_fields:{
                 FNAME:firstName,
                 LNAME:lastName,
            }

        }
        ]
    };

    const jsonData = JSON.stringify(data);
    console.log(jsonData)

    const url = "https://us14.api.mailchimp.com/3.0/lists/bbb07e82bc";


    const options ={
        method: "POST",
        auth: "ShownShaju2:23a5e9ce6723f0aae3d83b303e270c398-us14"
    }
    const request = https.request(url, options, function(response){

        if (response.statusCode ===200){
            res.send("Successfully subscribed!");
        }
        else{
            res.send("There was an error with signing up, please try again")
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });
        
        request.write(jsonData);
        request.end;

});


app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});



app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");

});



//API KEY
//3a5e9ce6723f0aae3d83b303e270c398-us14

//List Id
//bbb07e82bc