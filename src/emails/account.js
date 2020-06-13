const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.send({
    to: 'jonathan.shaw@tuta.io',
    from: 'jonathan.shaw@tuta.io',
    subject: 'This is my creation',
    text: 'I hope this one gets to you'
})

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jonathan.shaw@tuta.io',
        subject: "Welcome to Jon's Task Application!",
        text: `Welcome to my task application, ${name}.  I hope you enjoy it!`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jonathan.shaw@tuta.io',
        subject: "I'm sorry to see you go!",
        text: `I'm sorry to see that you no longer wish to use my task app, ${name}. ` + 
            `Is there anything you'd like to see improved in the application?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}