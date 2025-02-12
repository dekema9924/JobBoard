const userdb = require('../models/usersmodel')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');





const login=async (req,res)=>{

    const {email, username, password} = req.body

   const findEmail = await userdb.findOne({
        $or :[
            {"username": email},
            {"email": email}
        ]
   })

   //check if email exist
   if(!findEmail) return res.status(404).json({message: 'Invalid credentials'})
    bcrypt.compare(password , findEmail.password, function(err, result) {
        if (!result) return res.status(400).json({message: "Invalid credentials"})
            //create jwt
             var token = jwt.sign({ id: findEmail._id, expiresIn: '4m'  }, process.env.JwtSecret);
            //  console.log(token)
             //create cookie
             res.cookie('token', token, { maxAge: 10000, });//expires in 10sec
                     
            res.status(200).json({message: "Login successful", token})
            
    });

 

}

module.exports = login