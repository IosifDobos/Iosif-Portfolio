const mailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = mailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});

module.exports = transporter;