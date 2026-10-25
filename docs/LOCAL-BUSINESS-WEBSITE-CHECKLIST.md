# Local Business Website Checklist — Kushal Learning Centre

**Checked:** 25 October 2026  
**Scope:** the live marketing site, the public repo, and public business profiles.  
**One-line verdict:** the landing page is strong; the business layer around it is incomplete.

This is not a redesign brief. The page already does the hard part well. The gaps are the things a customer checks before they trust a local business with their time, their phone number or their money.

## How to read this

| Mark | Meaning |
|---|---|
| ✅ | Present and working |
| ⚠️ | Partial, unconfirmed, or depends on a client fact |
| ❌ | Missing |
| N/A | Not needed yet, or not applicable |
| Critical | Blocks trust, legal use, or payment |
| High | Costs leads, revenue, or local visibility |
| Medium | Weakens confidence or measurement |
| Low | Polish and maintenance |

## Score

| Area | Score | Verdict |
|---|---|---|
| Landing-page craft (message, design, proof, speed, accessibility) | 8.5 / 10 | Strong. Do not rebuild it. |
| Local-business readiness | about 4.5 / 10 | Incomplete. The trust, contact, legal, local and measurement layers are missing. |
| Trust and contact | 3 / 10 | The founder is credible, but a customer cannot phone, email or find the business. |
| Conversion and revenue | 4 / 10 | The free WhatsApp CTA is good; the paid path is not connected. |
| Local SEO | 2 / 10 | No local schema, no maps, no Google Business Profile link, no city-level content. |
| Technical and performance | 8 / 10 | Fast, static, light, mobile-first. Field Core Web Vitals are not measured yet. |
| Accessibility | 9 / 10 | Automated checks pass. A manual screen-reader pass is not documented. |
| Measurement | 1 / 10 | No analytics, no conversion events, no Search Console evidence. |

**The important conclusion:** this is a very good landing page for a business that is not yet fully visible as a business. The next work is not another coat of paint. It is contact, legal, local presence, lead capture, measurement and the paid path.

## What is already strong

- A clear, specific offer: a free 3-day live Vedic Math workshop for mothers and aspiring teachers.
- One primary action: “Reserve my free seat” to WhatsApp. No competing CTA.
- Truthful proof: 13 real video stories and an owner-confirmed 13/13 five-star rating. No invented names, counts or income figures.
- A named founder with a real photograph and a clear story.
- Good objection handling: trust, price, fit, timing and effort are all addressed.
- A strong FAQ and an honest income disclaimer.
- Self-hosted fonts, no third-party requests on load, and a light page weight of roughly 280 KB.
- Good accessibility basics: skip link, one H1, native disclosures, visible focus, 44 px targets, AA contrast, reduced-motion support.
- Basic technical SEO: title, meta description, canonical, Open Graph, Twitter card, JSON-LD, `robots.txt` and `sitemap.xml`.
- A custom branded 404 page.
- An existing paid course platform and public social profiles that the site does not yet use.

## Top gaps, in order

| # | Gap | Why it matters | Severity | Owner |
|---|---|---|---|---|
| 1 | The site runs on a `github.io` address, not an owned domain | A local business looks temporary when its address is a developer host. It also blocks branded email and clean local citations. | Critical | Developer + Deepika |
| 2 | No phone, email, contact page, service area or hours | A customer cannot check that the business is real, reach a human, or know where it works. | Critical | Deepika + Developer |
| 3 | No privacy, terms, refund or contact pages | The free workshop collects WhatsApp details; the paid course takes money. Both need clear policies. | Critical | Developer + Deepika/legal review |
| 4 | The existing paid course platform is not linked | Graphy already hosts the paid programme. The site sends people to a free group and then stops. | High | Developer + Deepika |
| 5 | Public Instagram, LinkedIn, YouTube and Google Business presence is not linked | The business already has proof and reach; the website hides it. This also weakens search trust. | High | Developer + Deepika |
| 6 | No real workshop dates or times | “Dates in the group” is honest, but it adds a step and weakens the decision. | High | Deepika |
| 7 | No lead form, email capture, CRM or thank-you page | Every lead depends on a WhatsApp group invite. If the invite expires, the funnel dies. | High | Developer + Deepika |
| 8 | No analytics, conversion events or Search Console evidence | There is no way to know which channel produces seats, attendance or sales. | High | Developer |
| 9 | No Google Business Profile link, local schema or NAP block | Local searches cannot connect the site to the map listing. | High (if local) | Deepika + Developer |
| 10 | No written testimonials, review link or class photos | Video proof is strong but slow to scan; a Google review link and named quotes are faster trust. | Medium | Deepika |
| 11 | The WhatsApp group invite may expire | The only conversion path can silently break. A direct WhatsApp fallback is safer. | High | Deepika |
| 12 | Missing `favicon.ico`, web manifest, uptime monitoring and stronger security headers | Small trust and maintenance gaps, not blockers. | Low–Medium | Developer |

