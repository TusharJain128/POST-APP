const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    "email": {
        type: String, 
        required: true
    },
    "password": {
        type: String,
        required: true
    }
},{timeStamps: true})

module.exports = mongoose.Model('User',userSchema)