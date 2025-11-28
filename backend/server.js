
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./utils/db');
const contactRoute = require('./routes/contact');

const app = express();
const cors = require("cors");

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://portfolio-git-main-harshsahu383s-projects.vercel.app/", 
    "https://portfolio-i6ct.onrender.com"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
