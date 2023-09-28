const express = require('express');
const app = express();
const path = require('path')
app.set('view engine', 'ejs');
app.get('',(req,pesp)=>{
    const user ={
        name:"imran-ali",
        rollnumber:"13",
        cnic:"kasur",
        skills:["html","css","js","react","nodejs","mongodb","expresss"]
    }
    pesp.render('dynmic',{user})
    // console.log('pesp')
})
app.get('/login',(req,resp)=>{
    resp.render('login')
})
app.get('/css',(req,resp)=>{
    resp.render('login')
})
app.get('/html',(req,resp)=>{
    resp.render('header2')
})

app.listen(5000)