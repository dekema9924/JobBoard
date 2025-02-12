const express = require('express');
const verifyToken = require('../Auth/verifytoken');
const Profile = require('../controllers/profile');
const jobroute = express.Router() 


jobroute.get('/profile', verifyToken, Profile)



module.exports = jobroute