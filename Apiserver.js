// const dataa = require('./Apidata')
// const hhhtttpp = require('http')
// hhhtttpp.createServer((req,res)=>{
// res.writeHead(200,{'content-type':'application/json'});
// // cannot understand this line
// res.write(JSON.stringify(dataa));
// res.end();
// }).listen(4500)

// const ApiCreating = require('http');
// const data = require('./Apidata');
// ApiCreating.createServer((send,recive)=>{
//     recive.writeHead(200,{"content-type":'application/json'});
//     recive.write(JSON.stringify(data))
//     recive.end();
// }).listen(4500);


const dajskl = require('http')
dajskl.createServer((send , recive)=>{
    recive.writeHead(200,{'content-type':'application/json'})
    recive.write(JSON.stringify([{data},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},
    {name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},
    {name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},
    {name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'}
    ,{name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'}
    ,{name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'james-harriot',email:"ia8214652@gmail.com",phonenumber:'0305615122'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'},{name:'imran-ali',email:"ia8214652@gmail.com",phonenumber:'03056151224'}]))
recive.end();
}).listen(5000);

const forapi = require('http');
const data = require('./Apidata');
forapi.createServer((sending,recing)=>{
recing.writeHead(200,{'content-type':'application/json'})
recing.write(JSON.stringify(data))
recing.end();
}).listen(4500)