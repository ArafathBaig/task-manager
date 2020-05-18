const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

 

const transporter = nodemailer.createTransport(sendgridTransport({
    auth : {
        api_key: process.env.SENDGRID_API_KEY
    },
}))



const sendWelcomeEmail = (email, name) => {

    transporter.sendMail({
    sendMail : true,
    to : email,
    from: 'whyareyousoougly@gmail.com',
    subject: 'Welcome Aboard',
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`
})

}

const sendCancellationEmail = (email, name) => {

    transporter.sendMail({
        sendMail: true,
        to: email,
        from: "whyareyousoougly@gmail.com",
        subject: 'Sorry to see you go',
        text: `Sorry ${name}, We are sad that you are letting us go. Thank you for spending time with us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}