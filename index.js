const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const transporter = require('./config');
// const mailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.post("/api/send", (req, res) => {
    console.log(req.body);
    try {
        const mailOptions = {
            from: req.body.email,
            to: process.env.email, //"iosifdobos22@gmail.com",
            subject: req.body.subject,
            html: `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `
        };

        transporter.sendMail(mailOptions, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent successfully");
            }
            transporter.close();
        })
    } catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
})