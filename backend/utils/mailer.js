
const nodemailer = require('nodemailer');

async function sendMail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey", 
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Portfolio contact: ${name}`,
    text: `${name} <${email}> says:\n\n${message}`,
    html: `<p><b>${name}</b> &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendMail;
