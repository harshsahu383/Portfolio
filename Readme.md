📌 Full-Stack Developer Portfolio (React + Node + MongoDB)

A modern full-stack developer portfolio built using:

Frontend: React + Vite + TailwindCSS

Backend: Node.js + Express + MongoDB

Email Service: Nodemailer

Deployment:

Frontend → Vercel

Backend → Render

Includes dark/light mode, project gallery, skill sections, resume download, and a fully functional contact form connected to MongoDB + email notifications.

📂 Project Structure
Portfolio/
├── frontend/        # React + Vite (UI)
└── backend/         # Node + Express API

🚀 Getting Started (Full Project)
1️⃣ Clone the Repo
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

🖥️ Backend Setup
cd backend
npm install
cp .env.example .env


Update .env:

PORT=5000
MONGO_URI=your_mongo_uri
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM="Your Name <your@gmail.com>"


Start backend:

npm run dev

💻 Frontend Setup
cd frontend
npm install
npm run dev


Runs on:

http://localhost:5173

🔌 Connect Frontend → Backend

Inside frontend/.env:

VITE_API_URL=http://localhost:5000


For production (Vercel):

VITE_API_URL=https://your-backend.onrender.com

📨 Contact API
POST /api/contact
{
  "name": "Harsh",
  "email": "test@example.com",
  "message": "Hello!"
}


Backend will:

Save message to MongoDB

Send email to your inbox

Return { "status": "ok" }

🚀 Deployment
Frontend → Vercel (Recommended)

Root Directory: frontend

Build Command: npm run build

Output: dist

Env:

VITE_API_URL=https://your-backend.onrender.com

Backend → Render

Root Directory: backend

Build Command: npm install

Start Command: npm start

Env needs:

MONGO_URI

SMTP_USER

SMTP_PASS

EMAIL_FROM

🧪 Testing

Use Postman:

POST https://your-backend.onrender.com/api/contact

🛠 Troubleshooting

Vercel can't find package.json → Set root directory to frontend

Render can’t find backend → Folder must be exactly backend/

Email not sending → Use Gmail App Password

CORS errors → Add your Vercel URL in CORS config

📜 License

MIT License
© 2025 — Harsh Sahu