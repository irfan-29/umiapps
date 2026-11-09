import Reveal from './Reveal';
import Icon from './Icon';
import { site, socials } from '../data/site';

const facts = [
  {
    term: 'Now',
    icon: 'briefcase',
    detail: 'Member Technical Staff at Zoho',
  },
  {
    term: 'Education',
    icon: 'cap',
    detail: 'B.E. Computer Science & Engineering, KCT (2025)',
  },
  {
    term: 'Based in',
    icon: 'pin',
    detail: 'Salem, Tamil Nadu, India',
  },
];

export default function Founder() {
  return (
    <section className="section founder" id="founder">
      <div className="container founder-grid">
        <Reveal className="founder-photo-wrap">
          <figure className="founder-photo">
            <img
              src="/founder.jpg"
              alt="Mohammed Irfan U, founder and CEO of UMI Apps"
              width="1000"
              height="1250"
              loading="lazy"
              decoding="async"
            />
            <span className="founder-tag">
              <span className="founder-tag-dot" />
              Founder &amp; CEO
            </span>
            <figcaption className="founder-chip">
              <Icon name="briefcase" size={15} />
              Software Developer at Zoho
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="founder-copy" delay={110}>
          <p className="eyebrow">Behind the apps</p>
          <h2>Mohammed Irfan U</h2>
          <p className="founder-role">Founder &amp; CEO · UMI Apps</p>

          <p>
            I&apos;m a software developer and the founder of UMI Apps. By day I
            build reliable software at Zoho with Java and MySQL; the rest of the
            time I design and ship small, useful apps that make everyday tasks a
            little easier.
          </p>
          <p>
            I studied Computer Science &amp; Engineering at Kumaraguru College of
            Technology and I&apos;m based in Salem, Tamil Nadu. UMI Apps is where
            those side projects grow into products people can actually use —
            Hasanath, our flagship, began as one of them.
          </p>

          <blockquote>
            “Good software should feel obvious — the kind you use once and never
            need a manual for.”
          </blockquote>

          <dl className="founder-facts">
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt>
                  <Icon name={fact.icon} size={14} />
                  {fact.term}
                </dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="founder-socials">
            {socials.map((social) => (
              <a
                key={social.href}
                className="social-link"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.founder} on ${social.label}`}
                title={social.label}
              >
                <Icon name={social.icon} size={17} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
