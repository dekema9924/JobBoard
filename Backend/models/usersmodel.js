
const mongoose = require('mongoose')

const  userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
    },
    password: String,
    username: String
})

module.exports  = mongoose.model('Users', userSchema)