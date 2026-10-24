# Design — Kushal Learning Centre

## Design Direction

**Brand essence:** *vindication* — the moment a woman realises she was never the problem.

**Visual tension:** monumental warm serif against tiny precise labels; calm linen against one hot marigold, with two quiet field colours — sage and blush — carrying the middle and the end. Nothing decorative that isn't doing work.

**Signature moment:** the hero. A linen stage, enormous ink Fraunces, two lines, the second indented — "You were never **bad at maths**", the cancelled belief set in ink on a solid marigold swipe. A pale peach disc rises behind the type and a sage disc sits under the portrait, so the first screen is coloured by light, not by darkness. The header is a solid ivory rail from the first pixel. Supporting signature: the 97 × 96 demo that proves the product in four lines.

**Light revision (October 2026):** the first build inverted the hero to ink. The owner rejected it — the site had to feel light. The palette was re-cut as **Marigold & Linen** and every dark field — hero, header, system, final, footer and sticky bar — became a light field. Typography, structure, copy and proof are unchanged. The section rhythm now does the differentiating: ivory → pale marigold → linen → sage → ivory → linen → ivory → linen → ivory → blush → linen.

**Personality:** a good teacher's notebook, not an edtech dashboard. Warm linen, ink, a marigold pen, a sage page and a blush page. Confident, adult, unsentimental.

**References:** AREA 17 editorial layouts; Locomotive monochrome tension; Indian school exercise books; Fraunces' wonky terminals.

**Anti-references:** purple-to-blue SaaS gradients, floating 3D blobs, stock "happy student" photography, gold-and-maroon "traditional" clichés, emoji.

**Custom cursor:** no. Native cursor — the audience is on mid-range Android phones, and a custom cursor would cost more than it adds.

## Typography

| Role | Face | Why |
|---|---|---|
| Display | **Fraunces** (variable, 100–900, optical size 9–144) | Editorial, warm, slightly wonky — authority without corporate coldness |
| Text / UI | **Instrument Sans** (variable, 400–700) | Neutral, narrow, excellent at small sizes on Android |

**Scale:** `clamp()` throughout. H1 48 → 152 px; H2 33 → 62 px; body 17 → 19 px. Display-to-body ratio at desktop ≈ 8:1, close to the 10:1 target, without breaking on a 360 px screen.

**Measure:** prose capped at 46–52ch; body line-height 1.62; headings 0.9–1.05.

**Loading:** both faces self-hosted, WOFF2, latin subset, `font-display: swap`, preloaded. Total font payload **96 KB** (budget: 200 KB). Zero third-party font requests, zero layout-shifting font scripts.

**Deliberate omission:** no italic file. Emphasis is carried by colour and scale instead — 60 KB saved for a single word.

## Tokens

```css
/* palette */
--ivory:          #FFFCF5   /* page */
--paper:          #F7EFE1   /* alternating sections */
--card:           #FFFEFA   /* raised surfaces, portrait mat */
--pale:           #FBE7C9   /* rating band, hero disc */
--sage:           #E8EEDF   /* the six-step field */
--blush:          #F7E7DE   /* final CTA field */
--ink:            #211D28   /* text */
--muted:          #655E6B   /* secondary text (6.09:1 on ivory, 5.16:1 on pale) */
--marigold:       #E8890C   /* primary action, marks */
--marigold-bright:#F6B23C   /* hover */
--marigold-deep:  #9A4306   /* accent text (6.45:1 on ivory) */
--line:           rgba(33,29,40,.14)

/* spacing */
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128

/* radii */
2px (surfaces) · 4px (paper blocks) · 999px (buttons, chips) · arch (portrait)

/* elevation — two layers, never one */
--shadow-1: 0 1px 2px rgba(33,29,40,.05), 0 4px 14px rgba(33,29,40,.05);
--shadow-2: 0 2px 6px rgba(33,29,40,.06), 0 18px 44px rgba(33,29,40,.08);

/* motion */
--ease:    cubic-bezier(.16,1,.3,1)    /* expo out */
--ease-io: cubic-bezier(.87,0,.13,1)   /* expo in-out */
```

No pure `#000` or `#fff` anywhere. One accent, used only on actions, marks, and single-detail numerals.

## Components

**Buttons.** One shape: marigold pill, ink label, 1 px deep-marigold rim, soft amber shadow. Hover lifts 2 px and brightens. One primary per section, never two in a row. Mobile hero button goes full-width; a sticky bottom bar repeats the action after the first screen. The seat button breathes a slow marigold halo (3.2 s) on the hero, the final CTA and the sticky bar; the animation is replaced by a static glow under `prefers-reduced-motion`, so it never strobes for anyone who asked the system not to animate.

