import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import { site, socials } from '../data/site';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch (error) {
      // Older browsers (or a denied permission) still get a working fallback.
      const field = document.createElement('textarea');
      field.value = site.email;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand('copy');
      } catch (fallbackError) {
        // Nothing more to do; the mailto link beside this button still works.
      }
      document.body.removeChild(field);
    }

    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>
              Have an idea? <span className="grad-text">Let&apos;s make it real.</span>
            </h2>
            <p>
              Whether it&apos;s a collaboration, a product idea or a website that
              needs building — my inbox is open. Tell me what you&apos;re working
              on and I&apos;ll get back to you.
            </p>

            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Say hello
                <Icon name="arrow" size={17} />
              </a>
              <button
                type="button"
                className={`btn btn-ghost${copied ? ' is-copied' : ''}`}
                onClick={copyEmail}
              >
                <Icon name={copied ? 'check' : 'copy'} size={17} />
                {copied ? 'Copied!' : 'Copy email'}
              </button>
            </div>

            <p className="contact-note">Usually replies within a day.</p>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>

          <div className="contact-side">
            <a className="contact-email" href={`mailto:${site.email}`}>
              <span className="contact-email-icon">
                <Icon name="mail" size={21} />
              </span>
              <span>
                <small>Email</small>
                <strong>{site.email}</strong>
              </span>
              <Icon name="arrow" size={18} />
            </a>

            <div className="contact-socials">
              {socials.map((social) => (
                <a
                  key={social.href}
                  className="social-link"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon name={social.icon} size={17} />
                </a>
              ))}
            </div>

            <div className="contact-card">
              <Icon name="spark" size={18} />
              <p>
                Open to <strong>collaborations</strong>, product ideas and
                freelance builds.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
