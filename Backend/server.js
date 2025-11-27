
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./utils/db');
const contactRoute = require('./routes/contact');

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(cors());
app.use(bodyParser.json());


const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI not set in .env');
} else {
  connectDB(uri);
}


app.use('/api/contact', contactRoute);


if (process.env.NODE_ENV === 'production') {
  const frontendDist = path.join(__dirname, '..', 'frontend', 'dist');
  app.use(express.static(frontendDist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
