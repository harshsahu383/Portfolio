import React, { useEffect, useState } from 'react';

export default function ProfileImage({ lightSrc='/images/profile1.jpeg', darkSrc='/images/profile3.jpeg', alt='Profile', className='' }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`theme-image ${className}`} aria-hidden="false" role="img" style={{ position: 'relative' }}>
      <img
        src={lightSrc}
        alt={alt + ' light'}
        className={theme === 'light' ? 'visible' : ''}
        style={{ zIndex: theme === 'light' ? 2 : 1 }}
      />
      <img
        src={darkSrc}
        alt={alt + ' dark'}
        className={theme === 'dark' ? 'visible' : ''}
        style={{ zIndex: theme === 'dark' ? 2 : 1 }}
      />
    </div>
  );
}
