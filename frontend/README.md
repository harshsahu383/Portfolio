# 🎨 Frontend — Developer Portfolio  
### React • Vite • TailwindCSS • Dark Mode • Projects • Resume • Contact Form

This is the **frontend UI** of the Full-Stack Developer Portfolio.  
It is fully responsive, supports dark/light mode, smooth animations, downloadable resume, skills section, and project showcase.

---

## ✨ Features
- ⚛️ React + Vite (blazing fast)
- 🎨 TailwindCSS styling
- 🌗 Light/Dark theme toggle
- 🎞 Animated UI
- 🧰 Skills section (Technologies + Tools)
- 🖼 Projects gallery (images, videos, links)
- 📄 Resume viewer + download
- 📬 Fully working contact form (via backend API)
- 📱 Responsive on all devices

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
npm run dev
http://localhost:5173
```
## 🔧 Environment Variables
```bash
VITE_API_URL=http://localhost:5000
```
## 📂 Folder Structure
``` bash
frontend/
├── public/
│   ├── profile-light.jpg
│   ├── profile-dark.jpg
│   ├── resume.pdf
│   └── projects/
├── src/
│   ├── components/
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── ProfileImage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```
## 🎨 Customization
Add Skills
Edit Skills.jsx
``` bash
const TECHNOLOGIES = [
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "React", icon: "/icons/react.png" },
];

const TOOLS = [
  { name: "Git", icon: "/icons/git.png" },
  { name: "VS Code", icon: "/icons/vscode.png" },
];
```
## 🖼 Add Projects
``` bash
public/projects/ // project files
```
Add New Project in   **Project.jsx**
```bash
{
  title: "My Project",
  description: "A short description...",
  images: ["/projects/project1.jpg"],
  live: "https://yourapp.vercel.app",
  github: "https://github.com/yourname/project"
}

Supports
Supports:

🖼 Images

🎥 Videos

🔗 Live demo

💻 GitHub link
```
## 📄 Add Resume
``` bash
public/resume.pdf
```
## 🛠 Troubleshooting
```bash
Issue	Fix
API not working	Check VITE_API_URL
CORS error	Add frontend URL in backend CORS
Resume not showing	Place resume.pdf inside public/
Images not loading	Use paths like /projects/image.jpg
```
## 👨‍💻 Author
Harsh Sahu
