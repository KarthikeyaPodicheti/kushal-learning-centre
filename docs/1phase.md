# Phase 1 — Owned foundation

**Project:** Kushal Learning Centre  
**Client:** Deepika Ainapur  
**Build:** static site on GitHub Pages  
**Status:** scope draft  
**Prepared:** October 2026

**Live demo:** <https://karthikeyapodicheti.github.io/kushal-learning-centre/>  
**Repository:** <https://github.com/KarthikeyaPodicheti/kushal-learning-centre>

Phase 1 turns the current demo into a measurable, owned lead-capture site. It is **not another redesign**. The visual work is already done; this phase adds the business layer around it.

---

## 1. Objective

By the end of Phase 1, the site should:

- live on Deepika's own domain;
- capture a name and WhatsApp number before sending someone to the group;
- show confirmed workshop dates and a calendar link;
- track which buttons and traffic sources produce leads;
- include privacy, terms, refund and contact pages;
- be fast, mobile-first and accessible;
- give Deepika a simple weekly view of what is working.

The outcome is not "a prettier page". The outcome is:

> **Every interested visitor becomes a contact Deepika can follow up with, and every lead has a source.**

---

## 2. Scope

### Included

- Custom domain connection and HTTPS.
- Branded email setup guidance.
- Launch of the current static site on the domain.
- Seat-reservation form and thank-you page.
- Formspree submission, email notification and Google Sheet.
- Confirmed workshop dates, timezone, calendar file and basic event schema.
- GA4 analytics, UTM capture, CTA events and consent banner.
- Privacy, terms, refund and contact pages.
- Footer legal links and form consent checkbox.
- Mobile, accessibility and form QA.
- 30 days of post-launch support.
- One-page handover guide.

### Not included

- Razorpay or any paid checkout.
- Automated WhatsApp reminders.
- Student login or LMS.
- Full CMS/admin dashboard.
- Paid ads management.
- Blog/SEO content programme.
- Multilingual site.
- Custom backend or database.

Those belong to Phase 2 and Phase 3.

---

## 3. Stack

| Need | Tool | Notes |
|---|---|---|
| Hosting | GitHub Pages | Keep the current static deployment |
| Domain/DNS | Cloudflare | Custom domain, HTTPS, redirects |
| Form | Native HTML form → Formspree | No server needed on GitHub Pages |
| Lead storage | Formspree + Google Sheet | Sheet via Make/Zapier or manual CSV |
| Dates | One `data/workshop.json` source | Rendered into page, form and calendar |
| Analytics | GA4 | Loaded only after consent |
| Optional ads tracking | Meta Pixel | Only if Deepika runs Meta ads |
| Legal pages | Static HTML | Same header/footer as the site |
| Consent | Lightweight cookie banner | Accept analytics / Only essential |

**Why Formspree:** GitHub Pages cannot process POST requests. Formspree lets the form keep the site's design, sends an email for each lead, stores submissions and can push them to a Sheet. Tally is the fallback if Deepika wants to edit the form herself. Supabase is the Phase 2 upgrade.

---

## 4. Lead capture

### 4.1 The flow

```text
Visitor
  ↓
"Reserve my free seat"
  ↓
/reserve/  (short form)
  ↓
Formspree
  ├── Email notification to Deepika
  ├── Row in Google Sheet
  └── Optional auto-reply
  ↓
/thank-you/
  ├── Join WhatsApp group
  ├── Add to calendar
  └── What happens next
```

Keep a secondary link: **"I'll just join the WhatsApp group."** Some people will not share details; let them through, and track that choice.

### 4.2 Form fields

| Field | Required | Notes |
|---|---|---|
| Name | Yes | `autocomplete="name"` |
| WhatsApp number | Yes | `type="tel"`, country code, 10–15 digits |
| Preferred batch | Yes | Options come from the dates file |
| Email | No | Backup contact and auto-reply |
| Consent | Yes | Not pre-checked; links to Privacy Policy |
| `utm_source` | No | Hidden; captured from URL |
| `utm_medium` | No | Hidden |
| `utm_campaign` | No | Hidden |
| `utm_content` | No | Hidden |
| `page_url` | No | Hidden; where the form was opened |
| `submitted_at` | No | Hidden timestamp |
| `_gotcha` | No | Honeypot for spam |

Recommended consent copy:

> I agree to receive workshop updates on WhatsApp. I can opt out anytime. I've read the Privacy Policy.

### 4.3 Form behaviour

