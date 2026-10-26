# Kushal Learning Centre — growth roadmap

**Status:** proposal draft for a paid engagement  
**Prepared:** October 2026  
**Original site:** <https://kushallearningcentre.lovable.app/>  
**Current demo:** <https://karthikeyapodicheti.github.io/kushal-learning-centre/>

This is the client-facing thinking behind the rebuild: what the current site does, where the commercial leaks are, and which features are worth paying for. It deliberately avoids inventing revenue figures and keeps internal pricing out of the public repo.

## 1. What the current site is

The Lovable site is a single-page brochure for a free three-day Vedic Math workshop:

- Hero: “From Learner to Confident Teacher, Impact Creator & Income Builder.”
- A “quiet struggle / new chapter” comparison.
- A six-step teaching system.
- Who it is for, a three-day course outline and three bonus modules.
- Founder section for Deepika Ainapur.
- Thirteen embedded YouTube testimonial videos.
- A final WhatsApp CTA.

It explains the transformation well. It does **not** run the business around it.

## 2. Audit findings

### Performance and technical

| Finding | Why it matters |
|---|---|
| 13 live YouTube `<iframe>` embeds | Several third-party players, requests and cookies load before a visitor clicks anything. Heavy on mid-range Android phones and slow mobile data. |
| ~324 KB JS + ~17 KB JS + ~85 KB CSS + ~141 KB hero, before the video embeds | The SPA pays a hydration and asset cost the content does not need. |
| Lovable project URL, no custom domain | The brand looks rented. No branded email or durable address. |
| “Edit with Lovable” badge | Signals a template/tool to a buyer who is assessing credibility. |
| `robots.txt` returns the SPA HTML (soft 404) | No real crawl rules. |
| `sitemap.xml` and `favicon.ico` return 404 | Weak technical SEO and browser presentation. |
| No canonical tag or JSON-LD in the delivered HTML | Search engines get less help understanding the organisation, course and FAQ. |
| Only a Clarity marker was found in the delivered HTML; no GA4 or Meta Pixel setup was evident | Traffic and WhatsApp intent are effectively unmeasured. |

### Conversion and operations

| Finding | Why it matters |
|---|---|
| Every CTA goes to one WhatsApp group link | No name, number, source or interest is captured. The business cannot follow up with an individual who does not join. |
| No form, booking or lead capture | No way to segment mothers by grade, city, language or intent. |
| No visible workshop dates, times or “what happens next” | Visitors must ask. Every unanswered question delays a reservation. |
| No paid offer or checkout | The free workshop has no visible next step. The site generates attention but cannot take money. |
| No email/SMS/WhatsApp reminder sequence | Show-up and post-workshop conversion depend on manual group messages. |
| No privacy, terms, refund or contact page | Trust and payment-readiness gaps, especially before a paid cohort. |
| No written testimonial summaries or outcomes | The videos are real proof, but they are not skimmable, searchable or shareable. |
| No blog, local pages or teacher-training SEO content | The site cannot capture searches beyond the brand name. |
| No referral mechanism | The strongest distribution channel — mothers recommending mothers — is not instrumented. |

### What the rebuild already fixes

The current demo is a stronger foundation:

- hand-written static HTML/CSS/JS, no framework and no hydration;
- one self-hosted portrait, two self-hosted fonts, no third-party requests;
- under ~300 KB of core marketing assets;
- mobile-first light theme, accessible focus states, reduced-motion support;
- real 13/13 five-star proof, 13 real video links and a readable story index;
- FAQ, structured data, sitemap, robots, custom 404 and social card.

It is a credible **Phase 1**. It is not yet the enrollment system.

### Existing assets to connect before building anything new

Public research found assets the site does not use:

- **Public social profiles exist:** Instagram `@deepikaainapur`, LinkedIn, and a YouTube teacher-training playlist.
- **Public posts reference a Google Business Page and Google reviews.** Confirm the exact listing and link it; do not create a duplicate.
- **Public posts point to a Kanpur presence.** Confirm the exact service area and whether there is a public class address. Do not publish a home address.
- **A public business phone number exists.** Confirm which number is the WhatsApp Business line before publishing it.

The first paid work is not an LMS, a custom checkout or another redesign. It is connecting these assets, adding the missing trust and legal layer, and measuring what happens. The site currently sends every visitor into one WhatsApp group and stops before the paid programme.

## 3. The commercial gap

The current journey is:

> Instagram / word of mouth → landing page → WhatsApp group → three free days → ???

The missing journey is:

> traffic → page → seat form → confirmation → reminders → free workshop → paid offer → checkout → onboarding → course delivery → certificate → referral.

The website should not just describe the transformation. It should **operate the funnel** that delivers it.

## 4. Recommended roadmap

### Phase 1 — Owned foundation (1–2 weeks)

