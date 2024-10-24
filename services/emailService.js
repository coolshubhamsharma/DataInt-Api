const nodemailer = require('nodemailer');

const sendEmailAlert = async (totalLeads) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'email@gmail.com',
            pass: 'email-password'
        }
    });

    const mailOptions = {
        from: 'email@gmail.com',
        to: 'recipientemail@gmail.com',
        subject: 'Lead Alert',
        text: `The total number of leads has exceeded the limit: ${totalLeads} leads.`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmailAlert };
