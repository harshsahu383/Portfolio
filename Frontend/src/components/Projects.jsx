import React, { useState, useRef, useEffect } from 'react';

export default function Projects({ projects = [] }) {
  const [preview, setPreview] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!preview && videoRef.current) {
      try { videoRef.current.pause(); videoRef.current.currentTime = 0; } catch {}
    } else {
      setImgIndex(0);
    }
  }, [preview]);

  function nextImage() {
    if (!preview || !preview.images) return;
    setImgIndex(i => (i + 1) % preview.images.length);
  }
  function prevImage() {
    if (!preview || !preview.images) return;
    setImgIndex(i => (i - 1 + preview.images.length) % preview.images.length);
  }

  return (
    <section id="projects" className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Selected Projects</h3>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 gap-6">
        {projects.map(p => {
          const thumb = p.poster || (p.images && p.images[0]) || '/projects/placeholder.jpg';
          return (
            <article key={p.id} className="bg-white/80 dark:bg-gray-900/70 rounded-xl overflow-hidden shadow-lg">
              <div className="h-40 w-full overflow-hidden">
                <img src={thumb} alt={p.title + ' thumbnail'} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.description}</p>
                <div className="mt-3 flex gap-3">
                  <button onClick={() => setPreview(p)} className="px-3 py-1 underline text-sm">Preview</button>
                  {p.src && <a href={p.src} target="_blank" rel="noreferrer" className="px-3 py-1 underline text-sm">Source</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-1 underline text-sm">Live</a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <h4 className="font-semibold">{preview.title}</h4>
              <button onClick={() => setPreview(null)} className="px-2 py-1 border rounded">Close</button>
            </div>

            <div className="w-full bg-gray-100 dark:bg-gray-800">
              {preview.video ? (
                <div className="w-full h-64 md:h-96 flex items-center justify-center bg-black">
                  <video
                    ref={videoRef}
                    src={preview.video}
                    poster={preview.poster}
                    controls
                    autoPlay
                    playsInline
                    muted
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                (preview.images && preview.images.length > 0) ? (
                  <div className="relative w-full h-64 md:h-96">
                    <img src={preview.images[imgIndex]} alt={`${preview.title} screenshot`} className="w-full h-full object-cover" />
                    {preview.images.length > 1 && (
                      <>
                        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded">Prev</button>
                        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded">Next</button>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-64 md:h-96 flex items-center justify-center text-sm text-gray-500">No preview available</div>
                )
              )}
            </div>

            <div className="p-4 text-sm text-gray-700 dark:text-gray-300">
              <p>{preview.description}</p>
              <div className="mt-3">Tech: {preview.tech.join(', ')}</div>
              <div className="mt-4 flex gap-3">
                {preview.src && <a href={preview.src} target="_blank" rel="noreferrer" className="underline">Source</a>}
                {preview.live && <a href={preview.live} target="_blank" rel="noreferrer" className="underline">Live</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
