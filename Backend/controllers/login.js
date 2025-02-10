const userdb = require('../models/usersmodel')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');





const login=async (req,res)=>{

    const {email, password} = req.body

   const findEmail = await userdb.findOne({email})

   //check if email exist
   if(!findEmail) return res.status(404).json({message: 'Invalid credentials'})
    bcrypt.compare(password , findEmail.password, function(err, result) {
        if (!result) return res.status(400).json({message: "Invalid credentials"})
            //create jwt
             var token = jwt.sign({ id: findEmail._id, expiresIn: '4m'  }, process.env.JwtSecret);
             console.log(token)
             //create cookie
             res.cookie('token', token, { maxAge: 240000, });//expires in 4min
                     
            res.status(200).json({message: "Login successful"})
            
    });

 

}

module.exports = login