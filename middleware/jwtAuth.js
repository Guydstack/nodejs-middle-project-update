const jwt = require('jsonwebtoken');


const jwtAuth = async(req,res,next) => {
try {
 const token = req.cookies["token"];

if(!token) throw new Error("no token provided");

 const decode = jwt.verify(token,process.env.JWT_SECRET);
//  if(decode.premission === 1) throw new Error("user not authrizition");
//  if(decode.premission === 2) 

 next();
} catch (error) {
    return res.status(401).json({
        message:"invalid token",
        error:error.message
    })
}
}

module.exports = jwtAuth;