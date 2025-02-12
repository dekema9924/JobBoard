const express = require('express');
const app = express();
const port = 3000;
const jobroute = require('./routes/jobroute');
const loginroute = require('./routes/loginroute');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const passportSetup = require('./Auth/githubauth');
const passport = require('passport')
var session = require('express-session');
const cors = require('cors')


app.use(cors({
    origin: 'http://localhost:5173',  // Allow only this origin
    credentials: true                // Allow sending credentials like cookies
  }));

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, maxAge: 60000, saveUninitialized: false, cookie: ({secure: true}) }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api' , jobroute)
app.use('/auth', loginroute)

app.listen(port, async()=>{
    console.log(`server open on port ${port}`)
    await mongoose.connect(process.env.Mongoose_URL)
})
