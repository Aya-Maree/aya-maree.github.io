import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Leadership from './components/Leadership.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee text="SELECTED WORK" />
        <Projects />
        <Marquee text="experience" italic tone="accent" />
        <Experience />
        <Leadership />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
