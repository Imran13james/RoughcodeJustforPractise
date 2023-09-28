module.exports =reqFilter= (req,resp,next)=>{
    if(!req.query.age){
        resp.send("please enter the age")
    
    }
    else if(req.query.age<17){
        resp.send("please wait 1 more year")  
    }
    else if(req.query.age<=18){
        resp.sendFile()
    }
   
    else{
        resp.send("thanks for ")  
        console.warn("reqFilter")
        next();
    }


}