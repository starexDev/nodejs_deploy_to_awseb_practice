const express = require('express');
require('dotenv').config()
const nodemailer = require("nodemailer");

const emailValidationRoute = require("./Routes/Validation/email_validation");

const app = express();
const port = process.env.PORT || 8080;

app.use("/validation", emailValidationRoute);

app.get('/', (req, res) => {
    res.send(`Hello World! ${process.env.PORT}`);
})

app.post('/test', (req, res) => {
    res.status(200).json({
        envport: `${process.env.PORT}`,
        port: port
    });
})

app.post('/mail', async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    res.status(200).json({
        message_sent: info.messageId,
        preview_url: nodemailer.getTestMessageUrl(info)
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})