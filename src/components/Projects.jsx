import { featuredProjects, githubProjects, profile, showGithubProjects } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Projects() {
  return (
    <section id="work" className="work">
      <div className="container container--narrow work__inner">
        <h2 className="visually-hidden">Selected work</h2>
        <div className="work__grid">
          {featuredProjects.map((p) => (
            <Reveal
              as="article"
              className={`project-card ${p.image ? 'project-card--featured' : ''}`}
              key={p.title}
            >
              {p.image && (
                <img
                  className="project-card__img"
                  src={p.image}
                  alt={p.imageAlt || ''}
                  loading="lazy"
                  style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                />
              )}
              <div className="project-card__body">
                {p.badge && <p className="project-card__badge">{p.badge}</p>}
                <p className="eyebrow">{p.eyebrow}</p>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
                {p.stack.length > 0 && <p className="project-card__stack">{p.stack.join(' · ')}</p>}
                {(p.link || p.secondaryLink) && (
                  <div className="project-card__links">
                    {p.link && (
                      <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer">
                        {p.linkLabel || 'View project →'}
                      </a>
                    )}
                    {p.secondaryLink && (
                      <a className="project-card__link" href={p.secondaryLink} target="_blank" rel="noreferrer">
                        {p.secondaryLabel || 'Code →'}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {!showGithubProjects && (
          <div className="work__more">
            <p className="work__more-text">These are a few highlights. There's more on my GitHub.</p>
            <a className="btn btn--light" href={profile.github} target="_blank" rel="noreferrer">
              More projects on GitHub →
            </a>
          </div>
        )}

        {showGithubProjects && (
          <>
            <h3 className="work__more-title">
              MORE FROM <em>GitHub</em>
            </h3>
            <div className="repo-list">
              {githubProjects.map((r) => (
                <a className="repo" href={r.url} key={r.name} target="_blank" rel="noreferrer">
                  <span className="repo__name">{r.name} ↗</span>
                  <span className="repo__desc">{r.description}</span>
                  <span className="repo__stack">{r.stack}</span>
                </a>
              ))}
            </div>
            <a className="work__all" href={profile.github} target="_blank" rel="noreferrer">
              See everything on GitHub →
            </a>
          </>
        )}
      </div>
    </section>
  );
}
