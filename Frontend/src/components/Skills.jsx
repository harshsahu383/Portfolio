
import React, { useState } from 'react';


export default function Skills({ skills = [], defaultVisible = 5 }) {
  const [showAll, setShowAll] = useState(false);

  
  const visible = showAll ? skills : skills.slice(0, defaultVisible);

  return (
    <section id="skills" className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Skills</h3>
        <button
          onClick={() => setShowAll(s => !s)}
          className="text-sm underline focus:outline-none"
          aria-expanded={showAll}
        >
          {showAll ? 'Hide' : 'See All'}
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Technologies and tools I use regularly.</p>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {visible.map((s, index) => (
          <div
            key={s.name}
            className="bg-white/80 dark:bg-gray-800 p-3 rounded-xl flex flex-col items-center gap-2 shadow-sm opacity-0"
            style={{
              animationDelay: `${index * 120}ms`,
              animationFillMode: 'forwards'
            }}
          >
            {}
            <div className="w-full h-full animate-slide-in flex flex-col items-center">
              <img
                src={s.icon}
                alt={`${s.name} icon`}
                className="w-12 h-12 object-contain mb-2"
                onError={(e) => { e.currentTarget.src = '/icons/placeholder.png'; }}
              />
              <div className="text-sm font-medium">{s.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
