const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendMail = require('../utils/mailer');

router.post('/', async (req, res) => {
  console.log('POST /api/contact received at', new Date().toISOString());
  console.log('Body:', req.body);

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    console.warn('Validation failed - missing fields');
    return res.status(400).json({ status: 'error', error: 'Missing name/email/message' });
  }

  try {
    const doc = await Contact.create({ name, email, message });
    console.log('Saved contact id:', doc._id);

    try {
      await sendMail({ name, email, message });
      console.log('Email sent OK');
    } catch (mailErr) {
      console.error('Mail error (non-blocking):', mailErr && mailErr.message ? mailErr.message : mailErr);
  
      return res.status(200).json({ status: 'ok', note: 'saved-only', mailError: (mailErr && mailErr.message) ? mailErr.message : 'mail error' });
    }

    return res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Error saving contact:', err && err.message ? err.message : err);
    return res.status(500).json({ status: 'error', error: 'Server error saving contact' });
  }
});

module.exports = router;
