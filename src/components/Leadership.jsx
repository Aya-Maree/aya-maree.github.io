import teamImg from '../assets/msa-team.jpg';
import { leadership } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Leadership() {
  return (
    <section id="leadership" className="leadership">
      <div className="container container--narrow leadership__grid">
        <Reveal className="leadership__photo-wrap">
          <img
            className="leadership__photo"
            src={teamImg}
            alt="The Western MSA executive team in matching navy MSA quarter-zips"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="leadership__body">
          <p className="script">four years with</p>
          <h2 className="section-title">{leadership.org.toUpperCase()}</h2>
          <p className="leadership__role">{leadership.role}</p>
          <p>{leadership.summary}</p>

          <ol className="role-path" aria-label="Roles held, in order">
            {leadership.path.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>

          <div className="highlights">
            {leadership.highlights.map((h) => (
              <div className="highlight" key={h.title}>
                <h3 className="highlight__title">{h.title}</h3>
                {h.image && (
                  <img className="highlight__img" src={h.image} alt={h.imageAlt || ''} loading="lazy" />
                )}
                <p>{h.text}</p>
                {h.quote && (
                  <blockquote className="highlight__quote">
                    “{h.quote}”<cite>Aya, quoted in The Gazette</cite>
                  </blockquote>
                )}
                {h.press && (
                  <div className="press">
                    <p className="label">In the press</p>
                    <ul className="press__list">
                      {h.press.map((a) => (
                        <li key={a.url}>
                          <a className="press__item" href={a.url} target="_blank" rel="noreferrer">
                            <span className="press__title">{a.title} ↗</span>
                            <span className="press__meta">
                              {a.outlet} · {a.date}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
