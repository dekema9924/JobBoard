const userdb = require('../models/usersmodel')
var bcrypt = require('bcryptjs');


const register = async (req, res) => {
    const { email, username, password } = req.body

    const checkEmail = await userdb.findOne({ email })
    if (checkEmail) return res.status(404).json({ message: 'user already exists.' })
        bcrypt.hash(password, 10, async function(err, hash) {
            await userdb.create({
                username: username,
                password: hash,
                email: email
            }).then((result)=>{
                res.status(200).json({message: "Account created" })
                console.log(result)
            })

        });
      
        


}


module.exports = register