## Full checklist

### 1. Business identity and contact

| Item | Status | Severity | Notes |
|---|---|---|---|
| Business name and mark are visible | ✅ | — | “Kushal Learning Centre” and the Kushal mark are clear. |
| One-line explanation of what the business does | ✅ | — | Hero and metadata explain the offer. |
| Founder name, face and role | ✅ | — | Deepika’s name, photo and founder line are present. |
| Phone or WhatsApp number on the site | ⚠️ | Critical | A public business number exists on social profiles, but the site only offers a group invite. Confirm before publishing. |
| Email address on the site | ❌ | Critical | No email anywhere. A branded address is also missing. |
| Service area or physical location | ⚠️ | Critical | The site says “For women in India.” Public posts point to a Kanpur presence. Confirm the real service area and whether there is a physical location. |
| Opening hours or response time | ❌ | High | No hours, no “we reply within…” promise. |
| Social profiles linked | ⚠️ | High | Public Instagram, LinkedIn and YouTube profiles exist; none are linked. |
| Google Business Profile linked | ⚠️ | High | Public posts reference a Google Business Page and Google reviews. Confirm the exact listing and link it. |
| Contact page | ❌ | Critical | No contact page. |
| NAP consistency (name, address, phone) | ❌ | High | Not present on the site, so it cannot match the map listing or citations. |

### 2. Offer, conversion and revenue

| Item | Status | Severity | Notes |
|---|---|---|---|
| One clear primary action | ✅ | — | “Reserve my free seat” is the only primary CTA. |
| What the offer is, who it is for, how long it takes | ✅ | — | The hero, “3 days” section and FAQ cover this. |
| Real workshop dates and times | ❌ | High | Dates live only in the WhatsApp group. |
| Free vs paid is clear | ✅ | — | The free workshop and the later paid programme are both disclosed. |
| Paid programme details and price | ⚠️ | High | The paid programme is mentioned, but there is no link, price or next step. |
| Link to the existing paid course platform | ❌ | High | Graphy already hosts paid courses at `deepikaainapur.graphy.com`; the site does not link to it. |
| Checkout or payment path | ⚠️ | High | Graphy appears to handle payment and course delivery. Confirm the exact purchase path. |
| Lead capture form | ❌ | High | The WhatsApp group is the only capture mechanism. |
| Email or WhatsApp follow-up | ❌ | High | Follow-up appears manual and group-based. |
| Thank-you or confirmation page | ❌ | Medium | No page after a form or click that sets expectations. |
| Refund or risk reversal | ❌ | Critical before payment | No refund policy or guarantee. Graphy has a refund policy for its paid courses; confirm it applies. |
| Real scarcity only | ✅ | — | “Limited seats” is used without a fake count or countdown. |
| Direct WhatsApp fallback | ⚠️ | High | A group invite is the only entry. A direct `wa.me` link is safer if the group invite expires. |
| Learning platform | ✅ | — | Graphy already provides course delivery and login. Do not build an LMS. |

### 3. Proof and trust

| Item | Status | Severity | Notes |
|---|---|---|---|
| Real student stories | ✅ | — | 13 real YouTube videos, linked one by one. |
| Named written testimonials | ❌ | Medium | No short named quotes that a scanning visitor can read in seconds. |
| Rating and its source | ⚠️ | High | “13 of 13” is owner-confirmed. Public posts mention Google reviews; link the source if it is real. |
| Founder credentials | ✅ | — | Mentor section and chips establish authority. |
| Real class or workshop photos | ❌ | Medium | No photos of a live session. |
| Third-party review link | ⚠️ | High | Confirm the Google Business Profile and link to its reviews. |
| Written consent for testimonials and images | ⚠️ | Critical | Confirm Deepika has consent for the videos, names and photograph used on the site. |
| No invented proof or income promises | ✅ | — | The FAQ explicitly refuses to promise income. |
| Income disclaimer | ✅ | — | Clear and honest. |

