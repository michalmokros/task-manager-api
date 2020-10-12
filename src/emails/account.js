const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//     to: 'mokros.michal14@gmail.com',
//     from: 'mokros.michal14@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually gets to you.'
// }
// sgMail
//   .send(msg)

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'mokros.michal14@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app. Thank you.`,
        // html: ''
    }
    sgMail.send(msg)
}

const sendCalcelationEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'mokros.michal14@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }
    sgMail.send(msg)
}

module.exports = {
    sendWelcomeEmail,
    sendCalcelationEmail
}