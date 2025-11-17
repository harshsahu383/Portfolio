
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
          className="text-sm underline"
        >
          {showAll ? 'Hide' : 'See All'}
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        Technologies and tools I use regularly.
      </p>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {visible.map((s, index) => (
          <div
            key={s.name}
            className="bg-white/6 dark:bg-gray-800/60 p-3 md:p-4 rounded-xl flex flex-col items-center gap-3 shadow-sm"
            style={{
           
              animationName: 'slideInFromLeft',
              animationDuration: '360ms',
              animationTimingFunction: 'ease-out',
              animationFillMode: 'both',
              animationDelay: `${index * 90}ms`
            }}
          >
            {}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg"
                 style={{
                   background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.88))',
                 
                   boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06), 0 6px 18px rgba(2,6,23,0.25)'
                 }}
            >
              <img
                src={s.icon}
                alt={s.name}
                className="w-10 h-10 object-contain"
                onError={(e) => (e.currentTarget.src = '/icons/placeholder.png')}
                style={{ display: 'block' }}
              />
            </div>

            <div className="text-sm font-medium text-gray-200 dark:text-gray-100">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
