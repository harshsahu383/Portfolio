const express = require('express');
const router = express.Router();
const Contact = require('../models/contactmodel');
const { sendContactEmail } = require('../utils/mailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: ' Please Fill All Missing fields' });
  }

  try {
    const doc = new Contact({ name, email, message });
    await doc.save();

    await sendContactEmail({ name, email, message });

    return res.json({ status: 'ok' });
  } catch (err) {
    console.error('Contact route error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
