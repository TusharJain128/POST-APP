const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./routes/route')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.set("strictQuery",true)
mongoose.connect('mongodb+srv://TusharJainFunctionup:functionup@tusharjaindb.zxey2fj.mongodb.net/PostApp')
.then(()=> console.log("Db connected successfully"))
.catch((err)=> console.log(err))

app.use('/',route)

app.listen(3001, ()=> {
    console.log("Port is running on 3001 port")
})