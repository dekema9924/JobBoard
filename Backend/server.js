const express = require('express');
const app = express();
const port = 3000;
const jobroute = require('./routes/jobroute');
const loginroute = require('./routes/loginroute');
const { default: mongoose } = require('mongoose');
require('dotenv').config()



app.use('/api' , jobroute)
app.use('/auth', loginroute)

app.listen(port, async()=>{
    console.log(`server open on port ${port}`)
    await mongoose.connect(process.env.Mongoose_URL)
})

app.get('/',(req, res)=>{
    res.send('hello')
})