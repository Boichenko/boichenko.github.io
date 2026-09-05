# Hanna Boychenko portfolio

Personal portfolio built with React and Vite and deployed to GitHub Pages.

## Requirements

- Node.js 24.20.0 (see `.nvmrc`)
- npm 11.19.0 (see `packageManager` in `package.json`)
- Python 3.13 with the dependencies in `requirements.txt`

## Run locally

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
npm ci
npm run dev
```

## Resume content

Edit `src/data/resume.json`. It is the single content source for the website,
the prerendered HTML, and the downloadable PDF.

`npm run build` regenerates the PDF, builds the React application, and inserts
semantic resume content into `dist/index.html` for search engines and no-JavaScript clients.
To regenerate only the PDF, run `npm run generate:cv`.

## Quality checks

```bash
npm run lint
npm run build
npm run check
```

`npm run check` runs the same lint and production-build checks used by GitHub Actions.
It also verifies that the committed PDF matches `resume.json`.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages. Pull requests run the same checks without deploying.
The workflow installs both the Node and Python dependencies required for a reproducible build.
