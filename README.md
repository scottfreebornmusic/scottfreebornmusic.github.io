# scottfreeborn.com

Single-page promo site — **Vite + React**, static, hosted on **GitHub Pages**. No backend.

## Run it locally
```bash
npm install      # first time only
npm run dev      # http://localhost:5173
```

## Edit the content (no code needed)
Everything lives in **`src/data/site.js`**: bio, tagline, shows, listen links,
YouTube video id, social links, booking email, and the Formspree id.

## Brand assets
In **`public/brand/`** — `logo.png`, `banner.png`, `wordmark.png`, `divider.png`,
`raven-guitar.png`, `wallpaper.png`, etc. Swap files (keep the names) to update art.

## Make the booking form live
1. Create a free form at [formspree.io](https://formspree.io).
2. Paste its id into `formspreeId` in `src/data/site.js`.

## Drifting clouds
Placeholder soft CSS clouds for now (`src/components/Clouds.jsx`). To use your own:
drop transparent cloud PNGs in `public/brand` and swap the `<div>`s for `<img>`s.

## Deploy (GitHub Pages)
1. Push this folder to a GitHub repo (default branch `main`).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
4. `public/CNAME` already points at `scottfreeborn.com` — set your DNS:
   - apex `scottfreeborn.com` → A records to GitHub Pages IPs
   - `www` → CNAME to `<username>.github.io`
