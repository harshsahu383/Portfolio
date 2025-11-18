// src/components/Skills.jsx
import React, { useState } from "react";

export default function Skills({ skills = [], defaultVisible = 5 }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? skills : skills.slice(0, defaultVisible);

  return (
    <section id="skills" className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Skills</h3>
        <button
          onClick={() => setShowAll((s) => !s)}
          className="text-sm underline"
        >
          {showAll ? "Hide" : "See All"}
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        Technologies and tools I use regularly.
      </p>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {visible.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center gap-3 shadow-sm transition-all hover:scale-[1.03]"
            style={{
              animationName: "slideInFromLeft",
              animationDuration: "350ms",
              animationTimingFunction: "ease-out",
              animationFillMode: "both",
              animationDelay: `${index * 100}ms`,
            }}
          >
            {}
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 object-contain"
              onError={(e) => (e.currentTarget.src = "/icons/placeholder.png")}
            />

            <p className="text-sm font-medium text-gray-900 dark:text-white">

              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