**Outcome:** a professional owned home that captures and measures interest.

- Custom domain and branded email (`hello@`, `support@`).
- Launch the current rebuilt site on the domain.
- Link the Instagram, LinkedIn, YouTube and Google Business profiles Deepika approves.
- Add a public contact block and contact page with owner-approved phone, WhatsApp and email.
- Replace the general WhatsApp link with a **prefilled WhatsApp message** or a short seat form that redirects to the group.
- Capture: name, WhatsApp number, preferred batch, grade interest, consent. Keep it to three or four fields.
- Add real workshop dates/times and a clear “what happens after you reserve” block.
- Add privacy, terms, refund and contact pages.
- Add local business schema, an NAP block and a map/Google Business Profile link once the service area is confirmed.
- Add GA4 + Meta Pixel with consent; track `reserve_click`, `whatsapp_join`, form submit and payment start.
- Add UTM links for Instagram, YouTube and WhatsApp status.
- Replace 13 live YouTube iframes with **click-to-load video facades** or a curated video wall.
- Add a short written proof section with owner-approved summaries and consent.

**Sell it as:** “Own the brand, stop losing leads, and see what your traffic actually does.”

### Phase 2 — Enrollment engine (2–4 weeks)

**Outcome:** the free workshop has a measurable paid next step.

- Paid course page: curriculum, outcomes, who it is for, bonuses, price, payment options, start date, refund policy, FAQ.
- Razorpay checkout with UPI, cards and EMI where eligible. Never put secret keys in the static site.
- Payment webhook → database/Sheet → confirmation email/WhatsApp → onboarding.
- Batch management: dates, time zone, language, capacity, waitlist. Only show real seats.
- Automated reminders: before each workshop day, replay link, post-workshop offer, no-show follow-up.
- Coupon/referral codes for alumni; track who referred whom.
- Simple admin view for leads, payments, batches and content.
- Email capture with a genuinely useful lead magnet, e.g. a printable Vedic Math practice sheet or a “start teaching from home” checklist.

**Sell it as:** “Turn the free workshop from a group chat into a predictable enrollment pipeline.”

### Phase 3 — Academy (4–6 weeks, deferred)

**Decision:** do not sell an LMS as a growth project. Revisit this phase only if the current delivery setup becomes a real constraint.

**Outcome:** delivery and retention do not depend on manually sharing files.

- Student login on `app.` or `learn.` subdomain.
- Modules, recorded lessons, worksheets, assignments and progress.
- Private video hosting; no public Drive links.
- Certificate with completion criteria and a verification ID.
- Community space and support/FAQ.
- Admin dashboard for cohorts, content and student questions.
- Optional monthly membership or alumni programme.

**Sell it as:** “Deliver a premium course experience without adding admin work.”

### Phase 4 — Growth (ongoing)

- SEO content: “Vedic maths for Grade 4”, “how to teach Vedic maths from home”, “Vedic maths teacher training in India”.
- City/grade landing pages only where there is real demand.
- Telugu/Hindi versions with native review.
- YouTube/Instagram repurposing: each testimonial becomes a short page and share card.
- School/coaching-centre B2B page and proposal download.
- Paid-ads landing pages and experiments.
- Referral/ambassador programme for alumni.
- Quarterly conversion and content experiments.

## 5. Feature priority

### P0 — sell this first

1. Custom domain + branded email + launch.
2. Lead form and WhatsApp handoff.
3. Real batch dates and next-step clarity.
4. Paid course page + Razorpay payment link.
5. Analytics/UTM tracking.
6. Privacy, terms, refund and contact.
7. Video facades; written proof summaries.

### P1 — build after the first paid pilot

1. Full Razorpay checkout + verified webhook + receipts.
2. Automated WhatsApp/email reminders.
3. Referral codes and tracking.
4. CMS/admin for dates, testimonials and FAQs.
5. SEO content hub.
6. Bilingual landing page.

### P2 — build when volume justifies it

1. Student portal/LMS.
2. Certificates and verification.
3. Community/membership.
4. School/B2B funnel.
5. Mobile PWA/offline worksheets.
6. AI FAQ assistant with approved answers only.

## 6. How to integrate the features

### Keep the marketing site static

The current page is fast because it has no server. Preserve that. Add business features through external services or a separate application subdomain.

### Suggested stack

