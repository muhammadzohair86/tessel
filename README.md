# Tessel

A responsive, frontend-only website for **Tessel**, a fictional digital studio that offers brand identity, app and website design, content and growth marketing. A tessel is a single tile in a mosaic, which is the idea behind both the name and the visual style: services that fit together into one picture.

All company details, people, figures and projects are fictional placeholders created for demonstration.

## Features

- Home page with a tile-collage hero, service cards, animated figures and selected work
- Services page with a detail page for each of the six services
- Work page with category filter, project preview dialog (keyboard accessible, previous/next) and a detail page for every project
- About page with working principles and team
- Contact form with inline validation and a simulated success message (nothing is sent or stored)
- Responsive layout for desktop, tablet and mobile, with reduced-motion preferences respected

## Technologies

React 18, React Router 6 (`HashRouter`), Vite 5, plain CSS, Fontsource variable fonts. No backend, database or API.

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/   Header, Footer, Mosaic, WorkModal, ScrollToTop, shared sections
  pages/        Home, Services, ServiceDetail, Work, WorkDetail, About, Contact, Credits, NotFound
  data/         Services, work, team and site details (edit these to customise)
  hooks/        Page title and count-up hooks
  assets/images Photography
  styles.css    Design tokens and styles
```

## Deploy to Netlify

The site uses hash-based routes (for example `/#/work`), so pages work on direct visits and refreshes without redirect rules. `netlify.toml` already sets the build command (`npm run build`) and publish directory (`dist`).

1. Push the project to a GitHub repository.
2. In Netlify choose **Add new site, Import an existing project**, then connect the repository.
3. Confirm the build command `npm run build` and publish directory `dist`, then deploy.

## Customising

- Studio name, contact details and navigation: `src/data/site.js`, `src/components/Header.jsx`, `src/components/Footer.jsx`
- Colours and fonts: the `:root` block at the top of `src/styles.css`
- Services and projects: `src/data/services.js` and `src/data/work.js`

## Credits and licences

Third-party attributions are listed in [ATTRIBUTION.md](ATTRIBUTION.md) and on the website's Credits page.
