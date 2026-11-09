import UmiLogo from './UmiLogo';
import Icon from './Icon';
import { navLinks, projects, site, socials } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <UmiLogo wordmark animated={false} />
          <p>{site.tagline}</p>
          <p className="footer-note">
            An independent studio by {site.founder}, building calm software for
            everyday life.
          </p>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`}>Email us</a>
        </div>

        <div className="footer-col">
          <h3>Products</h3>
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h3>Elsewhere</h3>
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
              <Icon name="arrow" size={13} />
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} UMI Apps. All rights reserved.</span>
        <span>
          Flagship:{' '}
          <a href={site.hasanath} target="_blank" rel="noopener noreferrer">
            Hasanath
          </a>{' '}
          — Qur&apos;an, salah &amp; good deeds tracker.
        </span>
      </div>
    </footer>
  );
}
