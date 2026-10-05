import laptopImg from '../assets/contact-laptop.jpg';
import { profile } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="container container--narrow contact__inner">
        <img className="contact__photo" src={laptopImg} alt="Aya laughing while working on her laptop" loading="lazy" />
        <p className="script">say hello</p>
        <h2 className="contact__title">
          LET'S <em>work</em> TOGETHER
        </h2>
        <p className="contact__lede">
          Open to full-time roles across software development, business and systems analysis, web, IT and
          digital workplace. If your team solves problems with technology, I'd love to talk.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn--light">
          {profile.email}
        </a>
        <div className="contact__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.resume} download>Résumé</a>
        </div>
      </Reveal>
      <footer className="container container--narrow footer">
        <span>© {new Date().getFullYear()} {profile.name.toUpperCase()}</span>
        <span>{profile.location.toUpperCase()}</span>
      </footer>
    </section>
  );
}