### 4. Content and SEO

| Item | Status | Severity | Notes |
|---|---|---|---|
| Unique title and meta description | ✅ | — | Present and specific. |
| One H1 and logical headings | ✅ | — | One H1, eight H2s. |
| Local keywords | ⚠️ | High | “India” only. No city, service area or “near me” intent. |
| Service pages | ❌ | Medium | Single page is fine for now, but paid programme and school training have no pages. |
| FAQ | ✅ | — | Six visible questions. |
| Blog or local content | ❌ | Medium | No articles, no local guides, no parent-facing content. |
| Image alt text | ✅ | — | The founder image has a useful alt. |
| Canonical URL | ⚠️ | High | Correctly set, but it points at `github.io`, not an owned domain. |
| `robots.txt` and `sitemap.xml` | ✅ | — | Present and valid. |
| Organization, Course and FAQ schema | ⚠️ | Medium | Present, but the FAQ schema has four questions while the page shows six. Add the missing two. |
| Local business schema | ❌ | High | No address, contact point, opening hours, map or `sameAs` links. |
| `sameAs` links to social and Graphy | ❌ | High | No links to Instagram, LinkedIn, YouTube, Google Business Profile or Graphy. |
| `Course` dates, price and URL | ⚠️ | Medium | The Course schema has no dates, offer or link to the paid platform. |
| Search Console and Bing verification | ⚠️ | High | Not documented. |
| Internal links | ✅ | — | Section navigation and footer links work. |
| Custom 404 page | ✅ | — | On-brand and live. |

### 5. Technical, performance and security

| Item | Status | Severity | Notes |
|---|---|---|---|
| Owned domain and HTTPS | ⚠️ | Critical | HTTPS is fine; the domain is not owned. `kushallearningcentre.com` and `.in` do not currently resolve. |
| Mobile responsive | ✅ | — | Verified at 360, 390, 768 and 1440 px in the project docs. |
| Fast, light first load | ✅ | — | Static, about 280 KB, no third-party requests on load. |
| Core Web Vitals measured in the field | ⚠️ | Medium | No real-user data yet. |
| Browser support documented | ⚠️ | Low | Not documented. |
| `favicon.ico` | ❌ | Low | Returns 404. The SVG favicon works, but older browsers and some tools still request the ICO. |
| Web manifest and app icons | ❌ | Low | No `site.webmanifest` or apple-touch icon. |
| Broken links | ✅ | — | The structural check reports none. |
| Console errors | ✅ | — | No errors found in the automated check. |
| Uptime monitoring | ❌ | Medium | No alert if the site or WhatsApp link breaks. |
| Backups | ✅ | — | Git and GitHub provide history. |
| Security headers | ⚠️ | Medium | HSTS is present. GitHub Pages does not allow a custom CSP or frame policy. |
| Analytics | ❌ | High | No GA4, Plausible, Umami or equivalent. |
| Cookie consent | N/A | — | No cookies or pixels yet. Add consent before analytics or Meta Pixel. |
| Form spam protection | N/A | — | No form yet. |
| Accessibility | ✅ | — | Automated checks pass; a manual screen-reader pass is still worth doing. |
| Privacy policy | ❌ | Critical | Missing. |
| Terms of use | ❌ | Critical | Missing. |
| Refund policy | ❌ | Critical before payment | Missing on the marketing site; Graphy has one for paid courses. |
| DPDP / consent language | ❌ | High | No privacy or consent language for WhatsApp numbers. |

### 6. Local presence

| Item | Status | Severity | Notes |
|---|---|---|---|
| Google Business Profile | ⚠️ | High | Public posts reference one. Confirm it, claim it and link it. |
| Map or directions | ❌ | High if local | No map. Use a service-area setting if there is no public address. |
| NAP block on the site | ❌ | High | No name, address or phone block. |
| Local citations | ❌ | Medium | No Justdial, Sulekha, local directory or map consistency. |
| Google reviews linked | ⚠️ | High | Public posts mention Google reviews; no link on the site. |
| Local photos | ❌ | Medium | No photos of the real place, classes or events. |
| Service-area page | ❌ | Medium | No “Vedic Math classes in Kanpur / online” page. |
| Local backlinks | ❌ | Low | No school, event, directory or press links. |
| Opening hours | ❌ | Medium | Missing. |
| Local business schema | ❌ | High | Missing. |

### 7. Operations and measurement

| Item | Status | Severity | Notes |
|---|---|---|---|
| Branded email | ❌ | High | No `hello@` or `deepika@` address. |
| SPF, DKIM and DMARC | ❌ | Medium | Needed once branded email exists. |
| CRM or lead database | ❌ | High | No Sheet, Airtable, Notion or CRM. |
| Booking calendar | ❌ | Low | Only needed if Deepika wants discovery calls. |
| WhatsApp Business profile | ⚠️ | Medium | Confirm whether the public number is a WhatsApp Business account. |
| Automated reminders | ❌ | High | No reminders for workshop days, no-shows or the paid offer. |
| Review request flow | ❌ | Medium | No systematic ask after a student result. |
| Content update process | ❌ | Medium | Copy is edited in code. Deepika cannot update dates or testimonials herself. |
| Ownership and handover | ⚠️ | High | Domain, hosting, Graphy, social accounts and analytics ownership need a written handover. |
| Conversion events | ❌ | High | No `whatsapp_click`, `reserve_click`, form submit or payment start events. |
| UTM links | ❌ | High | Instagram and YouTube links are not tagged, so traffic cannot be attributed. |
| Monthly report and one metric | ❌ | Medium | No live reporting rhythm. |

### 8. Legal and privacy

| Item | Status | Severity | Notes |
|---|---|---|---|
| Privacy policy | ❌ | Critical | Needed for WhatsApp leads and any future form. |
| Terms of use | ❌ | Critical | Needed before paid enrollment. |
| Refund policy | ❌ | Critical before payment | Needed for the paid programme; confirm Graphy’s policy and link it. |
| Contact page | ❌ | Critical | Needed for trust and legal notices. |
| Consent for WhatsApp contact | ⚠️ | High | No explicit opt-in language. |
| DPDP-aware consent | ❌ | High | India’s data rules need clear purpose and consent. |
| Cookie policy | N/A | — | Add only if cookies or pixels are introduced. |
| Payment security | ⚠️ | High | Graphy appears to handle payment. Confirm PCI and refund responsibility. |
| Testimonial and image consent | ⚠️ | Critical | Confirm written consent for the 13 stories, names and founder photo. |
| Income disclaimer | ✅ | — | Present and honest. |

## Skills that cover this

| Need | Skill | What it covers | Use now? |
|---|---|---|---|
| Full landing-page audit and prioritised backlog | `improve-website` | CRO, usability, hierarchy, type, message, speed, memory, errors | Yes, for the page layer |
| Conversion diagnosis and objection handling | `cro-methodology` | Funnel, Big 5 objections, proof, ICE experiments | Yes |
| Usability and accessibility | `ux-heuristics` | Nielsen/Krug heuristics, severity ratings | Already done; use for new flows |
| Visual hierarchy | `refactoring-ui` | Spacing, colour, hierarchy, tokens | Already done; not the gap |
| Typography | `web-typography` | Size, measure, line height, font loading | Already done; not the gap |
| Message clarity | `storybrand-messaging` | Customer-as-hero, one-liner, above-the-fold copy | Already done; not the gap |
| Memorability | `made-to-stick` | SUCCESs checklist | Already done; not the gap |
| Speed | `high-perf-browser` | Core Web Vitals, loading, caching | Partly done; measure in the field |
| Error prevention and affordances | `design-everyday-things` | Signifiers, constraints, feedback | Use when forms and checkout are added |
| Marketing system | `one-page-marketing` | Target, message, media, capture, nurture, convert, experience, lifetime value, referrals | Yes, for the business layer |
| Lead magnet or quiz | `scorecard-marketing` | Quiz funnels and segmented results | Not now; the workshop is the lead magnet |
| Traffic growth | `grow-website` | Conversion, offer, referrals, SEO | Later, after capture and measurement |
| One leaking flow | `conversion-optimization` | Single-funnel audit and experiments | Later, if checkout or signup leaks |
| Documentation | `technical-documentation` | README, guides, API docs | For handover docs, not legal advice |

