require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");
const contactRoute = require("./routes/contact");

const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://harsh-portfolio.vercel.app"
  ]
}));

app.use(bodyParser.json());

connectDB(process.env.MONGO_URI);


app.use("/api/contact", contactRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
