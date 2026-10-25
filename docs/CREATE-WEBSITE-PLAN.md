# Create Website — Plan & Tracker

**Project:** Kushal Learning Centre — single landing page
**Started:** 24 October 2026
**Stack:** hand-written static HTML + CSS + JS. No build step, no framework, no dependencies.
**Primary conversion:** join the free 3-day workshop (WhatsApp)

## Phase Status

| # | Phase | Skill | Status |
|---|---|---|---|
| 1 | Frame strategy & niche | one-page-marketing | done |
| 2 | Write the message | storybrand-messaging | done |
| 3 | Make it stick | made-to-stick | done |
| 4 | Signature moment | top-design | done |
| 5 | Type system | web-typography | done |
| 6 | Systematic design | refactoring-ui | done |
| 7 | Usability | ux-heuristics | done |
| 8 | Conversion engineering | cro-methodology | done |
| 9 | Lead-generating quiz | scorecard-marketing | deferred: the workshop is the lead magnet; a quiz would add a step to a live event |
| 10 | Insanely-great review | steve-jobs-design-review | done |

## Key Decisions

| Decision | Choice | Why |
|---|---|---|
| Niche | Mothers of Grade 4–10 children who want to teach | Highest PVP score (25); strongest mission fit |
| Primary CTA | WhatsApp, framed as "Reserve my free seat" | One tap, no form — the only realistic friction level for this audience |
| Hero hook | "You were never bad at maths." | Names the internal problem, contradicts the belief, makes her feel seen |
| Art direction | Marigold & Linen | Warm, light, premium, Indian without cliché; five pale fields instead of one dark stage |
| Type | Fraunces + Instrument Sans, self-hosted | 96 KB total; editorial authority; zero third-party requests |
| Proof | 13 real videos + founder + owner-confirmed 5.0 | No counts or quotes were invented; the rating is used only because the owner confirmed all 13 students gave five stars |
| Stack | Static HTML/CSS/JS | Fastest possible LCP, best crawlability, deployable anywhere |
| Quiz | Deferred | Direct CTA is sufficient for a live event |
| Cursor | Native | The audience is on mobile; a custom cursor costs more than it adds |

## Post-review Conversion Pass

After the Phase 10 review, the owner asked for a first screen that did not read like the original page and for the five-star reputation to be visible on the home page.

- Hero given a monumental H1 and a solid marigold swipe; the masthead stays light. (The ink inversion from this pass was later removed at the owner's request — see below.)
- The highlighter became a solid marigold swipe with ink type.
- Added a pale marigold rating band: `5.0`, five SVG stars, "13 of 13 students rated the training five stars", and a link to the thirteen videos.
- Added the rating to the hero, the stories heading, the final CTA, and the sticky bar; added "Free · no card · opens WhatsApp" and honest limited-seat copy.
- No new claims: the rating is the owner's confirmation, not an invented number.

## Light Theme Revision

After the conversion pass, the owner asked for a lighter theme: "I don't like the colour theme of the website — use some light colours." The page was re-cut as **Marigold & Linen**.

- Palette: ivory `#FFFCF5`, linen `#F7EFE1`, pale marigold `#FBE7C9`, sage `#E8EEDF`, blush `#F7E7DE`, ink `#211D28`, deep marigold `#9A4306`.
- Every dark field became light: hero, header, six-step system, final CTA, footer and sticky bar.
- The header is now a solid ivory rail; no colour flip, no backdrop blur.
- Hero colour comes from two solid pale discs, not a gradient layer; the portrait sits on a warm-white mat with no blend mode; the sticky bar is a plain ivory surface.
- Removed the 60 rem radial in the final and all `backdrop-filter` usage. Fewer compositing layers is cheaper on the mid-range Android phones this audience uses.
- Re-verified: AA text contrast (lowest pair 5.16:1), focus rings at least 5.4:1 on their field, no overflow at 360/390/768/1440.
- Regenerated the 1200×630 social card on the light palette; `theme-color` changed to `#FFFCF5` on both pages.

The structure, copy, CTA and proof hierarchy are unchanged.

## UI UX Pro Max Audit

The `ui-ux-pro-max` skill was installed globally and run against the built page. Seven targeted searches were used (focus states, touch targets, sticky navigation, reduced motion, link purpose, landing structure) plus the skill's pre-delivery rules.

**Applied**

- Focus rings recoloured per surface and verified by real keyboard tabbing: marigold-deep on ivory, linen, sage and blush; ink on the pale marigold band.
- 44 px hit areas for the logo, header nav, rating-band link, footer nav and small buttons — without changing their visual size.
- The thirteen story rows now carry each video's real subject from the video's own YouTube title or tags, so the links say who and what they are.
- Hero portrait served as WebP (105 KB) with the original JPEG fallback; `theme-color` matched to the ivory hero.

**Rejected, with reason**

- The generated design system suggested Claymorphism. It contradicts the established Marigold & Linen direction and would read as a toy to this audience; the existing art direction was kept.
- Scrollspy/active nav: a single-page landing with five anchors does not need a second navigation state.
- Written testimonial cards: no real quotes exist; the videos and the owner-confirmed 5.0 carry the proof instead.

## Next Actions

- [x] Canonical / OG / JSON-LD / `robots.txt` / `sitemap.xml` URLs set to the GitHub Pages URL (owner: developer, done)
- [ ] Confirm the WhatsApp invite link is permanent (owner: Deepika, high)
- [ ] Collect 3 named written testimonials (owner: Deepika, medium)
- [ ] Add real workshop dates to the WhatsApp group description (owner: Deepika, medium)
- [x] Deployed to GitHub Pages at https://karthikeyapodicheti.github.io/kushal-learning-centre/ from the generated `gh-pages` branch, published from `src/` with `scripts/deploy-pages.sh` (owner: developer, done)
- [ ] Verify Core Web Vitals on the live Pages URL after real traffic (owner: developer, medium)
- [ ] After 200 visitors, run the first experiment from `EXPERIMENTS.md` (owner: Deepika, low)
