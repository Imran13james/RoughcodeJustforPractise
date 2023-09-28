const express = require('express')
const path = require('path')
const app = express()

// app.get('',(send,recive)=>{
//     recive.send('this is the home page')
// })
// app.get('/about',(send,recive)=>{
//     recive.send('this is the about page')
// })
const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("please enter the age")
    
    }
    else if(req.query.age<17){
        resp.send("please wait 1 more year")  
    }
    else if(req.query.age<=18){
        resp.send("thankyou so")
    }
   
    else{
        resp.send("thanks for ")  
        console.warn("reqFilter")
        next();
    }


}
app.use(reqFilter)
app.listen(5000);