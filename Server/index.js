const express = require("express");
const mongoose = require("mongoose");
const app=express()
mongoose.connect("mongodb+srv://lanta:lantaspera@cluster0.vythqyv.mongodb.net/ecom?retryWrites=true&w=majority",{
    useNewUrlParser:true, useUnifiedTopology:true
},(err)=>{
    if(err)
    {
        console.log(err)
    }else{
     
        console.log("successfully connected")   
    }
})

app.listen(3006,()=>{
    console.log("on port 3006 !!!")
})