const express = require('express')
const app = express();

app.get("/",(send,resp)=>{
    resp.send('Hi ,' + send.query.name)
})

app.get("/home",(send,resp)=>{
    console.warn(send.query.name)
    resp.send([{
        name:"imran",name2:"james"
    },{rollno:"13" , rollno:"14"}])
})
app.get("/contact",(send,resp)=>{
    console.warn(send.query.name)
    resp.send(`
    <input type="name" placeholder="enter name in  the serach box" value=${send.query.name}>
    `)
})
app.listen(5000);
