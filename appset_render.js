const express=require("express");

const app=express();

let port=8080;

app.set("view engine","ejs");
// view engine (template engine) set as ejs use for template

// app.get("/",(req,res)=>{
//     res.send("this is root");
// });

//generally we use ejs help to not send responses 
//it help to render the responses.

// app.get("/",(req,res)=>{
//     res.render("ejsfile");
// });
app.get("/",(req,res)=>{
        res.render("home.ejs");
        // this response rensdering and it use home.
        //ejs file which is in views folder must to decet
        // that file in views folder always
    });
app.listen(port,()=>{
    console.log("hello");
});
