import React, { useState } from "react";

export default function Skills({ tech = [], tools = [] }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);

  const visibleTech = showAllTech ? tech : tech.slice(0, 5);
  const visibleTools = showAllTools ? tools : tools.slice(0, 5);

  return (
    <section id="skills" className="mt-16 mb-10">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Technologies</h3>
        <button
          onClick={() => setShowAllTech((p) => !p)}
          className="text-sm underline"
        >
          {showAllTech ? "Hide" : "See All"}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {visibleTech.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center gap-3 shadow-sm transition-all hover:scale-[1.03]"
            style={{
              animationName: "slideInFromLeft",
              animationDuration: "360ms",
              animationFillMode: "both",
              animationDelay: `${index * 90}ms`,
            }}
          >
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

      {}
      <div className="flex items-center justify-between mt-12">
        <h3 className="text-xl font-semibold">Tools</h3>
        <button
          onClick={() => setShowAllTools((p) => !p)}
          className="text-sm underline"
        >
          {showAllTools ? "Hide" : "See All"}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {visibleTools.map((tool, index) => (
          <div
            key={tool.name}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center gap-3 shadow-sm transition-all hover:scale-[1.03]"
            style={{
              animationName: "slideInFromLeft",
              animationDuration: "360ms",
              animationFillMode: "both",
              animationDelay: `${index * 90}ms`,
            }}
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-12 h-12 object-contain"
              onError={(e) => (e.currentTarget.src = "/icons/placeholder.png")}
            />
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
