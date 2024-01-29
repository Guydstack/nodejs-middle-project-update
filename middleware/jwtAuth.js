const jwt = require('jsonwebtoken');


const jwtAuth = async(req,res,next) => {
try {
    let token = null;

    // Check if the token is present in the cookies
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else {
      // Retrieve the token from the request headers
      token = req.headers.authorization?.split(' ')[1];
    }

     console.log('Token:', token);

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
