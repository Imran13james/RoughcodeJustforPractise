const path = require('path');
const express = require('express');

const app = express()

const publicPath = path.join(__dirname,'Expressjs')
app.use(express.static(publicPath));
// console.log(__dirname,'Expressjs')
 app.listen(4500);
