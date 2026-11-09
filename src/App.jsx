import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

const THEME_COLOR = { dark: '#060a14', light: '#f6f2ea' };

export default function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('umi-theme', theme);
    } catch (error) {
      // Private mode can refuse storage; the in-memory theme still works.
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLOR[theme]);
  }, [theme]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <span
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <Nav
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
        }
      />

      <main id="main">
        <Hero />
        <Projects />
        <Founder />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
