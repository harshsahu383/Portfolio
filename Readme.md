# 🌟 Full-Stack Developer Portfolio  
### React • Vite • TailwindCSS • Node.js • Express • MongoDB • Nodemailer

A modern, responsive, animated, and full-stack portfolio website built to showcase skills, projects, resume, and a fully-functional contact form connected to a backend server + database.

---

## 🚀 Live Demo  
Frontend (Vercel): https://your-frontend.vercel.app  
Backend (Render): https://your-backend.onrender.com  

---

## ✨ Features  
- 🎨 Modern UI with TailwindCSS  
- 🌗 Dark/Light Mode Toggle  
- 📁 Project Gallery (Images + Videos)  
- 🧰 Skills separated as **Technologies & Tools**  
- 📄 Resume Viewer + Download  
- 📬 Contact Form → MongoDB + Email Notification  
- ⚡ Super-fast Vite Frontend  
- ☁️ Production Deployment (Vercel + Render)

---

## 🧰 Tech Stack

### **Frontend**
- React  
- Vite  
- TailwindCSS  

### **Backend**
- Node.js  
- Express  
- MongoDB (Atlas)  
- Nodemailer  

### **Deployment**
- Vercel (Frontend)  
- Render (Backend)  
- MongoDB Atlas (Database)  

---

## 📂 Project Structure

- Portfolio/
- ├── frontend/
- │ ├── public/
- │ │ ├── profile-light.jpg
- │ │ ├── profile-dark.jpg
- │ │ ├── resume.pdf
- │ │ └── projects/
- │ └── src/
- │ ├── components/
- │ ├── App.jsx
- │ ├── main.jsx
- │ └── index.css
- │
- └── backend/
- ├── server.js
- ├── routes/
- │ └── contact.js
- ├── models/
- │ └── Contact.js
- ├── utils/
- │ ├── db.js
- │ └── mailer.js
-├── .env.example
- └── package.json

---

# 🚀 Getting Started (Full Project)

## 1️⃣ Clone Repo
```bash
git clone https://github.com/<your-username>/<repo>.git
cd <repo>
```
 ## 🔧 Backend Setup
 ```bash
 cd backend
npm install
cp .env.example .env
```
## .env
```bash
PORT=5000
MONGO_URI=your mongodb atlas uri
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password
EMAIL_FROM="Your Name <your@gmail.com>"
```
## Run backend
```bash
npm run dev
http://localhost:5000 // backend runs on
```

## 💻 Frontend Setup
```bash
cd frontend
npm install
npm run dev
http://localhost:5173 // frontend runs on
```
## 🔌 Connecting Frontend → Backend
Create frontend/.env:
```bash
VITE_API_URL=http://localhost:5000
VITE_API_URL=https://your-backend.onrender.com // production example
```



