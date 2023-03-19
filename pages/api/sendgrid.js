import sendgrid from '@sendgrid/mail';
//import nodemailer from 'nodemailer';
const API_KEY = process.env.SENDGRID_API_KEY;
sendgrid.setApiKey(API_KEY);

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "narendrazadafiya.albetrios@gmail.com", // generated ethereal user
//     pass: "Nz@123456789", // generated ethereal password
//   },
// });

// send mail with defined transport object



// async function sendEmail(req, res) {
//   try {
//     // console.log('REQ.BODY', req.body);
//     await transporter.sendMail({
//       from: "narendrazadafiya.albetrios@gmail.com" , // sender address
//       to: "narenzadafiya.cn@gmail.com", // list of receivers
//       subject: `email of: ${req.body.name}`, // Subject line
//       text: `🙋/Name: ${req.body.name}\n ✉️Email: ${req.body.email}\n 📝Mensagem: ${req.body.message}`, // plain text body
//       html: "<b>Hello world?</b>", // html body
//     }).then(info=>console.log(info.messageId)).catch(error=>console.log(error));
//   } catch (error) {
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }
//   console.log("sent successfully....");
//   return res.status(200).json({ error: '' });
// }

async function sendEmail(req, res) {
  try {
    // console.log('REQ.BODY', req.body);
    await sendgrid.send({
      from: "narendrazadafiya.albetrios@gmail.com" , // sender address
      to: "narenzadafiya.cn@gmail.com", // list of receivers
      // to: 'canovember01@gmail.com', // Your email where you'll receive emails
      // from: 'canovember01@gmail.com', // your website email address here
      subject: `email de: ${req.body.name}`,
      text: `🙋/🙋‍♂️Nome: ${req.body.name}\n ✉️Email: ${req.body.email}\n 📝Mensagem: ${req.body.message}`
      ,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: '' });
}

export default sendEmail;
