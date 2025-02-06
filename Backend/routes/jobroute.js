const express = require('express')
const jobroute = express.Router()


jobroute.get('/', (req,res)=>{
    res.send('job route')
})

module.exports = jobroute