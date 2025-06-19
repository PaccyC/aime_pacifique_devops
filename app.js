const express= require("express");


// Initialize app

const app= express();



const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello, Devops!")
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
});