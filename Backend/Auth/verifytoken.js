var jwt = require('jsonwebtoken');


const verifyToken = (req,res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).send("Authorization failed. No access token.");
      }


    jwt.verify(token, process.env.JwtSecret, function(err, decoded) {
        if (err) {
            console.log(err);
            return res.status(403).send("Could not verify token");
        }
        req.userId = decoded
        console.log(decoded)
    });
    next();

}
module.exports = verifyToken

