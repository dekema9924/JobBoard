
var GitHubStrategy = require('passport-github2').Strategy;
const passport = require('passport')
const userdb = require('../models/usersmodel')

passport.serializeUser((user, done)=>{
    done(null, user.id)
})
passport.deserializeUser((user, done)=>{
    done(null, user)
})


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
        
    }
));




