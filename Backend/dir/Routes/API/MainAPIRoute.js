"use strict";
exports.__esModule = true;
var express = require("express");
var nodemailer = require('nodemailer');
var router = express.Router();
exports.MainAPIRoute = router
    .get('/', function (req, res) {
    res.send('User Home Page');
})
    .post('/sendEmail', function (req, res) {
    console.log('Email should be sending...');
    var _a = req.body, name = _a.name, email = _a.email, message = _a.message;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'michaelpopedeveloper@gmail.com',
            pass: process.env.emailPassword
        }
    });
    var mailOptions = {
        from: email,
        to: 'michaelpopedeveloper@gmail.com',
        subject: "Email from: " + name,
        html: message
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
    res.send({ response: 'Email should be sending!' });
});
//# sourceMappingURL=MainAPIRoute.js.map