- Native HTML form posted to Formspree.
- `_next` redirect to `/thank-you/`.
- `_subject` set to "New workshop seat reservation".
- Honeypot field hidden from real users.
- Formspree spam filtering enabled.
- `form_start` event when the visitor focuses the first field.
- `generate_lead` event on the thank-you page.
- UTM values captured on landing and stored in `sessionStorage`.
- If JavaScript is unavailable, the form still posts; the thank-you page still works.
- Do not put the WhatsApp group link behind a form with no escape. Keep the "just join" link.

### 4.4 Where leads go

Google Sheet columns:

```text
submitted_at | name | whatsapp | email | batch |
utm_source | utm_medium | utm_campaign | utm_content |
page_url | consent | status
```

Suggested `status` values for later:

```text
new → joined_group → attended_day_1 → attended_day_2 →
attended_day_3 → offer_sent → paid → lost
```

Phase 1 only needs `new`, `joined_group`, `attended` and `lost`; the rest can wait for Phase 2.

### 4.5 Upgrade path

In Phase 2, move leads to Supabase:

- `leads` table;
- insert-only RLS policy for the public form;
- Cloudflare Turnstile;
- unique constraint on normalised WhatsApp number;
- admin view for the client;
- webhook/automation for reminders.

Do not expose the Supabase service-role key in the static site.

---

## 5. Showing real dates

### 5.1 Visible content

Add a clear **Next free workshop** card near the hero:

> **Next free workshop**  
> **7–9 November 2026**  
> 7:00–8:30 PM IST · English · Live on WhatsApp  
> [Add to calendar]

Use semantic markup:

```html
<time datetime="2026-11-07">7 November</time>
```

### 5.2 Single source of truth

Store the workshop details in `data/workshop.json`:

```json
{
  "workshop": {
    "title": "Free 3-Day Vedic Math Workshop",
    "timezone": "Asia/Kolkata",
    "language": "English",
    "dates": ["2026-11-07", "2026-11-08", "2026-11-09"],
    "time": "19:00-20:30",
    "status": "confirmed"
  },
  "batches": [
    {
      "id": "nov-2026",
      "label": "7–9 November 2026",
      "status": "open"
    }
  ]
}
```

Render the same source into:

- the visible date card;
- the form's batch dropdown;
- the `Event` structured data;
- the `.ics` calendar file;
- the thank-you page.

If dates change, update one file and redeploy. If Deepika wants to edit dates herself, add a one-screen Sanity CMS as a paid add-on or Phase 2 feature.

### 5.3 Calendar file

Create `workshop.ics` with:

- three daily sessions or one multi-day event, matching the real schedule;
- `TZID=Asia/Kolkata`;
- title, description, WhatsApp/online location;
- organiser details.

Test the downloaded file in Google Calendar and Apple Calendar.

### 5.4 Event schema

Add JSON-LD only when dates are confirmed:

