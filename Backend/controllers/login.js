const userdb = require('../models/usersmodel')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');





const login = async (req, res) => {

    const { email, username, password } = req.body

    const findEmail = await userdb.findOne({
        $or: [
            { "username": email },
            { "email": email }
        ]
    })

    //check if email exist
    if (!findEmail) return res.status(404).json({ message: 'Invalid credentials' })
    bcrypt.compare(password, findEmail.password, async function (err, result) {
        if (!result) return res.status(400).json({ message: "Invalid credentials" })
        //create jwt
        var token = jwt.sign({ id: findEmail._id }, process.env.JwtSecret, { expiresIn: '4m' });

        //create cookie
        res.cookie('token', token, { maxAge: 2000000, });//expires in 10sec 10000

        //create a refresh token
        var refreshToken = jwt.sign({ id: findEmail._id }, process.env.JwtSecret, { expiresIn: '1d' })
        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });



        res.status(200).json({ message: "Login successful", token, refreshToken })

    });



}

module.exports = login