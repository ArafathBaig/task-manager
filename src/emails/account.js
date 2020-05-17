const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

 

const transporter = nodemailer.createTransport(sendgridTransport({
    auth : {
        api_key: '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'
    }
}))

transporter.sendMail({
    to : 'whyareyousoougly@gmail.com',
    from: 'arafath.moghul@gmail.com',
    subject: 'Sign up success',
    text: 'Done'
})