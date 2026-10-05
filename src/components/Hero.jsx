import heroImg from '../assets/hero-photo.jpg';
import { heroCallouts } from '../data.js';
import { ArrowSquiggle, ArrowCurve } from './Icons.jsx';

export default function Hero() {
  const [first, second] = heroCallouts.left;
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__name">
          HI, <em>I'm</em> AYA
        </h1>

        <div className="hero__stage">
          <div className="hero__side hero__side--left">
            <p className="callout">
              {first[0]}{' '}
              <br />
              {first[1]}
              <ArrowSquiggle />
            </p>
            <p className="callout callout--indent">
              {second[0]}{' '}
              <br />
              {second[1]}
              <ArrowCurve />
            </p>
          </div>

          <img
            className="hero__photo"
            src={heroImg}
            alt="Aya Maree smiling, sitting on a stool"
            width="760"
            height="1739"
          />

          <div className="hero__side hero__side--right">
            <p className="callout callout--right">
              <ArrowSquiggle flip />
              {heroCallouts.right[0]}{' '}
              <br />
              {heroCallouts.right[1]}
            </p>
            <a href="#work" className="btn btn--accent">
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
