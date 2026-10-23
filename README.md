# Freedom Series — website

The live site is the homepage at the root: a static copy of the freedomseries.ai Wix homepage,
built from Wix's own page structure and styles so desktop, tablet and phone layouts match the
Wix site. No build step; plain HTML, CSS and a small script.

| Path | What it is |
| --- | --- |
| `index.html` | **Homepage** (copy of freedomseries.ai) |
| `book.html` | The 3D book that opens on hover, framed by the homepage |
| `theriseofsuperintelligence/` | **Read Online**: the Heyzine flipbook, same URL path as on Wix |
| `flags/` | **Flags of Freedom**: the essay page with the interactive Flourish map |
| `atlas/` | **Flags of Freedom Atlas**: the interactive world map of insights (`atlas/app.html` is the map app) |
| `riseofsi/` | Forwards to the book on Amazon, as the Wix redirect did |
| `img/`, `fonts/` | Images, videos and fonts for the pages above |
| `redesign/` | Share page for the three redesign directions (was the root page) |
| `homepage/`, `index/`, `hub/` | The three redesign directions, built on the Freedom design system |
| `shared/`, `images/`, `thumbs/` | Files used by the redesign directions |

## Publish on GitHub Pages

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**.

## Needs a backend

Two features relied on code running on Wix's servers, which a static site doesn't have:

- **Chatbot**: the homepage button is greyed out and reads "Currently unavailable".
- **Atlas insights**: the map, existing insights and summaries load from Firebase as before, and
  visitors can still discover a random flag. Posting a new insight needed Wix's AI moderation, so it
  now shows "Sharing insights is currently unavailable" instead of posting. The flag questions fall
  back to the app's built-in default question.

The past events on the homepage are greyed out and have no links.
