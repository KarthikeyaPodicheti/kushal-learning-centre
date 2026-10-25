# AGENTS.md

<!-- The full user profile lives in USER.md. This import line is understood by agent runtimes that support @file imports; if yours does not, open USER.md directly. -->
@USER.md

> **Read `USER.md` before making product, design or commercial decisions.** It is the source of truth for who the user is, what this project is for, and how the user wants to work. The short version is below; `USER.md` has the full context.

## User snapshot

- Karthikeya Podicheti is an independent website developer / vibe coder building for small businesses and educators in India.
- This repo is the **Kushal Learning Centre** site for Deepika Ainapur: Vedic Math teacher-training for mothers and aspiring teachers.
- The current static site is a **paid-engagement demo**, not a finished freebie. The user wants to turn it into a paid website + growth system for the client.
- The commercial direction is: owned domain/brand → lead capture + analytics → paid-course checkout + reminders → student portal/LMS → maintenance and growth.
- The user values speed, SEO, accessibility, truthful proof (13 of 13 five-star), mobile-first design and clean handover.

## Project state

- **Live:** <https://karthikeyapodicheti.github.io/kushal-learning-centre/>
- **Repo:** <https://github.com/KarthikeyaPodicheti/kushal-learning-centre>
- **Original client site:** <https://kushallearningcentre.lovable.app/>
- **Stack:** hand-written `src/index.html`, `src/styles.css`, `src/script.js`, `src/404.html`; no framework, no npm dependencies.
- **Deploy:** GitHub Pages serves the generated `gh-pages` branch. `scripts/deploy-pages.sh` publishes `src/` there after changes are committed to `main`. Do not edit `gh-pages` by hand.
- **Theme:** fresh light “Marigold & Linen” system. Ivory, linen, pale marigold, sage and blush. Solid colour fields; no dark inversion.
- **Primary CTA:** “Reserve my free seat” → WhatsApp group. The free-3-days tag now sits inside the hero CTA.
- **Proof:** owner-confirmed “13 of 13 students rated the training five stars”; 13 real YouTube testimonial links. Never invent proof.

## What the user is trying to do

The user is preparing a **paid proposal** for the client. The site should demonstrate the quality of the work, but the actual sales opportunity is the missing business layer around it:

1. **Owned foundation:** domain, branded email, live site, SEO, analytics, lead form, WhatsApp tracking, real workshop dates, privacy/terms.
2. **Enrollment engine:** paid-course page, Razorpay/UPI checkout, batches and seats, automated reminders, follow-up, referrals, simple admin.
3. **Academy:** login, recorded lessons, worksheets, progress, certificates, community.
4. **Retainer:** maintenance, content/SEO, WhatsApp automation, experiment support.

Do not turn the client site into a portfolio for the user. The page should stay focused on Deepika’s customer and the free workshop.

## Non-negotiable site rules

1. **Truthful proof only.** The only rating claim allowed is the owner-confirmed 13/13 five-star statement. No invented testimonials, names, student counts, income figures, before/after results or scarcity.
2. **One primary action.** The main CTA remains “Reserve my free seat” to the WhatsApp group unless the user explicitly approves a different funnel. Secondary actions must not compete.
3. **Light theme.** Keep the Marigold & Linen palette and the warm, editorial, print-like feel. No dark hero, no gradients/blur/blend layers, no generic SaaS look.
4. **Performance.** Keep the marketing page static and fast. First load should stay lean; no unnecessary third-party scripts, fonts, pixels or iframe embeds. If a video wall is added, use click-to-load facades, not 13 live YouTube iframes.
5. **Accessibility.** WCAG AA contrast, visible focus rings, 44 px minimum tap targets, semantic headings, skip link, native disclosures, `prefers-reduced-motion`. Check at 320 px and up.
6. **Privacy and consent.** No personal data collection without a clear purpose and consent. Get owner approval before publishing client PII, testimonial names or student images. No secrets or API keys in the repo.
7. **No fake urgency.** Dates, seat counts and deadlines must be real and owner-confirmed. If dates are unknown, say “dates shared in the WhatsApp group” rather than inventing them.

## Integrating new features

Keep the marketing site separate from the application layer unless there is a strong reason to merge.

### Phase 1 — static-first additions

- **Custom domain:** connect `kushallearningcentre.com` / `.in` (confirm which the client owns) through Cloudflare DNS. Update canonical, OG/Twitter image URLs, JSON-LD, `src/robots.txt`, `src/sitemap.xml` and the `src/404.html` base path.
- **Lead capture:** Tally, Formspree or a Supabase-backed form. Ask for the minimum: name, WhatsApp number, preferred batch, consent. Redirect to a thank-you page with the WhatsApp invite and a tracked conversion.
- **Analytics:** GA4 and Meta Pixel only with consent; track `whatsapp_click`, `reserve_click`, form submit and payment start. Use UTM links in Instagram/YouTube bios.
- **Payments (fast path):** Razorpay Payment Links or a Razorpay Payment Page. No secret key in the static site. Payment webhook goes to a serverless function or automation (Cloudflare Worker, Vercel function, Make/Zapier) and writes to a database/Sheet.
- **Booking:** Cal.com/Calendly link for discovery calls, only if the client will actually take calls.
- **CMS:** Sanity, Notion or a Git-based CMS for testimonials, dates, FAQs and batch details. Don’t build a custom admin for a five-field content model.

### Phase 2 — serverless enrollment

