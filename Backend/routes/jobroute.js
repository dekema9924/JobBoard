const express = require('express');
const verifyToken = require('../Auth/verifytoken');
const jobroute = express.Router() 


jobroute.get('/jobs', verifyToken, (req,res)=>{
    res.send('job route')
    console.log(req.user)
})



module.exports = jobroute