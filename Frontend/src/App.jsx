import React, { useState, useRef, useEffect } from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';

import ProfileImage from './components/ProfileImage';

const PROJECTS = [
  {
    id: 1,
    title: 'Wonderlust',
    description: 'Airbnb-like clone with auth and bookings.',
    tech: ['Javascript', 'Html', 'Css','Boostrap','Node','MongoDB', 'Express'],
    video: '/projects/videos/wonderlust.mp4',
    poster: '/projects/images/wonderlust.png',
    live: 'https://wonderlust-project-h2g6.onrender.com/listings',
    src: 'https://github.com/harshsahu383/Airbnb-Clone'
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description: 'Streaming UI demo.',
    tech: ['Html','Css','Boostrap',],
    video: '/projects/videos/netflix.mp4',
    poster: '/projects/images/netflix.png',
    live: 'https://netzx.netlify.app/',
    src: 'https://github.com/harshsahu383/Netflix-clone'
  },
  {
    id: 3,
    title: 'To-Do-List App',
    description: 'Managing Day To Day Tasks.',
    tech: ['Html','Css', 'Javascript'],
    video: '/projects/videos/todo.mp4',
    poster: '/projects/images/todo.png',
    live: 'https://to-do-hs.netlify.app/',
    src: 'https://github.com/harshsahu383/TO-DO-LIST-APP'
  }, 
  {
    id: 4,
    title: 'Pg-Life',
    description: 'Book Pg In Any City.',
    tech: ['PHP', 'MySql', 'Html', 'Css', 'Boostrap', 'Javascript', 'React'],
    video: '/projects/videos/pg.mp4',
    poster: '/projects/images/pg.png',
    src: 'https://github.com/harshsahu383/PG-LIFE'
  }, 
];

const TECHNOLOGIES = [
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Node.js', icon: '/icons/node.png' },
  { name: 'MySql', icon: '/icons/mysql.png' },
  { name: 'MongoDB', icon: '/icons/mongo.png' },
  { name: 'HTML/CSS', icon: '/icons/htmlcss.png' },
  { name: 'TailwindCSS', icon: '/icons/tailwind.png' },
  { name: 'DSA', icon: '/icons/dsa.png' },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'Boostrap', icon: '/icons/boostrap.png' },
  { name: 'Redux', icon: '/icons/redux.png' },
  { name: 'Express', icon: '/icons/express.png' },
  { name: 'C', icon: '/icons/c.png' },
  { name: 'C++', icon: '/icons/cc.png' },
];

const TOOLS = [
  { name: 'Git', icon: '/icons/git.png' },
  { name: 'GitHub', icon: '/icons/github.png' },
  { name: 'VS Code', icon: '/icons/vscode.png' },
  { name: 'Postman', icon: '/icons/postman.png' },
  { name: 'Figma', icon: '/icons/figma.png' },
  { name: 'Vercel', icon: '/icons/vercel.png' },

];




export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [projectPreview, setProjectPreview] = useState(null);

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);


  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  function handleChange(e) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('Please fill all fields.'); return; }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('Message sent ✅');
        setForm({ name: '', email: '', message: '' });
      } else {
        const j = await res.json();
        setStatus(j.error || 'Error sending');
      }
    } catch (err) {
      setStatus('Error sending');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 dark:bg-gray-900/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/profile1.jpeg" alt="Harsh Sahu" className="w-11 h-11 rounded-full border" />
            <div>
              <div className="text-lg font-semibold">Harsh Sahu</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">SDE • Full-Stack • (MERN)</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#contact" className="px-3 py-1 bg-blue-600 text-white rounded-md dark:bg-blue-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="px-3 py-2 rounded-md border hover:opacity-90">
              {theme === 'light' ? '🌙 Dark' : '🌞 Light'}
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">☰</button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <div className="flex flex-col gap-3">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#resume">Resume</a>
              <a href="#contact" className="py-2 px-3 bg-blue-600 text-white rounded-md">Contact</a>
            </div>
          </div>
        )}
      </header>

      {}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m Harsh — I build clean, scalable web apps</h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">"Leveraging the power of MongoDB, Express.js, React, and Node.js, I engineer modern web applications that are responsive and performant."</p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md shadow dark:bg-gradient-to-r from-indigo-700 to-blue-900 ">See my work</a>
              <a href="mailto:harshsahu1917@gmail.com" className="px-4 py-2 border rounded-md">Email me</a>
            </div>

            <div className="mt-6 flex gap-3 items-center text-sm">
              <a href="https://github.com/harshsahu383" target="_blank" rel="noreferrer" className="underline">GitHub</a>
              <span className="opacity-40">•</span>
              <a href="https://leetcode.com/u/harshsahu383_/" target="_blank" rel="noreferrer" className="underline">LeetCode</a>
              <span className="opacity-40">•</span>
              <a href="https://www.linkedin.com/in/harshsahu383/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl">
  <ProfileImage
    lightSrc="/images/profile1.jpeg"
    darkSrc="/images/profile3.jpeg"
    alt="Harsh Sahu"
    className=""
  />
