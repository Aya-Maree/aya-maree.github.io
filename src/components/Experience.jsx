import { experience } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section id="experience" className="experience container container--narrow">
      <h2 className="visually-hidden">Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <Reveal as="li" className="timeline__item" key={job.org}>
            <p className="timeline__dates">{job.dates}</p>
            <div className="timeline__body">
              <h3 className="timeline__role">
                {job.role} <em>— {job.org}</em>
              </h3>
              <p>{job.summary}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
