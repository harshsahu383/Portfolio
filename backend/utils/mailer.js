// backend/utils/mailer.js  (CommonJS — use with require)
const nodemailer = require('nodemailer');

async function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.EMAIL_FROM || user;

  if (!user || !pass) {
    throw new Error('SMTP_USER or SMTP_PASS is missing in environment');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass }
  });

  // verify throws on auth/connection problems
  await transporter.verify();
  console.log('Mailer: transporter verified OK for', user);

  return { transporter, from };
}

async function sendMail({ name, email, message }) {
  const { transporter, from } = await createTransporter();

  const mailOptions = {
    from,
    to: process.env.SMTP_USER,
    subject: `Portfolio contact form: ${name} <${email}>`,
    text: `Message from ${name} <${email}>:\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g,'<br/>')}</p>`
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Mailer: sendMail info:', info);
  return info;
}

module.exports = sendMail;
