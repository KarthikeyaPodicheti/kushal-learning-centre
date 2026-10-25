# Website — Kushal Learning Centre

## Sitemap

Single-page site. One URL, one job.

| Section | ID | Job |
|---|---|---|
| Hero | `#top` | Recognise her in five seconds; offer the seat |
| Proof strip | — | Establish that this is real and live |
| The struggle | `#struggle` | Name the internal problem better than she can |
| The method | `#method` | Prove the product with a live trick |
| 6-step system | `#system` | Show the path has a shape |
| The 3 days | `#days` | Make the time commitment concrete |
| Who it's for / not for | `#fit` | Qualify and build trust by saying no |
| Meet Deepika | `#mentor` | Empathy + authority |
| Stories | `#stories` | Proof that other women like her did it |
| FAQ | `#faq` | Remove the Big 5 objections |
| Final CTA | `#join` | One last clear ask |
| Footer | — | Navigation, honesty, brand |

## Page Briefs

**Hero.** Eyebrow names the offer and audience. H1 "You were never bad at maths." — emotional, not promotional. Lede gives the offer in one breath: free, live, 3 days, no degree, no experience, no fee. One primary button. Microproof is factual, not boastful.

**The struggle.** Four items, in her words. The turn is the hinge of the page: the problem was the teaching, not her mind. This is the single most important paragraph on the page.

**The method.** The product proves itself. 97 × 96, worked in three lines, behind a disclosure so it costs nothing to skim but rewards the curious. This is the signature interactive element.

**6 steps.** The same system as the original site, rewritten to be concrete. Sits on a pale sage field so the page has a distinct middle chapter.

**The 3 days.** No invented dates or times — dates live in the WhatsApp group, which is honest and gives the group a reason to exist.

**For / not for.** The disqualifiers do the persuading: a page willing to turn people away is a page that can be trusted.

**Deepika.** One pull quote, then empathy-first bio. Credentials as three quiet chips, not a laurel wall.

**Stories.** A typographic index of all 13 videos — "Story 01 … Watch ↗" rows, two columns on desktop, one on mobile. No thumbnails: the only frames available were screen recordings carrying a tiled creator watermark and burned-in call UI, which looked like damage at card size. The index states plainly that every row opens the real video on YouTube, so nothing is implied that the page cannot show.

**FAQ.** Six questions mapped to the Big 5 objections (trust, price, fit, timing, effort) plus an honesty question about income promises.

**Final CTA.** Names the transformation in time ("three evenings from now"), repeats the button, and states plainly what is free and what comes after.

## Conversion Elements

| Objection | Counter on the page | Placement | Status |
|---|---|---|---|
| **Trust** — "Is this real or another WhatsApp scam?" | 13 real student videos; a 5.0 rating from all 13, owner-confirmed and shown next to the videos; named founder with photo; live (not pre-recorded) | Hero rating row, rating band, Stories, Mentor | Live |
| **Price** — "What will this cost me?" | "No fee to attend" stated in hero, FAQ, and final note; paid programme disclosed, never hidden | Hero lede, FAQ, final | Live |
| **Fit** — "I'm not smart enough for this" | "You were never bad at maths"; the turn paragraph; explicit "this is for you if you feel shaky with maths" | H1, Struggle, For/Not-for | Live |
| **Timing** — "I don't have time with the children" | "Three live sessions, not three months"; dates shared in the group so she can arrange childcare | Hero microproof, Days, FAQ | Live |
| **Effort** — "Will I have to do homework?" | "You only need to watch, not perform" in the nurture sequence; 20 minutes a day named honestly in For/Not-for | For/Not-for, WhatsApp sequence | Live |

**Proof hierarchy used:** real video testimonials (specific, self-recorded) > the 5.0 rating from all 13 students, placed beside the videos it summarises > named founder authority > the method demonstrating itself. No logos were available, and none were invented.

**Missing proof (actions, not copy):** 3 written testimonials with names; a photo of a live session; a one-line result from a student's parent. The star rating is only defensible while the owner can stand behind it; if the roster changes, re-confirm before the number stays on the page.

## Lead Capture

**Deferred — Phase 9 skipped by decision.** The site has one direct CTA to the free workshop, which is itself the lead magnet. A quiz before the workshop would add a step between a warm audience and a live event, and the WhatsApp group already delivers the segmentation the business needs. Revisit if the group stops converting to attendance.

## Theme Revision

After the first review, the owner rejected the ink hero and asked for a light palette. The page was re-cut as **Marigold & Linen**:

- Hero, header, six-step system, final CTA, footer and sticky bar all moved to light fields — ivory, linen, pale marigold, sage and blush.
- The header no longer flips colour; it is a solid ivory rail.
- The portrait is a print on a warm-white mat (no blend mode), not a print on a dark wall.
- Large gradient and blur layers were removed; the hero's colour comes from two solid pale discs. The page is cheaper to paint and easier on mid-range phones.
- Contrast was re-verified: lowest text pair **5.16:1**; every focus ring is at least **5.4:1** on its field.
- A new light 1200×630 social card was generated; `theme-color` is now `#FFFCF5`.

