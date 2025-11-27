const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
async function sendContactEmail({ name, email, message }) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.SMTP_USER, 
    subject: `Portfolio contact form — message from ${name}`,
    text:
      `You have a new message from your portfolio contact form.\n\n` +
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendContactEmail };
