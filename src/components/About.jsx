import gradImg from '../assets/about-grad.jpg';
import windowImg from '../assets/about-window.jpg';
import { about } from '../data.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="about container container--narrow">
      <Reveal className="about__top">
        <div className="about__heading">
          <p className="script">Hey, I'm Aya</p>
          <h2 className="about__headline">{about.headline}</h2>
        </div>
        <figure className="polaroid">
          <img src={gradImg} alt="Aya at graduation on Western's campus, holding white roses" loading="lazy" />
        </figure>
      </Reveal>

      <div className="about__grid">
        <Reveal className="about__left">
          <p className="pull-quote">{about.pullQuote}</p>
          <img
            className="about__portrait"
            src={windowImg}
            alt="Aya holding her Western University degree"
            loading="lazy"
          />
        </Reveal>
        <Reveal className="about__right">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <a href="#contact" className="btn btn--accent">
            Let's connect
          </a>
        </Reveal>
      </div>
    </section>
  );
}