The structure, copy, CTA and proof hierarchy did not change.

## Audit Findings

_Filled in during the final review (Phase 10)._

| Issue | Severity | Fix | Status |
|---|---|---|---|
| Testimonial thumbnails carried a tiled creator watermark and burned-in call UI — they read as damage at card size | High | Removed the third-party images and the featured-video cards; replaced with a 13-row typographic index that opens the real videos on YouTube | Fixed |
| Hero H1 overflowed the viewport at 390 px | High | Type scale changed to `clamp(2.4rem, 10.2vw, 9.5rem)`; verified at 360, 390 and 1440 px | Fixed |
| Hero reveal clipped descenders during load (translate + overflow clip) | Medium | Replaced with a short fade-and-rise; no clipping path | Fixed |
| Eyebrow rendered as flex, orphaning the dot/middot on narrow screens | Low | Block layout with a `::before` dot | Fixed |
| Pull-quote measure applied to the block, not the text, so the quote ran wide | Low | `max-width: 22ch` moved onto the paragraph | Fixed |
| A doubled hairline appeared under the stories block | Low | Redundant border removed | Fixed |
| Story grid used 1280 px YouTube stills, adding a third-party DNS lookup and 3 requests | Medium | No remote images remain; the page now makes zero third-party requests | Fixed |
| Canonical, OG and JSON-LD URLs still point at the Lovable preview domain | Blocker at launch | Updated to the GitHub Pages URL in `src/index.html`, `src/robots.txt` and `src/sitemap.xml`; replace again when a custom domain is connected | Fixed |
| WhatsApp invite could expire, which would silently kill the only conversion path | Blocker at launch | Owner to confirm the invite is permanent | Open |
| Workshop dates are not printed on the page | Medium | Deliberate: dates live in the group description so they can change without a deploy | By design |
| Thirteen story links all read "Story 01 … Watch", so the proof was specific on video but anonymous on the page | High | Added the real subject of each video, taken from the video's own YouTube title or tags: Rita's classes, Karuna on marketing, Ambika's maths turnaround, and so on | Fixed |
| Header, logo, footer and rating-band links were 21–23 px tall | Medium | Expanded hit areas to 44 px without moving the typography: pseudo-element overlays for the logo, nav and band link; 44 px rows for the footer nav | Fixed |
| The bright focus ring from the ink hero was low-contrast on the new light fields | High | Deep marigold rings on ivory, linen, sage and blush; ink on the pale band. Verified by keyboard tabbing, not by script focus | Fixed |
| Hero portrait shipped as a 138 KB JPEG for a 492 px slot | Low | WebP (105 KB) with the JPEG as fallback, and the intrinsic dimensions corrected to 1066 × 1600 | Fixed |
| Mobile browser chrome was still tinted for the old ink hero | Low | `theme-color` set to `#FFFCF5` so it matches the linen page | Fixed |
| The first light build read too close to the source page; the ink inversion then felt wrong to the owner | High | Kept a light palette and built the difference into type and rhythm: monumental H1, solid marigold swipe, pale peach and sage discs, white-mat portrait, pale section fields. The dark skin was removed at the owner's request | Fixed |
| The 5-star reputation was buried in thirteen links, so a scanning visitor saw none of it | High | Owner-confirmed 5.0 from 13 of 13: hero rating row, marigold rating band with a link to the stories, rating line above the index, repeat at the final CTA and in the sticky bar | Fixed |
| The ask had no risk reversal and no honest scarcity | Medium | "Free · no card · opens WhatsApp" under the hero button; "limited seats" in the sticky bar only, with no count or countdown | Fixed |

## Final Review

**Verdict: ship it.** The page does one thing, says it in the customer's words, and never exaggerates. Every remaining weakness is an asset the business does not yet own (written testimonials, a live-session photo, a launch domain) — not a flaw in the page.

| Dimension | Score | Note |
|---|---|---|
| Top design | 8.5/10 | One typographic idea carried all the way through; the light first screen — monumental Fraunces, a solid marigold swipe, pale peach and sage discs, a white-mat portrait — gives the page a first screen no competitor shares, and the demo still earns its place |
| Web typography | 8.5/10 | Two families, 96 KB, a real scale, no orphaned words at the tested widths; lost half a point for long words in the FAQ at 360 px |
| UX heuristics | 9/10 | Native disclosures, 44 px targets throughout, AA contrast, keyboard focus verified on every background, and the story index now says who and what each video is about |
| CRO | 8.5/10 | One CTA, one destination, no form; a 5.0 rating and risk reversal now sit at the point of decision, and scarcity is stated without a fake countdown. Held back by the absence of a date and a written quote |
| Steve Jobs review | Pass | Simplicity, focus, and honesty: nothing on the page exists to decorate it |

**What we said no to:** stock photography, invented counts, fabricated reviews and quotes, a custom cursor, a quiz funnel, a video background, carousel testimonials, a second destination, the founder's watermarked video stills, and an all-dark “premium” skin — built once, rejected by the owner, and removed. The 5.0 is used because the owner confirmed every student rated it; the moment that is no longer true, it comes off the page.
