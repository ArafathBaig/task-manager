const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendMail = async () => {
sgMail.send({
    to: 'arafath.moghul@gmail.com',
    from: 'arafath.moghul@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
}).then(() => {
    console.log('success')
}).catch(e => {
    console.log(e)
})
}