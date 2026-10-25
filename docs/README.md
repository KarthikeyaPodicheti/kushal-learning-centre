# Kushal Learning Centre — landing page

**Live:** https://karthikeyapodicheti.github.io/kushal-learning-centre/  
**Repo:** https://github.com/KarthikeyaPodicheti/kushal-learning-centre

![Kushal Learning Centre — You were never bad at maths](../src/assets/og-card.jpg)

A single-page site for the free 3-day Vedic Math workshop. Hand-written HTML, CSS and JavaScript. No framework, no build step, no dependencies, no tracking scripts.

```
src/index.html      the page
src/styles.css      all styling
src/script.js       4 small interactions (~3.7 KB)
src/404.html        on-brand not-found page
src/favicon.svg     the mark
src/robots.txt      crawl rules
src/sitemap.xml     one URL
src/assets/         fonts (96 KB, self-hosted), founder photo, 1200×630 social card
docs/               all Markdown: README, context, strategy, phases, design
scripts/            deployment helper
opencode.json       tells the agent to read docs/AGENTS.md and docs/USER.md
```

All Markdown lives in `docs/`. All deployable website files live in `src/`.

For the paid-growth proposal built around this site, see [`CLIENT-GROWTH-ROADMAP.md`](CLIENT-GROWTH-ROADMAP.md), [`1phase.md`](1phase.md) and [`phase2.md`](phase2.md). [`USER.md`](USER.md) and [`AGENTS.md`](AGENTS.md) carry the working context for future sessions. This repo is public — keep secrets, client PII, pricing and negotiation notes out of it.

## Run it locally

```bash
cd kushal-learning-centre/src
python3 -m http.server 4173
```

Then open http://127.0.0.1:4173/. Or simply open `src/index.html` in a browser — everything works from the file system.

## Deploy

**GitHub Pages:** the live site is served from the generated `gh-pages` branch. After committing changes to `main`, run:

```bash
bash scripts/deploy-pages.sh
```

That copies the contents of `src/` to `gh-pages` and pushes it. Do not edit `gh-pages` by hand. The live URL is https://karthikeyapodicheti.github.io/kushal-learning-centre/.

**Cloudflare Pages:** create a project, connect the repo, leave the build command empty, and set the output directory to `src`.

**Netlify:** drag the `src` folder onto app.netlify.com/drop. `404.html` is picked up automatically.

**Any static host:** upload the contents of `src`. There is no server-side code.

## Launch checklist — 3 things

The Pages site is live. These are the owner actions that remain before promoting it.

1. **Custom domain.** Canonical, OG/Twitter and JSON-LD URLs now point to `https://karthikeyapodicheti.github.io/kushal-learning-centre/`; `src/robots.txt` and `src/sitemap.xml` match. If you attach a custom domain, replace every occurrence of that URL in `src/index.html`, `src/robots.txt` and `src/sitemap.xml`. `src/404.html` detects the project path automatically and will work at a custom root domain too.
2. **WhatsApp link.** The button points to `https://chat.whatsapp.com/LnTnLmsDnCzIqOTQg9NLGR`. Confirm this invite does not expire — an expired invite is the most expensive bug this page can have.
3. **Dates.** No dates or times are printed on the page by design. Put them in the WhatsApp group description.

## Why this stack

| Decision | Effect |
|---|---|
| No framework | The browser parses HTML and paints. No hydration, no runtime, no JS bundle to download |
| Self-hosted variable fonts | 2 files, 96 KB, Latin subset, preloaded, `font-display: swap`. No third-party DNS or TLS handshake |
| One stylesheet | A single 39 KB CSS request, no critical-CSS inlining complexity to maintain |
| 3.7 KB of JS | Only for the mobile menu, header state, scroll reveals, and the sticky CTA. Every piece degrades gracefully; content is visible with JS disabled |
| Semantic HTML + JSON-LD | `EducationalOrganization`, `Course` and `FAQPage` structured data for search engines |
| One photograph on the whole page | The hero is type-led; the founder portrait is the only raster asset. Zero third-party images, fonts, or scripts |

## Accessibility

- WCAG AA contrast throughout — lowest text pair is 5.16:1
- Keyboard-accessible disclosures (native `<details>`), visible focus rings, skip link
- 44 px minimum tap targets
- `prefers-reduced-motion` disables all reveals and transitions
- Full `prefers-contrast` fallbacks removed in `forced-colors` mode where they would break

## Copy rules for future edits

- Never invent a student count, an income figure, a rating, or a testimonial. Every proof point on this page is verifiable.
- "Maths", "programme", "practise" (verb) — Indian English, not American.
- The customer is the hero. No sentence opens with "We" in the marketing copy.
- One CTA: reserve a free seat. Nothing competes with it.
