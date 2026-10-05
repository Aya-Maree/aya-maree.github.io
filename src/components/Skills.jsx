import crestImg from '../assets/edu-crest.jpg';
import { skills, education } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container container--narrow skills__grid">
        <Reveal>
          <p className="script">my toolbox</p>
          <h2 className="section-title">SKILLS</h2>
          <dl className="skill-groups">
            {skills.map((g) => (
              <div key={g.label}>
                <dt className="label">{g.label}</dt>
                <dd>{g.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="skills__cards">
          <Reveal as="article" className="info-card info-card--photo">
            <img src={crestImg} alt="Aya in front of the Western University crest" loading="lazy" />
            <div className="info-card__body">
              <p className="label">Education</p>
              <h3 className="info-card__title">{education.degree}</h3>
              <p>{education.detail}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
