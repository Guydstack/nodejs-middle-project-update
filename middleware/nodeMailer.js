const nodemailer = require("nodemailer");
const { sendUserMail } = require('../public/template/registerUser');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SERVICE_GMAIL_EMAIL,
    pass: process.env.SERVICE_GMAIL_PASS
  }
});


exports.sendEmailToUser = (_to,userName) => {

    const mail = {
      from: "dahan.nature.design@gmail.com",
      to: _to,
      subject: "Thank you for registering with Bali resturant",
      html: sendUserMail(userName)
    };
    transporter.sendMail(mail,(err,data) => console.log(err));
}