**Cards.** Only two exist: the demo card (rotated −1.4°, two-layer shadow, notebook feel) and the turn block (flat paper, marigold rule). Everything else is hairlines and type — no box soup.

**Story index.** Thirteen rows in two columns, separated by hairlines under a 2 px ink rule. A tiny letter-spaced `STORY` sits beside a Fraunces numeral; `WATCH ↗` sits at the far edge and answers on hover. Each row carries the video's real subject, taken from the video's own YouTube title or tags — "Rita started her own classes", "Ambika: from fearing maths to loving it" — so the proof is specific without a single borrowed thumbnail. It is a programme, not a gallery.

**Disclosures.** Native `<details>`/`<summary>`. Work without JS, are keyboard-accessible and screen-reader-announced, and carry the plus/minus icon in CSS.

**Focus and hit areas.** Every interactive control takes a 2 px ring, recoloured by surface: marigold-deep on ivory, linen, sage and blush; ink on the pale marigold band. Logo, header nav and the rating-band link keep their visual size but extend to a 44 px hit area with a transparent pseudo-element; footer links and small buttons use real 44 px rows.

**Portrait.** Arch frame (a doorway, not a circle), 1 px marigold outline offset behind, photo on a warm-white mat with a thin ink hairline. No blend mode: it reads as a photographic print laid on the page. Caption in two weights. Rotated marigold stamp badge.

**Rating band.** A full-width pale marigold band between the hero and the first argument: Fraunces `5.0`, five solid stars, and one sentence — "13 of 13 students rated the training five stars." The stars are a single inline SVG sprite (`#star`), not a font glyph, so they stay crisp and identical at every size. It is the page's receipt: the claim sits directly above the link to the thirteen videos it refers to.

**Stars.** One sprite, five `use` elements, `fill: currentColor`. Deep marigold on pale and linen, ink where a field needs it; never bright marigold on a light ground. The colour is set by the context, never hard-coded into the icon.

**Nav.** A solid ivory rail from the first pixel — no colour flip. A hairline border and soft shadow appear once the page is scrolled, driven by the hero's height. Hairline underline grows from the left on hover. Mobile: 44 px round menu button, panel drops from the sticky header, Escape and outside-click close it.

## UX Audit Findings

| Issue | Heuristic | Severity | Fix | Status |
|---|---|---|---|---|
| Original "Join WhatsApp" button named the mechanism, not the value | Match between system and real world | 3 | "Reserve my free seat" + note that it opens WhatsApp | Fixed |
| 13 bare testimonial links with no preview — nobody clicks | Aesthetic and minimalist design / trust | 3 | Numbered 13-row index with a `WATCH ↗` affordance and a line explaining the links open YouTube; source thumbnails were watermarked and were cut rather than shown | Fixed |
| No price or "what happens after" information — the biggest unspoken objection | Transparency | 3 | Stated in FAQ and final CTA; paid programme disclosed | Fixed |
| Testimonial section had placeholder copy ("All your testimonial videos are now showcased here") | Match between system and real world | 4 | Rewritten as real copy; nothing shipped in placeholder state | Fixed |
| Long page with no persistent CTA on mobile | User control and freedom | 2 | Sticky bottom bar after the first screen, hidden over the final CTA | Fixed |
| Headings could not be scanned at a glance | Recognition rather than recall | 2 | Every section starts with an eyebrow + a claim-shaped H2 | Fixed |
| Anchor jumps landed under the sticky header | Visibility of system status | 2 | `scroll-margin-top` on every section | Fixed |
| 44 px tap targets | Accessibility (WCAG 2.5.5) | 3 | Buttons, menu, and disclosure rows all ≥ 44 px | Verified |
| Contrast of small uppercase labels | Accessibility (WCAG 1.4.3) | 2 | Lowest pair is 4.89:1 — passes AA | Verified |
| The first light build read too close to the source page; the ink inversion then felt wrong to the owner | Aesthetic and minimalist design / differentiation | 2 | Kept a light palette and built the difference into type and rhythm: monumental H1, solid marigold swipe, pale peach and sage discs, white-mat portrait, and five light fields. The owner's later request for a light theme was applied without losing that structure | Fixed |
| A 5-star reputation existed only inside the videos; no scannable rating above the fold | Social proof / recognition | 3 | Owner-confirmed 5.0 from all 13 students, set as a hero rating row, a pale marigold rating band, a line above the stories, and a repeat at the final CTA | Fixed |
