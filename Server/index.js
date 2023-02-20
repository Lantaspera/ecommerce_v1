const express = require("express");
const mongoose = require("mongoose");
const app=express()

const User= require('./model/User');

mongoose.connect("mongodb://127.0.0.1:27017/newdb",{
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
