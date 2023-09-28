const express = require('express')
const path = require('path')
const app = express()
const reqFilter =require('./mideware')
const route = express.Router();
app.get('', (req, res) => { 
    res.send('hello yar'); 
});
route.get('/about',(req,peqs)=>{
    peqs.send('helllo about')  
})
route.get('/home',(req,peqs)=>{
    peqs.send('helllo home')  
})
app.use('/',reqFilter)
app.use('/', route)
app.listen(5000)