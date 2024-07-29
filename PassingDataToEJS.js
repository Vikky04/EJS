//if we get data from database then how we pass data to ejs file.
//file index.js
const express=require("express");

const app=express();

let port=8080;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
        res.render("home.ejs");
        // this response rensdering and it use home.
        //ejs file which is in views folder must to decet
        // that file in views folder always
});

app.get("/rolldice",(req,res)=>{
    let dice=Math.floor(Math.random()*6)+1;// if this comes from database then we send 
    // this value to ejs file with render as second argument which is sending as object key val pair

        res.render("rolldice.ejs",{num : dice});
});

app.listen(port,()=>{
    console.log("hello");
});
// file views folder -> rolldice.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rolldice</title>
</head>
<body>
    <h1>dice give val :
        <%= num %>
    </h1>
    
</body>
</html>
