const mongoose = require('mongoose')

const ProductsDchema  = new mongoose.Schema({
    New_dat:String,
    Dta:String,
    to:String,
    for:String

})
module.exports =mongoose.model('Demo-Collection', ProductsDchema)