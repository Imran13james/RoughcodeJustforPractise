const express = require('express')
const app = express();
const GetThedata = require('./index');

app.use(express.json())
app.get('/', async (req, resp) => {
    let db = await GetThedata();
    db = await db.find({}).toArray();
    resp.send(db)
    // console.log(db)

})

app.post('/', async (req, resp) => {
   try{ let db = await GetThedata();
 db= await db.insertOne(req.body) 
    resp.send(req.body);
console.log("done")}
    catch (error){
        console.error("Error:", error);
    }
})

app.put('/:name', async (req,resp)=>{
    let db = await GetThedata();
    let result =await db.updateMany(
        {name:req.params.name}, 
        {$set : req.body}
        )
        resp.send({result:"Updated"});
        console.log(result)
})
app.delete('/:name',async(req,resp)=>{
    let db = await GetThedata();
    let result = await db.deleteMany ({
      name: 'this is the post man data'
    })
    resp.send(result)
})
app.listen(4000)