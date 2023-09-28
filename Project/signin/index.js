const express = require('express');
const schema = require('./schma');
const app = express();
require('./configfile')
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.post("/rigestredion", async (req, resp) => {
    let users = new schema(req.body);
    let result = await users.save();
    result = result.toObject();
    delete result.number

    resp.send(result);
})
app.post('/login', async (req, resp) => {
    let user = await schema.findOne(req.body)

    if (user) {
        resp.send(user)
    } else {
        resp.send("user not found")
    }
})
app.listen(5000)