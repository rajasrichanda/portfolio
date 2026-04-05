import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or prefer dark mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // Default to dark mode
    return true;
  });

  useEffect(() => {
    // Update localStorage and DOM
    localStorage.setItem('darkMode', isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <HelmetProvider>
      <div className={isDark ? 'dark' : ''}>
        <div className={isDark ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'}>
          <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Experience isDark={isDark} />
          <Contact isDark={isDark} />
          <Footer isDark={isDark} />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