- `Event`;
- `name`;
- `startDate` and `endDate`;
- `eventAttendanceMode: OnlineEventAttendanceMode`;
- `location` as a virtual/online location;
- `organizer`;
- `description`;
- `offers` only if there is a real price (there isn't in Phase 1).

### 5.5 If dates are not confirmed

Do **not** invent dates or add `Event` schema. Show:

> "Next dates are announced in the WhatsApp group."

Collect a preferred month in the form. Add the dates when Deepika confirms them.

---

## 6. Tracking

### 6.1 GA4 events

| Event | Fires when |
|---|---|
| `reserve_click` | Any "Reserve my free seat" button is clicked |
| `form_start` | Visitor starts the reservation form |
| `generate_lead` | Thank-you page loads after a successful submission |
| `whatsapp_join` | WhatsApp group button is clicked |
| `calendar_add` | Calendar link or `.ics` download is clicked |
| `begin_checkout` | Phase 2 only |
| `purchase` | Phase 2 only |

Include useful parameters:

```text
cta_location: hero | sticky | footer | faq
page_location
batch
lead_source
```

Never send names, WhatsApp numbers or email addresses to GA4.

### 6.2 UTM capture

Use links like:

```text
https://kushallearningcentre.com/?utm_source=instagram&utm_medium=social&utm_campaign=free_workshop
```

On page load:

1. Read `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.
2. Store them in `sessionStorage`.
3. Fill hidden fields on the reservation form.
4. Fire the lead event with the source.

For direct WhatsApp clicks, open the group in a new tab so the `whatsapp_join` event can send before the visitor leaves.

### 6.3 Consent

- Add a small banner: **Accept analytics / Only essential**.
- Store the choice in `localStorage`.
- Load GA4 only after acceptance.
- Add Meta Pixel only if Deepika runs Meta ads.
- Use Google Consent Mode v2 if ads are planned.
- Link the banner to the Privacy Policy.
- "Only essential" must be a real option, not a fake choice.

### 6.4 Reporting

A simple weekly view:

- visitors;
- reserve clicks;
- form starts;
- leads;
- WhatsApp joins;
- leads by source;
- cost per lead if ads are running.

Phase 2 adds show-up rate, paid seats and revenue.

---

## 7. Legal pages

Create four static pages with the same header/footer:

- `/privacy/`
- `/terms/`
- `/refund/`
- `/contact/`

### 7.1 Privacy Policy

Cover:

- who collects the data;
- what is collected: name, WhatsApp number, optional email, batch preference, UTM/source;
- why: workshop registration, reminders, updates;
- consent and withdrawal;
- who it is shared with: Formspree, Google Sheets, WhatsApp;
- retention period;
- access/correction/deletion rights;
- cookies and analytics;
- contact and grievance details;
- last updated date.

### 7.2 Terms

Cover:

- website use;
- intellectual property;
- third-party links;
- limitation of liability;
- no guarantee of income, employment or results;
- governing law;
- last updated date.

The "no guarantee of income" line is important because the brand talks about building income. Do not promise outcomes.

### 7.3 Refund Policy

For Phase 1, the offer is a free workshop. State clearly:

> "The free workshop has no fee. Paid programme terms, including refunds, will be published before any payment is collected."

When the paid course launches, replace this with the real refund window, processing time and exclusions.

### 7.4 Contact

Include:

- branded email;
- WhatsApp contact;
- business name;
- address only if Deepika approves;
- response expectations, without inventing a guaranteed reply time.

### 7.5 Consent and links

- Consent checkbox on the form, required and not pre-checked.
- Footer links on every page.
- Cookie banner links to Privacy.
- Add legal pages to `src/sitemap.xml`.
- Do not hide the legal links in small print only.

### 7.6 Review

I can write customised drafts, but this is not legal advice. Deepika or her CA/lawyer should review the final Privacy, Terms and Refund pages.

---

## 8. File changes

| File | Change |
|---|---|
| `src/index.html` | Date card, form CTA, consent link, footer legal links, tracking hooks |
| `src/styles.css` | Form, date card, thank-you and legal page styles |
| `src/script.js` | UTM capture, form events, consent, CTA tracking |
| `src/data/workshop.json` | Dates, timezone, language, batches |
| `src/workshop.ics` | Calendar download |
| `src/reserve/index.html` | Reservation form |
| `src/thank-you/index.html` | Confirmation, WhatsApp CTA, calendar |
| `src/privacy/index.html` | Privacy Policy |
| `src/terms/index.html` | Terms of Use |
| `src/refund/index.html` | Refund Policy |
| `src/contact/index.html` | Contact details |
| `src/sitemap.xml` | Add new pages and domain |
| `src/robots.txt` | Update sitemap URL |
| `src/404.html` | Update base path for the custom domain |

Use folder-based `index.html` files for clean URLs. No framework or build step is required.

---

## 9. Build sequence

| Day | Work |
|---|---|
| 1 | Domain, DNS, branded email, content review |
| 2 | Dates file, date card, calendar file, event schema |
| 3–4 | Reservation form, thank-you page, Formspree, Sheet, auto-reply |
| 5 | GA4, UTM capture, events, consent banner |
| 6 | Privacy, terms, refund and contact pages |
| 7 | Footer links, sitemap, canonical/OG updates, mobile QA |
| 8–9 | Form and tracking tests, accessibility pass, deploy |
| 10 | Handover guide and 30-day support starts |

Target: **7–10 working days** after receiving the content and access.

---

## 10. What I need from Deepika

- Domain registrar access, or approval to register one.
- Preferred domain and branded email address.
- Logo and approved photos.
- Confirmed workshop dates, times, timezone and language.
- WhatsApp group link.
- Notification email for leads.
- Business name and address (only if she wants it public).
- Refund policy, or approval to use the free-workshop placeholder.
- Consent for testimonial names, faces and videos.
- Privacy contact/grievance details.
- 30 minutes to review the form and legal pages.

---

## 11. Acceptance criteria

Phase 1 is done when:

- [ ] The site loads on the custom domain over HTTPS.
- [ ] Canonical, Open Graph, sitemap and robots URLs use the new domain.
- [ ] The reservation form submits successfully.
- [ ] A test lead appears in Formspree, email and the Google Sheet.
- [ ] The thank-you page shows the WhatsApp group and calendar link.
- [ ] The consent checkbox blocks submission when unchecked.
- [ ] UTM values appear in the lead row.
- [ ] GA4 shows `reserve_click`, `form_start`, `generate_lead`, `whatsapp_join` and `calendar_add`.
- [ ] No analytics cookies are set before consent.
- [ ] Dates are correct, use IST and match the form and calendar.
- [ ] `workshop.ics` opens correctly in Google Calendar.
- [ ] Event schema validates when dates are confirmed.
- [ ] Privacy, terms, refund and contact pages are linked and readable.
- [ ] The site works at 320 px, 390 px, 768 px and 1440 px.
- [ ] Keyboard focus is visible; form labels are associated.
- [ ] No console errors or failed assets.
- [ ] GitHub Pages build is `built`.
- [ ] Handover guide is delivered.

---

## 12. QA checklist

### Form

- [ ] Valid submission creates one lead.
- [ ] Missing name, number or consent is blocked.
- [ ] Invalid number shows a clear error.
- [ ] Honeypot catches simple spam.
- [ ] Double-click does not create duplicate leads.
- [ ] Thank-you page is reachable after submit.
- [ ] "Just join the group" link works.
- [ ] Form is usable on a mid-range Android phone.

### Tracking

- [ ] UTM link → source appears in the Sheet.
- [ ] GA4 realtime shows the events.
- [ ] Rejecting consent prevents analytics cookies.
- [ ] Accepting consent loads GA4.
- [ ] WhatsApp click fires before navigation.
- [ ] Calendar link fires `calendar_add`.
- [ ] No personal data is sent to GA4.

### Dates

- [ ] Dates match the confirmed schedule.
- [ ] Timezone is IST.
- [ ] Form dropdown matches the date card.
- [ ] `.ics` download works.
- [ ] `Event` schema has no fake dates or price.
- [ ] Fallback copy is used when dates are unconfirmed.

### Legal and accessibility

- [ ] Privacy, terms, refund and contact links work from every page.
- [ ] Consent copy links to Privacy.
- [ ] Cookie banner can be dismissed and reopened.
- [ ] Headings are in order.
- [ ] Focus states are visible.
- [ ] Contrast passes AA.
- [ ] No horizontal overflow at 320 px.

---

## 13. Third-party costs

Paid by the client at actuals, or included in the proposal:

| Item | Approximate cost |
|---|---|
| Domain | ₹800–1,500 per year |
| Formspree | Free tier; paid plan if volume grows |
| Zoho Mail | Around ₹1,500 per user per year |
| Google Workspace | Higher; optional |
| Cloudflare | Free |
| GA4 | Free |
| Make/Zapier | Free tier may be enough initially |

No paid ads, WhatsApp API or LMS costs are included in Phase 1.

---

## 14. Handover

Deliver:

- the live URL and admin access;
- Formspree login/ownership;
- Google Sheet link;
- GA4 property access;
- a one-page guide covering:
  - how to view new leads;
  - how to update dates;
  - how to export leads;
  - what to do when someone reserves;
  - who owns the domain and accounts;
- a short screen recording;
- 30 days of support for bugs and small fixes.

Do not hold the client's domain or accounts hostage. Transfer ownership properly.

---

## 15. Open questions

- Which domain does Deepika own, or may I register one?
- What are the confirmed workshop dates, times and language?
- What is the paid course fee and average batch size? Needed for Phase 2 framing, not for the Phase 1 build.
- Does she have consent for all 13 testimonial videos and names?
- Who will reply to leads, and within what time?
- What is the refund policy for the paid programme?
- Does she want email as well as WhatsApp contact?
- Does she want a self-service CMS for dates now, or is a manual update acceptable for Phase 1?
- Which analytics tools does she already use, if any?

---

## 16. Client-facing explanation

> "In Phase 1, I'll put a short form before the WhatsApp group so you get every lead's name and number. The page will show the real workshop dates and a calendar link, and I'll track which buttons and sources bring people in. I'll also add privacy, terms, refund and contact pages so people trust you before sharing their number. It all runs on the fast static site, with no monthly server."

---

## 17. Commercial note

Phase 1 is a fixed-scope paid engagement. The exact fee, payment schedule and any add-ons are kept in a private proposal, not in this public repository.

Third-party costs are passed through at actuals unless the proposal says otherwise.

---

## Related documents

- [`AGENTS.md`](AGENTS.md) — operating rules for this repo.
- [`USER.md`](USER.md) — user and engagement context.
- [`CLIENT-GROWTH-ROADMAP.md`](CLIENT-GROWTH-ROADMAP.md) — full audit, feature roadmap and pitch outline.
