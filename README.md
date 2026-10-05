# Aya Maree — Portfolio

Personal website built with **React + Vite**. Navy & Rose editorial design.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open the link it prints (usually http://localhost:5173).

## Edit the content

Almost everything you'd want to change — bio, projects, jobs, skills, links — is in **`src/data.js`**.

- **Add a project link:** set `link: 'https://…'` on a project in `featuredProjects` and a "View project →" link appears.
- **Swap photos:** replace files in `src/assets/` (keep the same names).
- **Update your résumé:** replace `public/Aya-Maree-Resume.pdf`.
- **Colours:** change the variables at the top of `src/index.css`.

## Put it online (GitHub Pages, free)

1. Create a new repo on GitHub, e.g. `aya-maree.github.io` (that name gives you the URL `https://aya-maree.github.io`), or any name you like.
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Aya-Maree/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, open the repo → **Settings → Pages** → under **Source** pick **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes the site on every push to `main`. After a minute or two it's live.

## Project structure

```
src/
  data.js            ← all the text and links
  index.css          ← styles and colour theme
  App.jsx            ← page section order
  components/        ← Nav, Hero, About, Projects, Experience, Skills, Contact…
  assets/            ← photos
public/
  Aya-Maree-Resume.pdf
```
