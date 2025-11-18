import React, { useEffect, useState } from 'react';
import Skills from './components/Skills';
const PROJECTS = [
  {
    id: 1,
    title: 'Wonderlust - Travel Clone',
    description: 'Full-stack Airbnb-like app with authentication, image uploads and bookings.',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    image: '/projects/wonderlust.jpg',
    live: '#',
    src: 'https://github.com/harshsahu1917/wonderlust'
  },
  {
    id: 2,
    title: 'PG-Life',
    description: 'Find affordable PG accommodations with filters and map integration.',
    tech: ['React', 'PHP', 'MySQL'],
    image: '/projects/pglife.jpg',
    live: '#',
    src: 'https://github.com/harshsahu1917/pg-life'
  },
  {
    id: 3,
    title: 'Netflix Clone',
    description: 'Responsive streaming UI with saved lists and Firebase auth.',
    tech: ['React', 'Firebase', 'CSS Grid'],
    image: '/projects/netflixclone.jpg',
    live: '#',
    src: 'https://github.com/harshsahu1917/netflix-clone'
  }
];

const SKILLS = [
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Node.js', icon: '/icons/node.png' },
  { name: 'Mysql', icon: '/icons/mysql.png' },
  { name: 'MongoDB', icon: '/icons/mongo.png' },
  { name: 'HTML/CSS', icon: '/icons/htmlcss.png' },
  { name: 'Tailwind', icon: '/icons/tailwind.png' },
  { name: 'Github', icon: '/icons/github.png' },
  { name: 'DSA', icon: '/icons/dsa.png' },
  { name: 'Git', icon: '/icons/git.png' },
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
            <img src="/profile.jpg" alt="Harsh Sahu" className="w-11 h-11 rounded-full border" />
            <div>
              <div className="text-lg font-semibold">Harsh Sahu</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Full-Stack Developer • MERN</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#contact" className="px-3 py-1 bg-blue-600 text-white rounded-md">Contact</a>
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
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">I specialise in MERN stack and ship production-ready projects focused on performance, accessibility and maintainability.</p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md shadow">See my work</a>
              <a href="mailto:harsh.sahu@example.com" className="px-4 py-2 border rounded-md">Email me</a>
            </div>

            <div className="mt-6 flex gap-3 items-center text-sm">
              <a href="https://github.com/harshsahu1917" target="_blank" rel="noreferrer" className="underline">GitHub</a>
              <span className="opacity-40">•</span>
              <a href="https://leetcode.com/harsh_sahu" target="_blank" rel="noreferrer" className="underline">LeetCode</a>
              <span className="opacity-40">•</span>
              <a href="https://linkedin.com/in/harsh-sahu" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/profile.jpg" alt="Harsh profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {}
        <section id="about" className="mt-12 bg-white/80 dark:bg-gray-900/70 rounded-2xl p-6 backdrop-blur-sm shadow">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">I’m a BCA student and an aspiring SDE. I build web apps — from neat frontends to robust backends. I enjoy learning system design and improving my DSA skills to solve real-world problems efficiently.</p>

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
          {/* <h3 className="text-xl font-semibold">Skills</h3> */}
          <Skills skills={SKILLS} defaultVisible={5} />
        </section>

        {}
        <section id="projects" className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Selected Projects</h3>
            <a href="https://github.com/harshsahu1917" target="_blank" rel="noreferrer" className="text-sm text-indigo-600">View all on GitHub</a>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            {PROJECTS.map(p => (
              <article key={p.id} className="bg-white/80 dark:bg-gray-900/70 rounded-xl overflow-hidden shadow-lg flex flex-col">
                <img src={p.image} alt={p.title} className="h-40 w-full object-cover" onError={(e)=>{ e.currentTarget.src = '/projects/placeholder.jpg'; }} />
                <div className="p-4 flex-1 flex flex-col">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 border rounded-full">{t}</span>)}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => setProjectPreview(p)} className="text-sm underline">Preview</button>
                    <a href={p.src} target="_blank" rel="noreferrer" className="text-sm underline">Source</a>
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {}
          {projectPreview && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl">
                <div className="p-4 flex items-start justify-between">
                  <h4 className="font-semibold">{projectPreview.title || 'Project Preview'}</h4>
                  <button onClick={() => setProjectPreview(null)} className="text-sm px-2 py-1 border rounded">Close</button>
                </div>
                <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={projectPreview.image || '/projects/placeholder.jpg'}
                    alt={projectPreview.title || 'project image'}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = '/projects/placeholder.jpg'; }}
                  />
                </div>
                <div className="p-4 text-sm text-gray-700 dark:text-gray-300">
                  <p>{projectPreview.description || 'No description available.'}</p>
                  <div className="mt-3">Tech: {(projectPreview.tech || []).join(', ')}</div>
                  <div className="mt-4 flex gap-3">
                    {projectPreview.src && <a href={projectPreview.src} target="_blank" rel="noreferrer" className="underline">Source</a>}
                    {projectPreview.live && <a href={projectPreview.live} target="_blank" rel="noreferrer" className="underline">Live</a>}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {}
        <section id="contact" className="mt-10">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-xl shadow">
              <h4 className="font-medium">Get in touch</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Email: <a className="underline" href="mailto:harsh.sahu@example.com">harsh.sahu@example.com</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300">LinkedIn: <a className="underline" href="https://linkedin.com/in/harsh-sahu" target="_blank" rel="noreferrer">linkedin.com/in/harsh-sahu</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300">GitHub: <a className="underline" href="https://github.com/harshsahu1917" target="_blank" rel="noreferrer">github.com/harshsahu1917</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300">LeetCode: <a className="underline" href="https://leetcode.com/harsh_sahu" target="_blank" rel="noreferrer">leetcode.com/harsh_sahu</a></p>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">Phone: +91-XXXXXXXXXX</div>
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
