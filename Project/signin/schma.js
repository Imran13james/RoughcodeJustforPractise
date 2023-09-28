const mongoose = require('mongoose')

const userschma = new mongoose.Schema({
    name:String, 
    email:String,
    password:String,
    number:Number,
    
})
module.exports = mongoose.model(("users"),userschma)