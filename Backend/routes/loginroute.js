
const express = require('express')
const loginroute = express.Router()
const login = require('../controllers/login')
const register = require('../controllers/register')
const cookieParser = require('cookie-parser');
const verifyToken = require('../Auth/verifytoken');
const passport = require('passport');



//middlewares
loginroute.use(cookieParser());
loginroute.use(express.json())
loginroute.use(express.urlencoded({ extended: true }))




//routes
loginroute.post('/login', login)
loginroute.post('/register', register)

loginroute.get('/github', passport.authenticate('github', { scope: ['profile'] }));

loginroute.get('/github/callback', 
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.send(req.user)
    //   res.redirect('/api/jobs');
    });


module.exports = loginroute