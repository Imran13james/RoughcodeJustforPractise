const httpip =require('http')
//this is the  core madule the madule which are predinfine we just need to call it only
httpip.createServer((req,resp)=>{
    resp.write('this is the server')
    resp.end();
}).listen(5000);

//what is request 
// for example if we send the data like in the front end if a user comes click on send data basically it is 
// is the request to the server then our server response the information  this is the req and res 
