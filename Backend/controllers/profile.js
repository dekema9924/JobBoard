const userdb = require('../models/usersmodel')

 const Profile = async (req, res)=>{
        // console.log(req.user)
        try{
            const findUser = await userdb.findById(req.user.id).select("-password")
            if(!findUser) return res.status(404).json({message: "user not found"})
                res.status(200).json({data: findUser})
        }
        catch(error){
            console.error
        }
       
 }

 module.exports =  Profile