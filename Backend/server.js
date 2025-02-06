const express = require('express');
const app = express();
const port = 3000;
const jobroute = require('./routes/jobroute');
require('dotenv').config()


app.use('/api' , jobroute)

app.listen(port, ()=>{
    console.log(`server open on port ${port}`)
})

app.get('/',(req, res)=>{
    res.send('hello')
})