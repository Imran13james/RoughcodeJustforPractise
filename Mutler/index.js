const express = require('express');
const multer = require('multer');
const EventEmitter = require('events')
let count = 0

const app = express()
const event = new EventEmitter()
event.on("api called",()=>{
    count++;
    console.log("event called",count)
})
app.get("/", (req,resp)=>{
    resp.send("done")
    event.emit('api called')
})

const uplaod = multer({
    storage: multer.diskStorage({
        destination: function (req, resp, cb) {
            cb(null, "")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpeg");
        }
    })
}).array("Downloads", 5)


app.post("", uplaod, (req, resp) => {
    resp.send(resp.body)
    console.log("Done")
})
app.listen(5000)