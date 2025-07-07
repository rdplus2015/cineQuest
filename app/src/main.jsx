import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function ThemedApp() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    // Attendre une frame avant d'afficher pour éviter le flash
    requestAnimationFrame(() => {
      setReady(true);
    });
  }, []);

  if (!ready) {
    return <div className="opacity-0" />; // écran neutre pendant un instant
  }

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>
);
