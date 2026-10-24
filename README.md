# Kushal Learning Centre — landing page

**Live:** https://karthikeyapodicheti.github.io/kushal-learning-centre/  
**Repo:** https://github.com/KarthikeyaPodicheti/kushal-learning-centre

A single-page site for the free 3-day Vedic Math workshop. Hand-written HTML, CSS and JavaScript. No framework, no build step, no dependencies, no tracking scripts.

```
index.html      the page
styles.css      all styling
script.js       4 small interactions (~3.7 KB)
404.html        on-brand not-found page
favicon.svg     the mark
robots.txt      crawl rules
sitemap.xml     one URL
assets/         fonts (96 KB, self-hosted), founder photo (WebP + JPEG fallback), 1200×630 social card
docs/           strategy, positioning, design system, experiments
```

## Run it locally

```bash
cd kushal-learning-centre
node --run serve 2>/dev/null || npx --yes serve -l 4173 .
```

Or simply open `index.html` in a browser — everything works from the file system.

## Deploy

**GitHub Pages:** this repo deploys from `main` / root. Every push to `main` republishes the site. `.nojekyll` is included so GitHub serves the files as-is. The live URL is https://karthikeyapodicheti.github.io/kushal-learning-centre/.

**Cloudflare Pages:** create a project, connect the repo (or upload the folder), leave the build command empty, set the output directory to `/`. Done.

**Netlify:** drag the folder onto app.netlify.com/drop. `404.html` is picked up automatically.

**Any static host:** upload the folder. There is no server-side code.

## Before it goes live — 3 things

1. **Custom domain.** Canonical, OG/Twitter and JSON-LD URLs now point to `https://karthikeyapodicheti.github.io/kushal-learning-centre/`; `robots.txt` and `sitemap.xml` match. If you attach a custom domain, replace every occurrence of that URL in `index.html`, `robots.txt` and `sitemap.xml`. `404.html` detects the project path automatically and will work at a custom root domain too.
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