**There is no installed skill for local SEO, Google Business Profile, NAP cleanup, local citations or Indian legal policy.** Those need a manual checklist and, for legal wording, a lawyer or chartered accountant. Do not treat a template as legal advice.

## Recommended order

**Phase 0 — Confirm the facts.** Get the domain, phone, email, service area, hours, Google Business Profile, social URLs, Graphy course URL, workshop dates, course fee, refund policy, testimonial consent and language preference. Nothing below should be invented.

**Phase 1 — Make it a real business.** Owned domain, branded email, contact page, service area, hours, Google Business Profile link, social links, privacy, terms and refund pages. Update canonical, Open Graph, JSON-LD, `robots.txt` and `sitemap.xml` to the new domain.

**Phase 2 — Connect the existing assets.** Link Graphy, Instagram, LinkedIn, YouTube and Google reviews. Add a direct WhatsApp fallback. Do not build an LMS; Graphy already does that job.

**Phase 3 — Capture and measure.** Add a small lead form with consent, a thank-you page, a CRM or Sheet, analytics, conversion events, UTM links and Search Console. The first metric should be “qualified WhatsApp joins per week,” not page views.

**Phase 4 — Improve conversion.** Add real dates, the paid programme link, reminders, a review request flow, and short written testimonials. Run `improve-website` on the page only after there is traffic and evidence.

**Phase 5 — Local growth and maintenance.** Google Business Profile posts and photos, local schema, a city/service-area page, local citations, a monthly report, uptime monitoring and a handover document.

## What I need from Deepika

1. Which domain does she own, or may we register one? Is `kushallearningcentre.com` or `.in` acceptable?
2. What is the public business phone and WhatsApp number? Is the number in her Instagram bio the right one?
3. What email address should be published? Do we need a branded address?
4. What is the real service area — Kanpur, another city, or online only? Is there a public address, or should it be a service-area business?
5. What are the opening hours or response times?
6. What is the exact Google Business Profile URL?
7. What are the Instagram, LinkedIn and YouTube profile URLs she wants linked?
8. What is the Graphy course catalogue URL, and which paid programme should the site point to?
9. What are the next workshop dates, times, language and time zone?
10. What is the course fee, batch size and refund policy?
11. Does she have written consent for the 13 videos, the names used and her photograph?
12. Who owns the domain, hosting, Graphy account, social accounts and analytics after handover?

## Cautions

- Do not publish a home address. Use a service-area business or a public class address only with permission.
- Do not add `AggregateRating` or `Review` schema just to get stars in search. Google restricts self-serving reviews. Keep the visible, owner-confirmed proof and link a real review source.
- Do not invent a Google Business Profile, phone number, address, date, price or testimonial.
- Do not put phone numbers, addresses, private pricing or client PII in this public repo.
- Legal pages must be reviewed by someone qualified. Templates are a starting point, not legal advice.
- Add consent before analytics, pixels or any form that collects a phone number.
- Keep the `gh-pages` branch generated. Never edit it by hand.
- The WhatsApp group invite must be permanent, or the primary CTA needs a direct fallback.

## Sources

- Live site: <https://karthikeyapodicheti.github.io/kushal-learning-centre/>
- Repo: <https://github.com/KarthikeyaPodicheti/kushal-learning-centre>
- Public paid platform: <https://deepikaainapur.graphy.com/>
- Public profiles found: Instagram `@deepikaainapur`, LinkedIn, YouTube teacher-training playlist, and references to a Google Business Page.
- Automated checks: HTML tags and anchors, missing assets, contrast, image alt text, H1 count, `<details>` count.
- HTTP checks: HTTP/2, HSTS, cache headers, `favicon.ico` and `site.webmanifest` status.
- Project docs: `WEBSITE.md`, `DESIGN.md`, `CREATE-WEBSITE-PLAN.md`, `CLIENT-GROWTH-ROADMAP.md`.

## Bottom line

The page is not the problem. The missing pieces are the ones a local customer uses to decide whether a business is real, reachable, safe and worth paying: an owned domain, a phone and email, a location or service area, a map listing, policies, a visible paid path, a lead database and measurement.

Fix those before touching the design again.
