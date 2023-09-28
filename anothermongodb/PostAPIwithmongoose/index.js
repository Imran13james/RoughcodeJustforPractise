const express = require('express');
require('./Product');
const configfile = require('./config');

const app = express()
app.use(express.json())
app.post('/', async(req, resp) => {
    let data = new configfile(req.body);
    // let result = await data.save()
    resp.send(result);
    console.log(result)
})

app.get('/', async(req, resp) => {
    let data =await configfile.find();

    resp.send(data)
    console.log(data)
})
// app.delete('/', async(req, resp) => {
//     let data =await configfile.deleteMany({});
//     // let result = await data.save()
//     resp.send(data)
//     console.log(data)
// })
app.listen(5000)