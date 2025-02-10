
const express = require('express')
const loginroute = express.Router()
const login = require('../controllers/login')
const register = require('../controllers/register')
const cookieParser = require('cookie-parser');
const verifyToken = require('../Auth/verifytoken');




//middlewares
loginroute.use(cookieParser());
loginroute.use(express.json())
loginroute.use(express.urlencoded({extended: true}))




//routes
loginroute.post('/login', login)
loginroute.post('/register', register)


loginroute.get("/test", verifyToken, (req, res) => {
    res.send("User authorized");
});


module.exports = loginroute