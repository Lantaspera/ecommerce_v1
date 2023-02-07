const mongoose = require('mongoose')

const DB = process.env.DATABASE;
//mongodb connecting with promise
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log('connection succes')
}).catch((err)=>console.log(err))