</div>
          </div>
        </section>

        {}
        <section id="about" className="mt-12 bg-white/80 dark:bg-gray-900/70 rounded-2xl p-6 backdrop-blur-sm shadow">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">Hi, I’m Harsh Sahu, a passionate Full-Stack Developer currently pursuing my BCA and specializing in the MERN stack. I love building real, scalable, and user-friendly web applications that solve everyday problems.

Over the journey, I’ve developed projects like a Netflix Clone, PG-Life, Wonderlust (Airbnb-style app), a Warehouse Management System, and multiple front-end landing pages—each one helping me grow as a developer and understand how real systems work end-to-end.

I’m also strengthening my Data Structures & Algorithms skills to prepare for top tech roles like SDE at Amazon. I believe in consistency, clean code, and learning by building..</p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Quick highlights</h4>
              <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Built Wonderlust (Airbnb clone), PG-Life and Netflix Clone.</li>
                <li>• Comfortable with MERN: React, Node.js, Express, MongoDB.</li>
                <li>• Experience with authentication, image uploads and deployment.</li>
                <li>• Actively practicing DSA and preparing for SDE roles.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Timeline</h4>
              <ol className="mt-2 text-sm text-gray-600 dark:text-gray-300 list-decimal pl-5 space-y-2">
                <li>2024 — Focused MERN learning and building projects.</li>
                <li>2025 — Built full-stack projects and improved deployment skills.</li>
                <li>2025 — Preparing for SDE interviews and internships.</li>
              </ol>
            </div>
          </div>
        </section>

        {}
        <section id="skills" className="mt-10">
          {}
          <Skills tech={TECHNOLOGIES} tools={TOOLS} />

        </section>

        {}
       <Projects projects={PROJECTS} />

        {}
        <section id="resume" className="mt-10 bg-white/5 dark:bg-gray-900/50 p-6 rounded-xl shadow-md">
  <div className="md:flex md:items-center md:justify-between">
    <div>
      <h3 className="text-xl font-semibold">Resume</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Download my resume to see detailed experience and projects.</p>
    </div>

    <div className="mt-4 md:mt-0 flex gap-3 items-center">
      <a href="resume/resume.pdf" download className="btn-download">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
        </svg>
        Download Resume
      </a>

      <a href="resume/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md text-sm">
        View PDF
      </a>
    </div>
  </div>
</section>

        {}
        <section id="contact" className="mt-10">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-xl shadow">
              <h4 className="font-medium">Get in touch</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Email: <a className="underline" href="mailto:harshsahu1917@gmail.com">Email Me</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300">LinkedIn: <a className="underline" href="https://www.linkedin.com/in/harshsahu383/" target="_blank" rel="noreferrer">Linked In</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300">GitHub: <a className="underline" href="https://github.com/harshsahu383" target="_blank" rel="noreferrer">Github</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300">LeetCode: <a className="underline" href="https://leetcode.com/u/harshsahu383_/" target="_blank" rel="noreferrer">Leetcode</a></p>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">Phone: +91-7725943124</div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-xl shadow" aria-label="contact form">
              <label className="block text-sm">Name
                <input required name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded-md border px-3 py-2 bg-transparent" />
              </label>
              <label className="block text-sm mt-3">Email
                <input required name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 block w-full rounded-md border px-3 py-2 bg-transparent" />
              </label>
              <label className="block text-sm mt-3">Message
                <textarea required name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 block w-full rounded-md border px-3 py-2 bg-transparent" />
              </label>
              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">Send</button>
                <div className="text-sm text-gray-600 dark:text-gray-300">{status}</div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {}
      <footer className="mt-12 py-8 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <div className="text-lg font-semibold">Harsh Sahu</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Full-Stack Developer • MERN</div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <div>Email: <a href="mailto:harsh.sahu@example.com" className="underline">harsh.sahu@example.com</a></div>
            <div>LinkedIn: <a href="https://linkedin.com/in/harsh-sahu" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/harsh-sahu</a></div>
            <div>GitHub: <a href="https://github.com/harshsahu1917" target="_blank" rel="noreferrer" className="underline">github.com/harshsahu1917</a></div>
          </div>
          <div className="flex gap-3 justify-end">
            <a href="https://github.com/harshsahu1917" target="_blank" rel="noreferrer" aria-label="GitHub" className="px-3 py-2 border rounded">GitHub</a>
            <a href="https://leetcode.com/harsh_sahu" target="_blank" rel="noreferrer" aria-label="LeetCode" className="px-3 py-2 border rounded">LeetCode</a>
            <a href="https://linkedin.com/in/harsh-sahu" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="px-3 py-2 border rounded">LinkedIn</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500 dark:text-gray-400 mt-6">© {new Date().getFullYear()} Harsh Sahu — Built with React & Node</div>
      </footer>
    </div>
    
  );
}
<script src='/imagetoggle.js'></script>
