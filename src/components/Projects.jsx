import AppGlyph from './AppGlyph';
import Reveal from './Reveal';
import Icon from './Icon';
import { projects, site } from '../data/site';

const linkIcon = { live: 'external', code: 'code', video: 'play' };

function ProjectCard({ project, index }) {
  const hasLive = project.links.some((link) => link.kind === 'live');
  const status = hasLive ? 'Live' : 'Open source';

  return (
    <Reveal
      as="article"
      delay={index * 70}
      className={`project-card${project.flagship ? ' is-flagship' : ''}`}
    >
      <div
        className="project-cover"
        style={{
          '--p1': project.colors[0],
          '--p2': project.colors[1],
        }}
      >
        {project.flagship && (
          <span className="project-flag">
            <Icon name="spark" size={12} />
            Flagship
          </span>
        )}
        <span
          className={`project-glyph${
            project.flagship ? ' project-glyph--hasanath' : ''
          }`}
        >
          <AppGlyph name={project.slug} />
        </span>
        <span className={`project-status${hasLive ? ' is-live' : ''}`}>
          <span className="project-status-dot" />
          {status}
        </span>
      </div>

      <div className="project-body">
        <span className="project-kind">{project.kind}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <ul className="project-tags" aria-label={`${project.name} categories`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="project-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={linkIcon[link.kind] || 'external'} size={15} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>
              Thoughtful software, <span className="grad-text">real problems</span>{' '}
              solved.
            </h2>
          </div>
          <p className="section-lede">
            Hasanath is the flagship — a calm home for salah, Qur’an and good
            deeds. The rest of the shelf follows the same idea: small problems,
            carefully built, some shipped and some open source.
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}

          <Reveal
            as="a"
            delay={projects.length * 70}
            className="project-card project-card--cta"
            href={`mailto:${site.email}`}
          >
            <div className="project-cta">
              <span className="project-cta-icon">
                <Icon name="spark" size={21} />
              </span>
              <span className="project-kind">Your idea next</span>
              <h3>Have something worth building?</h3>
              <p>
                Bring the problem, the sketch or the half-finished idea — and
                let&apos;s shape the next product on this shelf.
              </p>
              <span className="project-link">
                Start a conversation
                <Icon name="arrow" size={15} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
