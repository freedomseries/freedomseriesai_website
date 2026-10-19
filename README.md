# Freedom Series — site directions

Three design directions for the new Freedom Series site, built on the Freedom design system, plus a page that introduces them.

| Path | What it is |
| --- | --- |
| `index.html` | Share page: the three directions with a short description of each |
| `homepage/` | **Homepage**: the current site rebuilt as one scrolling page about the book |
| `index/` | **Index**: the same material as a board of tiles, with a full-screen menu |
| `hub/` | **Hub**: a home for all Freedom resources, labelled and filtered by the four pillars of Freedom |
| `resources/` | **Resources**: a password-protected hub of essays, each with a short video (hover to preview, click to watch with sound). Password: `creativeagi` |
| `shared/` | `freedom.css` (design-system tokens and components) and `fs.js` (hero video, the reaching hands, signup) used by Index and Hub |
| `images/` | Images and the hero video, shared by every page |
| `thumbs/` | Screenshots used on the share page |

## Viewing

These are static pages with no build step. Open `index.html` through any static server (for example `python3 -m http.server` in this folder), or turn on GitHub Pages for the `main` branch.

## Status

These are previews. The buy links, the "Ask the book" chatbot and the newsletter signup are not connected yet. In the Hub, the pillar labels on each resource are suggestions to confirm, and "The Atlas of Freedom" and "A future essay" are placeholders.