| Need | Practical option |
|---|---|
| Marketing host | GitHub Pages now; Cloudflare Pages or Vercel when functions/forms are needed |
| Domains/DNS | Cloudflare Registrar or any registrar; DNS at Cloudflare |
| Forms | Tally/Formspree for speed; Supabase/Cloudflare function for ownership |
| Database/auth | Supabase (Postgres, Auth, Storage, RLS) |
| Payments | Razorpay Payment Links/Pages first; Razorpay Orders + Checkout + webhook later |
| Email | Resend or Brevo with domain authentication (SPF/DKIM/DMARC) |
| WhatsApp | Meta Cloud API via Wati/Interakt/AiSensy for 1:1 reminders; keep the group for community |
| CMS | Sanity, Notion or Git-based content; do not build a custom CMS for five fields |
| Video | Mux, Bunny or Cloudflare Stream for course content; YouTube facade for public proof |
| Analytics | GA4 + Meta Pixel with consent; server-side events later |
| Student app | Next.js/Astro + Supabase on `app.` or `learn.` subdomain |

### Data flow for the first paid version

1. Visitor submits a seat form.
2. Lead row is created in Supabase/Sheet with source and UTM.
3. Confirmation page/email/WhatsApp gives the group link and dates.
4. Reminders run before each session.
5. Post-workshop offer page links to Razorpay.
6. Razorpay webhook verifies the payment and marks the student paid.
7. Onboarding email/WhatsApp sends login or next steps.
8. Admin sees lead → attended → paid → completed.

### Security and privacy

- No API secrets in `src/index.html`, `src/script.js` or the public repo.
- Verify Razorpay webhooks server-side; a success redirect is not proof of payment.
- Use Supabase Row Level Security for every student table and private file.
- Collect only what is needed; add consent, privacy and deletion paths.
- Keep testimonial consent and student image permissions on file.
- Test failed payments, duplicate webhooks, refunds and expired links.
- Follow India’s DPDP requirements; don’t send transactional WhatsApp messages without opt-in.

## 7. Pitch outline

### The one-line pitch

> “You already have the proof and the free workshop. I’ll build the system that turns that attention into paid students — starting with your own domain, a lead capture flow, and a paid checkout.”

### 30-minute conversation

1. **Show the rebuild (5 min):** fast, mobile, accessible, real proof, no Lovable badge.
2. **Name three leaks (7 min):**
   - every visitor disappears into one WhatsApp group;
   - no dates or paid offer, so the free workshop has no next step;
   - no tracking, reminders or follow-up, so the business cannot see or recover lost interest.
3. **Show the journey (5 min):** reserve → remind → attend → offer → pay → learn → refer.
4. **Match phases to budget (5 min):** foundation first; enrollment second; academy only when volume justifies it.
5. **Ask for the numbers (5 min):** fee, batch size, show-up rate, current conversion, group size.
6. **Close (3 min):** agree on a small Phase 1 or a paid discovery/roadmap; do not leave with “I’ll think about it.”

### What to bring

- This live demo on a phone and a laptop.
- A one-page before/after: original page vs rebuilt page.
- A simple journey diagram (the eight steps above).
- The Instagram, LinkedIn, YouTube and Google Business links Deepika approves, ready to connect.
- A scope sheet with Phase 1 deliverables, timeline, client responsibilities and price.
- A payment link for the deposit.

### Discovery questions

- What is the paid course fee and average batch size?
- How many people join the WhatsApp group, and how many attend live?
- How do people pay today? What happens after the workshop?
- Which workshop dates, language and time zone are next?
- Do you have written consent for all 13 testimonials and names?
- Which domain do you own? If none, which name do you prefer?
- Which Instagram, LinkedIn, YouTube and Google Business links are approved for the site?
- Who handles WhatsApp replies today, and how many hours per week?
- What would make this project a clear win in 90 days?

## 8. Commercial shape

Use productised phases, not hourly billing. Quote after discovery.

- **Foundation:** domain, launch, lead form, analytics, dates, legal pages, performance fixes.
- **Enrollment engine:** paid page, checkout, reminders, referrals, admin.
- **Academy:** login, course delivery, worksheets, progress, certificates.
- **Care plan:** hosting, updates, analytics, content and automation support.

Commercial anchors, exact pricing and negotiation notes are intentionally **not stored in this public repo**. Keep them in a private proposal.

## 9. Success metrics

Track these from day one:

- unique visitors and traffic source;
- reserve-form completion rate;
- WhatsApp group joins;
- show-up rate per workshop day;
- free-to-paid conversion;
- paid seats and revenue;
- refund/chargeback rate;
- course completion and certificate rate;
- referral share of new students;
- page speed and mobile Core Web Vitals.

## 10. Guardrails

- No invented testimonials, names, ratings, income figures or seat scarcity.
- 13/13 five stars is the only rating claim and remains owner-confirmed.
- Get consent before using a student’s face, name or result.
- Do not promise revenue; promise a measurable system and report what it does.
- Do not take payments before privacy, terms and refund pages exist.
- Keep the client’s WhatsApp group; do not silently replace it with a personal number.
- Do not publish a phone number, address, testimonial name or client photo without explicit approval.
- Before promoting the demo, confirm Deepika’s permission to use her name and photograph, or protect it with a password/`noindex`.
