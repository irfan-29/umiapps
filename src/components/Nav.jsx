import { useEffect, useState } from 'react';
import UmiLogo from './UmiLogo';
import Icon from './Icon';
import { navLinks, site } from '../data/site';

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-brand" href="#top" aria-label="UMI Apps — back to top">
          <UmiLogo wordmark />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary nav-cta" href={`mailto:${site.email}`}>
            Start a project
            <Icon name="arrow" size={17} />
          </a>

          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <button
            type="button"
            className="icon-btn nav-menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav-mobile${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a
          className="btn btn-primary"
          href={`mailto:${site.email}`}
          onClick={close}
        >
          Start a project
          <Icon name="arrow" size={17} />
        </a>
      </div>
    </header>
  );
}
