const user_modal = require("../model/client_modal");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {sendEmailToUser} = require('../middleware/nodeMailer');

// Working
module.exports = {
  registerUser: async (req, res) => {
    console.log("API request : POST register User");

    try {
      const {
        user_name,
        user_password,
        user_email,
      } = req.body;

      //בדיקה עם כל השדות מלאים
      if (!user_password || !user_email || !user_name ) {
        throw new Error("all field required")
      }

 
     const hash = await bcrypt.hash(user_password,10);

      //מייצרים אובייקט עם מאפיינים תואמים למידע שנמצא במסד הנתונים
      const new_user = new user_modal({
        user_password:hash,
        user_email,
        user_name
      });

      //שמירה במסד נתונים
      await new_user.save();

      sendEmailToUser(user_email,user_name)

      new_user.user_password = "*******"

      res.status(200).json({
        success:true,
        message:"user registered successfully",
        new_user
      });
    } catch (error) {
      return res.status(401).json({
        message: "error in register request",
        error: error.message,
      });
    }
  },
  loginUser: async (req,res) => {

    console.log("API request : POST login User");
    const { user_email , user_password} = req.body;

    try {
            //בדיקה שכל השדות מלאים
    if(!user_email || !user_password){
        throw new Error("all fields are required")
    }

    //מחזיר לי את המשתמש במידה והוא קיים
   const user = await user_modal.findOne({ user_email });

   //במידה והוא לא קיים זורק שגיאה
   if(!user){
    throw new Error("user not exists");
   }

   //משוואה את הסיסמא עם הסיסמא במסד נתונים
  const is_match = await bcrypt.compare(user_password,user.user_password);

  //במידה והסיסמא לא נכונה
  if(!is_match){
    throw new Error("bad credentials");
  }

  user.user_password = "*******";

  const { user_name , premission} = user;

  const payload = {
    user_id: user._id,
    user_name,
    premission
  }

  const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:1000 * 60 * 60});

  res.cookie("token",token);

  return res.status(200).json({
    success:true,
    messsage:"user login successfully",
    user,
    token
  })


        
    } catch (error) {
        return res.status(401).json({
            message: "error in login request",
            error: error.message,
          });
    }
},
getAllClients:async(req,res) => {
  try {
      const clients = await user_modal.find();

      return res.status(200).json({
        message:"success to get all Workers",
        success:true,
        clients
      })
  } catch (error) {
      return res.status(500).json({
          message:"error in get all Workers request",
          error:error.message
      })
  }
} 
}
