# Hosting Your Portfolio for Free

Your portfolio is a **fully static website** — the `backend/` folder is included for
completeness but is **not required** to run the site (the page uses no API calls).

## What's included

- `frontend/` — the complete React source (all pages, styles, config)
- `frontend/public/Harmeet_Kour_CV.pdf` — your CV, wired to the "Download CV" buttons
- `backend/` — FastAPI template (optional, not needed for the portfolio)
- `memory/PRD.md` — project documentation

## Option A — Vercel (recommended, free)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → "Add New Project" → import the repo
3. Set **Root Directory** to `frontend`
4. Framework preset: **Create React App** (auto-detected)
5. Deploy — done. You get a free `*.vercel.app` URL (custom domain supported free)

## Option B — Netlify (free)

1. Push to GitHub, then https://app.netlify.com → "Add new site" → import repo
2. Base directory: `frontend`, Build command: `yarn build`, Publish directory: `frontend/build`
3. Deploy — free `*.netlify.app` URL

## Option C — GitHub Pages (free)

```bash
cd frontend
yarn install
yarn add --dev gh-pages
# add to package.json:  "homepage": "https://<your-username>.github.io/<repo>",
#   scripts: "predeploy": "yarn build", "deploy": "gh-pages -d build"
yarn deploy
```

## Run locally

```bash
cd frontend
yarn install
yarn start        # dev server on http://localhost:3000
yarn build        # production build in frontend/build/
```

The `frontend/.env` value `REACT_APP_BACKEND_URL` is unused by the portfolio —
you can leave it as-is or delete it for self-hosting.

## Editing your content later

All text (roles, skills, projects, links, email) lives in one file:
`frontend/src/data/profile.js` — edit, rebuild, redeploy.
Remember to replace the LinkedIn placeholder URL there with your real profile.
