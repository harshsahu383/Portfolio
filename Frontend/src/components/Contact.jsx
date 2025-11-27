import React, { useState, useRef } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const containerRef = useRef(null);

 
  const API_BASE = import.meta.env.VITE_API_URL || '';
  
  const ENDPOINT = `${API_BASE.replace(/\/$/, '')}/api/contact`.replace('//api', '/api');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function animate(name, ms = 600) {
    const el = containerRef.current;
    if (!el) return;
    el.classList.remove(name);
    
    void el.offsetWidth;
    el.classList.add(name);
    setTimeout(() => el.classList.remove(name), ms + 50);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: 'error', msg: 'Please fill all fields.' });
      animate('shake');
      return;
    }

    setStatus({ state: 'loading', msg: 'Sending...' });

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        let body = {};
        try { body = await res.json(); } catch {}
        throw new Error(body.error || `Server returned ${res.status}`);
      }

      
      setStatus({ state: 'success', msg: 'Message sent — thank you!' });
      animate('pop');
      setForm({ name: '', email: '', message: '' });

      
      setTimeout(() => setStatus({ state: 'idle', msg: '' }), 3500);
    } catch (err) {
      console.error('Contact send error:', err);
      setStatus({ state: 'error', msg: 'Failed to send. Try again later.' });
      animate('shake');
    }
  }

  return (
    <section id="contact" className="mt-10" aria-labelledby="contact-title">
      <h3 id="contact-title" className="text-xl font-semibold">Contact</h3>

      <div ref={containerRef} className="mt-4 grid md:grid-cols-2 gap-6">
        {}
        <div className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-xl shadow">
          <h4 className="font-medium">Get in touch</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Email: <a className="underline" href="mailto:harshsahu1917@gmail.com">harshsahu1917@gmail.com</a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            LinkedIn: <a className="underline" href="https://www.linkedin.com/in/harshsahu383/" target="_blank" rel="noreferrer">Linked In</a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            GitHub: <a className="underline" href="https://github.com/harshsahu383" target="_blank" rel="noreferrer">Github</a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            LeetCode: <a className="underline" href="https://leetcode.com/u/harshsahu383_/" target="_blank" rel="noreferrer">Leetcode</a>
          </p>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">Phone: +91-7725943124</div>
        </div>

        {}
        <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-900/70 p-6 rounded-xl shadow" aria-label="contact form">
          <label className="block text-sm">
            Name
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 bg-transparent"
              placeholder="Your name"
            />
          </label>

          <label className="block text-sm mt-3">
            Email
            <input
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="mt-1 block w-full rounded-md border px-3 py-2 bg-transparent"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm mt-3">
            Message
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border px-3 py-2 bg-transparent"
              placeholder="Write your message..."
            />
          </label>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              disabled={status.state === 'loading'}
              className={`px-4 py-2 bg-green-600 text-white rounded-md inline-flex items-center gap-2 ${
                status.state === 'loading' ? 'opacity-70 cursor-wait' : 'hover:scale-[1.02]'
              }`}
            >
              {status.state === 'loading' ? (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="60" strokeLinecap="round" />
                </svg>
              ) : null}
              <span>{status.state === 'loading' ? 'Sending...' : 'Send'}</span>
            </button>

            <div className="text-sm text-gray-600 dark:text-gray-300" aria-live="polite">
              {status.state === 'success' && <span className="text-green-600">{status.msg}</span>}
              {status.state === 'error' && <span className="text-red-600">{status.msg}</span>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