- **Hosting:** move the marketing site to Cloudflare Pages or Vercel if server-side functions, forms or auth are needed. GitHub Pages is fine while the site is static.
- **Database/auth:** Supabase (Postgres, Auth, Storage, Row Level Security). Do not build auth from scratch.
- **Payments:** Razorpay Orders + Checkout, webhook signature verification, receipts, failed-payment recovery, refund handling. PCI stays with Razorpay.
- **Messaging:** Resend/Brevo for email; WhatsApp Business API via Meta Cloud API, Wati, Interakt or AiSensy for 1:1 reminders. WhatsApp groups are community spaces, not a reliable automation surface. Collect opt-ins and use approved templates.
- **Automation:** reminder sequence before each workshop day, replay link, post-workshop offer, no-show follow-up, cohort onboarding. Keep every message truthful and easy to stop.
- **Admin:** one small dashboard for leads, payments, batches and content. Or use Airtable/Notion if speed matters more than polish.

### Phase 3 — academy / LMS

- Put the student experience on an `app.` or `learn.` subdomain, not inside the marketing page.
- Use Supabase Auth + RLS; private video on Mux/Bunny/Cloudflare Stream; worksheets on R2/Supabase Storage.
- Core screens: dashboard, modules, lesson player, worksheets, progress, certificate, support.
- Certificate: real completion criteria, unique verification ID, brand-consistent PDF.
- If the client needs speed more than custom UX, white-label Graphy/Teachable/Thinkific and link it. Do not build an LMS just to say you did.

### Integration cautions

- Never put Razorpay/Stripe secrets, WhatsApp tokens or Supabase service-role keys in HTML or the public repo.
- Verify payment webhooks server-side. Do not trust a success redirect alone.
- Use Row Level Security for every student table and private file.
- Test payment failure, duplicate webhook, refund and expired link flows.
- Add privacy, terms and refund pages before taking money. In India, handle DPDP consent and payment data carefully.
- Keep the client’s existing WhatsApp group link; do not replace it with a personal number or an unapproved API flow.

## Sales and proposal work

- A client-safe growth roadmap lives in [`CLIENT-GROWTH-ROADMAP.md`](CLIENT-GROWTH-ROADMAP.md).
- The Phase 1 delivery scope, implementation detail and acceptance criteria live in [`1phase.md`](1phase.md).
- The Phase 2 enrollment-engine scope lives in [`phase2.md`](phase2.md).
- Keep **pricing, negotiation notes and internal sales tactics out of this public repo**. Discuss them with the user or put them in a private repo/document.
- The user’s pitch should sell outcomes: more tracked leads, better show-up, paid enrollments, less manual WhatsApp work, a credible owned domain, and a path to recurring revenue.
- Do not promise revenue. Use the client’s real fee/batch numbers to frame payback; ask for them first.
- The demo currently uses Deepika’s name and photograph. Before promoting it publicly, confirm permission or add `noindex`/password protection.

## Repo map

```
src/index.html                 page + metadata + JSON-LD
src/styles.css                 full visual system
src/script.js                  menu, header state, reveals, sticky bar
src/404.html                   on-brand not-found page
src/robots.txt                 crawl rules
src/sitemap.xml                site URLs
src/assets/                    fonts, founder photo, social card
docs/README.md                 project README and run/deploy guide
docs/AGENTS.md                 this file
docs/USER.md                   user profile / engagement context
docs/1phase.md                 Phase 1 delivery scope and acceptance criteria
docs/phase2.md                 Phase 2 delivery scope: checkout, reminders, admin
docs/CLIENT-GROWTH-ROADMAP.md  audit, features, integration and pitch
scripts/deploy-pages.sh        publishes src/ to the gh-pages branch
opencode.json                  agent instruction imports
```

## Local commands

```bash
# preview from the site source
cd /data/data/com.termux/files/home/kushal-learning-centre/src
python3 -m http.server 4173
# http://127.0.0.1:4173/

# structural + contrast check (run from src/)
node /data/data/com.termux/files/home/.cache/opencode/tmp/opencode/check.mjs

# layout/overflow check (run from src/)
node /data/data/com.termux/files/home/.cache/opencode/tmp/opencode/layout.mjs

# deploy from the repo root
cd /data/data/com.termux/files/home/kushal-learning-centre
git add -A
git commit -m "Describe the change"
git push origin main
bash scripts/deploy-pages.sh

# verify Pages
gh api repos/KarthikeyaPodicheti/kushal-learning-centre/pages/builds/latest --jq '.status'
```

## Definition of done for site changes

1. Copy is truthful and owner-approved; no invented proof or scarcity.
2. Visual change fits Marigold & Linen and works at 320, 360, 390, 768, 1024 and 1440 px.
3. No horizontal overflow; tap targets at least 44 px; keyboard focus visible.
4. Text contrast checked; no new low-contrast pairs.
5. HTML tags/anchors/assets valid; no console errors or failed assets.
6. `prefers-reduced-motion` still works.
7. Live GitHub Pages build succeeds after running `bash scripts/deploy-pages.sh`.
8. If a new integration is added, record the service, env vars, owner, cost and data flow in the roadmap or a private doc.

## Open questions for the client

- Which domain does she own, or may the user register one?
- What is the paid course fee, batch size and current free-to-paid conversion?
- What are the next workshop dates, language and time zone?
- How many people are in the WhatsApp group today, and what is the show-up rate?
- Does she have written consent for the 13 testimonials and names?
- Does she want to take 1:1 calls, or keep everything in WhatsApp?
- Who owns the photos, videos and copy after handover?
- What is the monthly budget for domain, email, WhatsApp API, hosting and maintenance?

## Short version for a fresh agent

Read `USER.md`, keep the site fast and honest, do not redesign the light theme without an explicit request, and help the user turn this strong demo into a paid, measurable enrollment system for the client. The next sellable layer is **lead capture + real dates + paid checkout + reminders**, not another landing-page rewrite.
