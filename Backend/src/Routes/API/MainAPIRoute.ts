import * as express from 'express';
const nodemailer = require('nodemailer');
const router = express.Router();
// update
export const MainAPIRoute = router
  .get('/', (req, res) => {
    res.send('User Home Page');
  })
  .post('/sendEmail', (req, res) => {
    console.log('Email should be sending...');
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'michaelpopedeveloper@gmail.com',
        pass: process.env.emailPassword,
      },
    });

    const mailOptions = {
      from: email, // sender address
      to: 'michaelpopedeveloper@gmail.com', // list of receivers
      subject: `Email from: ${name}`, // Subject line
      html: message, // plain text body
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log(info);
    });
    res.send({ response: 'Email should be sending!' });
  });
