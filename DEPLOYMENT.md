# Deployment Guide — GitHub Pages + Custom Domain

This project auto-deploys to GitHub Pages via GitHub Actions on every push to `main`. This doc covers the **one-time setup** needed on GitHub and with your DNS provider.

Target: **https://bijaycomputers.epabitra.com** → repo `https://github.com/epabitra/bijaycomputers`

---

## 1. Push this repo to GitHub

If not already done:

```bash
git remote add origin https://github.com/epabitra/bijaycomputers.git
git add -A
git commit -m "Initial commit: Bijaya Computer website"
git push -u origin main
```

## 2. Enable GitHub Pages (Actions-based)

1. Go to the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch").
3. That's it — the workflow at `.github/workflows/deploy.yml` will run automatically on the next push to `main` and publish `dist/` to Pages.
4. Check the **Actions** tab to watch the `Deploy to GitHub Pages` workflow run. Once green, your site is live at the default `https://epabitra.github.io/bijaycomputers/` URL first, then at your custom domain once step 3–4 below are done.

## 3. Configure the custom domain on GitHub

1. Repo → **Settings → Pages → Custom domain**.
2. Enter `bijaycomputers.epabitra.com` and click **Save**.
   - This writes/confirms the `CNAME` file (already committed at `public/CNAME` in this repo, so it should auto-detect it).
3. Leave this tab open — you'll come back to tick **Enforce HTTPS** once DNS propagates (see step 5).

## 4. Configure DNS at your domain provider (for `epabitra.com`)

Since `bijaycomputers` is a **subdomain**, add a single **CNAME record** at whichever provider manages DNS for `epabitra.com`:

| Type  | Host / Name       | Value / Points to      | TTL  |
|-------|--------------------|-------------------------|------|
| CNAME | `bijaycomputers`   | `epabitra.github.io.`   | Auto / 3600 |

Notes:
- Use `epabitra.github.io` (your GitHub **username**, not the repo name) as the target — GitHub Pages resolves the correct repo from the CNAME file in the repo itself.
- Some DNS providers require the trailing dot (`epabitra.github.io.`), some don't — either works.
- Do **not** add an A record for a subdomain like this — CNAME is correct since it's not the domain apex (`epabitra.com` itself).

## 5. Wait for DNS + enable HTTPS

1. DNS propagation can take a few minutes to a few hours.
2. Check propagation: `dig bijaycomputers.epabitra.com CNAME` (or use https://dnschecker.org).
3. Once GitHub detects the DNS is correctly pointed (Settings → Pages will show a green check next to the domain, no longer an error), tick **Enforce HTTPS**. GitHub auto-provisions a Let's Encrypt certificate — this can take up to ~24 hours the first time, but is usually much faster.

## 6. Verify

- Visit `https://bijaycomputers.epabitra.com` — the homepage should load.
- Click through to a nested route, e.g. `https://bijaycomputers.epabitra.com/services/laptop-repair`, then **hard refresh**. It should load correctly (not a 404) — this confirms the SPA fallback (`public/404.html`) is working.
- Check `https://bijaycomputers.epabitra.com/nonexistent-page` renders the site's own styled 404 page.

---

## How it works

- **`vite.config.js`** uses the default `base: '/'`, correct for a custom domain served from the root (not a `/reponame/` subpath).
- **`public/CNAME`** — copied into `dist/` on every build, tells GitHub Pages which custom domain to serve.
- **`public/404.html`** + the inline script in `index.html` — GitHub Pages has no server-side rewrites, so a direct load of `/services/laptop-repair` would 404. This pair of scripts (the ["SPA GitHub Pages" technique](https://github.com/rafgraph/spa-github-pages)) redirects the 404 back through `index.html` with the original path encoded, then restores the clean URL client-side before React Router mounts.
- **`.github/workflows/deploy.yml`** — runs `npm ci && npm run build`, uploads `dist/` as a Pages artifact, and deploys it. No manual `gh-pages` branch or personal access token needed — it uses GitHub's built-in `GITHUB_TOKEN` and OIDC-based Pages deployment.

## Making future updates

Just commit and push to `main` — the workflow redeploys automatically:

```bash
git add -A
git commit -m "Update pricing page"
git push
```

## Rolling back

Use the **Actions** tab → find a previous successful "Deploy to GitHub Pages" run → **Re-run jobs**, or `git revert` the offending commit and push.
