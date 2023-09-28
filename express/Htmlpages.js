const express = require('express');
const app = express();
const path = require('path')
const dirpath = path.join(__dirname)
// console.log(dirpath)
app.get('/',(res,resp)=>{
    resp.sendFile(`${dirpath}/index.html`)
})
app.get('/about',(res,resp)=>{
    resp.sendFile(`${dirpath}/index.html`)
})
app.get('/home',(res,resp)=>{
    resp.sendFile(`${dirpath}/index.html`)
})
app.get('*',(res,resp)=>{
    resp.sendFile(`${dirpath}/home.html`)
})
app.listen(5000)