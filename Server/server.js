const express = require('express')
const dotenv = require('dotenv');
const app = express()
dotenv.config({path:'./config.env'});
require('./db/conn');

require('./model/User')
require('./model/Post')

const postRoute = require('./routes/posts')

app.use(express.json());

// we link the router files to make our route easy
//app.use(require('./routes/auth'))
//app.use(require('./routes/posts'))
//app.use('/api/posts',postRoute)

const PORT = process.env.PORT;

//middleWare
// const middleware =(req,res,next)=>{
//     console.log('hello miidleWare')
//     next()
// }


app.get('/',(req,res)=>{
    res.send("helo world")
})
app.get('/signu',(req,res)=>{
    res.send("helo world")
})

app.listen(PORT,()=>{
    console.log(`server is running on`,PORT)
})