const mailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = mailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
        user: "iosifdobos22@gmail.com", //process.env.email,
        pass: "Teiubescurato22"//process.env.password
    }
});

module.exports = transporter;