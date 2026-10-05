# Aya Maree · Portfolio

My personal portfolio site: projects, experience, and leadership from my Software Engineering degree at Western University and beyond.

**🔗 Live site: [aya-maree.github.io](https://aya-maree.github.io)**

---

## About the site

A single-page portfolio with an editorial look: oversized serif type, a navy and rose palette, and real photos from the events and projects it describes.

**Sections**

- **Hero:** intro, quick highlights, and a résumé download
- **About:** background and what I enjoy working on
- **Selected work:** featured projects, including my capstone (AI biometric ID for livestock), MemoryLane (Sun Life Best Health Hack winner) and Nourish Path
- **Experience:** co-op and work history
- **Leadership:** four years with Western MSA, with links to press coverage
- **Skills and education**
- **Contact**

**Details**

- Responsive layout that adapts from phone to wide desktop
- Mobile navigation menu
- Subtle scroll animations that respect the "reduce motion" setting
- Accessible markup: semantic HTML, alt text, keyboard focus styles, skip link
- All content kept in one data file, so updating the site doesn't mean touching components

## Built with

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev) for development and builds
- Plain CSS with custom properties (no UI framework)
- Google Fonts: Bodoni Moda, DM Mono, Mrs Saint Delafield
- GitHub Actions and GitHub Pages for deployment

## Run it locally

**Requirements:** [Node.js](https://nodejs.org) 18 or newer, plus Git.

```bash
# 1. Clone the repo
git clone https://github.com/Aya-Maree/Aya-Maree.github.io.git
cd Aya-Maree.github.io

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser. The page reloads automatically when you save a file.

### Other commands

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Start the local dev server with hot reload            |
| `npm run build`   | Build an optimized production version into `dist/`    |
| `npm run preview` | Serve the production build locally to check it       |

## Project structure

```
├── index.html               Page shell, fonts and meta tags
├── public/
│   └── Aya-Maree-Resume.pdf Résumé linked from the site
├── src/
│   ├── data.js              All site content: text, projects, jobs, links
│   ├── index.css            Styles and colour theme
│   ├── App.jsx              Section order
│   ├── main.jsx             React entry point
│   ├── assets/              Photos
│   └── components/
│       ├── Nav.jsx          Sticky header and mobile menu
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Leadership.jsx
│       ├── Skills.jsx       Skills and education
│       ├── Contact.jsx
│       ├── Marquee.jsx      Large scrolling section titles
│       ├── Reveal.jsx       Scroll-in animation wrapper
│       └── Icons.jsx
└── .github/workflows/
    └── deploy.yml           Builds and publishes to GitHub Pages
```

## Updating content

Almost everything shown on the site lives in **`src/data.js`**:

- **Projects:** add an entry to `featuredProjects`. Give it an `image` to make it a large photo card, and a `link` to add a button.
- **Experience and leadership:** edit the `experience` and `leadership` objects.
- **Links and email:** edit `profile` at the top of the file.
- **Photos:** replace files in `src/assets/`.
- **Résumé:** replace `public/Aya-Maree-Resume.pdf`, keeping the same file name.
- **Colours:** change the variables at the top of `src/index.css`.

## Deployment

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`. It installs dependencies, runs `npm run build`, and publishes the `dist/` folder to GitHub Pages. The site updates about a minute after a push.

To set this up on a fresh repo: **Settings → Pages → Source → GitHub Actions**.

## Contact

- **Email:** amaree@uwo.ca
- **LinkedIn:** [linkedin.com/in/aya-maree](https://www.linkedin.com/in/aya-maree/)
- **GitHub:** [github.com/Aya-Maree](https://github.com/Aya-Maree)

---

© Aya Maree. The photos and written content are personal; please don't reuse them. Feel free to take inspiration from the code.
