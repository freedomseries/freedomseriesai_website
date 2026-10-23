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
| `riseofsi/` | Forwards to the book on Amazon, as the Wix redirect did |
| `img/`, `fonts/` | Images, videos and fonts for the pages above |
| `redesign/` | Share page for the three redesign directions (was the root page) |
| `homepage/`, `index/`, `hub/` | The three redesign directions, built on the Freedom design system |
| `shared/`, `images/`, `thumbs/` | Files used by the redesign directions |

## Publish on GitHub Pages

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**.

## Still on Wix

The "Flags of Freedom Atlas" button on the Flags page still links to freedomseries.ai/atlas; move
that page before pointing the domain here. The chatbot button on the homepage is greyed out and
reads "Currently unavailable": its answers came from code on Wix's servers, so it needs a new
backend first. The past events on the homepage are greyed out and have no links.
