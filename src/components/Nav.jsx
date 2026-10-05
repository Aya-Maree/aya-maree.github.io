import { useState } from 'react';
import { profile } from '../data.js';
import { GitHubIcon, LinkedInIcon, MenuIcon } from './Icons.jsx';

const links = [
  ['About', '#about'],
  ['Projects', '#work'],
  ['Experience', '#experience'],
  ['Leadership', '#leadership'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <nav className="container nav__inner" aria-label="Main">
        <a href="#top" className="nav__logo" onClick={close}>
          AYA MAREE
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} />
        </button>

        <div id="nav-menu" className={`nav__menu ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav__link" onClick={close}>
              {label}
            </a>
          ))}
          <div className="nav__icons">
            <a href={profile.github} className="nav__icon" aria-label="GitHub" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} className="nav__icon" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <a href={profile.resume} className="btn btn--accent btn--small" download>
            Download résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
