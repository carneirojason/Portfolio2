# Deploying to GitHub Pages

This project is set up to deploy to **GitHub Pages** via GitHub Actions.

## 1. Enable GitHub Pages

1. Open your repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

## 2. Push to trigger deployment

- Push (or merge) to the **`main`** branch.
- The workflow **Deploy to GitHub Pages** will run: it builds the static site and deploys it.

If your default branch is **`master`** instead of `main`, edit `.github/workflows/deploy-gh-pages.yml` and change `branches: ["main"]` to `branches: ["master"]`.

## 3. Your site URL

- **Project site** (repo name e.g. `Portfolio`):  
  `https://<username>.github.io/Portfolio/`
- **User/org site** (repo name `<username>.github.io`):  
  `https://<username>.github.io/`

The workflow sets the base path automatically from your repo name.

## Local build (optional)

To test the static export locally:

```bash
GITHUB_PAGES=true BASE_PATH=/Portfolio npm run build
```

Then serve the `out` folder (e.g. `npx serve out`). Use your actual repo name for `BASE_PATH`; use `BASE_PATH=` for a user site.
