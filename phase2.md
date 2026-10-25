# Phase 2 — Enrollment engine

Phase 2 is the **enrollment engine**. Phase 1 captures interest; Phase 2 turns it into paid students and removes manual WhatsApp work.

The key architectural decision: **keep the marketing site static, and build the paid system as a separate app.**

GitHub Pages cannot securely handle payments, webhooks, logins or admin data. So:

- `kushallearningcentre.com` → static marketing site
- `app.kushallearningcentre.com` → paid enrollment app + admin
- Supabase → database and admin login
- Razorpay → payments
- Resend → email
- WhatsApp Business API → reminders
- Vercel → hosting the app

---

## 1. What Phase 2 actually includes

1. A **paid course sales page** on the main domain.
2. A **checkout flow** with Razorpay/UPI/cards.
3. A **payment webhook** that confirms the order and creates the enrollment.
4. **Batches and real seat counts**.
5. **Coupons and referral codes**.
6. **Automated email/WhatsApp reminders**.
7. A **simple admin dashboard** for leads, orders, students and batches.
8. **Purchase tracking** in GA4 and Meta.
9. Updated **privacy, terms and refund pages** for payments.

Phase 2 does **not** include the student portal/LMS. After payment, students get onboarding by email/WhatsApp. The login portal is Phase 3.

---

## 2. The journey we are building

```text
Free workshop page
  ↓
Phase 1 lead form
  ↓
Attend the free workshop
  ↓
Paid course page
  ↓
Checkout / Razorpay
  ↓
Webhook confirms payment
  ↓
Enrollment created
  ↓
Receipt + onboarding
  ↓
Reminders before each session
  ↓
Referral request after the course
```

The free workshop remains the front door. The paid course is the next step.

---

## 3. Paid course page

Add a separate page on the marketing site:

`/teacher-training/`

It should include:

- who the course is for;
- curriculum;
- outcomes;
- what is included;
- real proof — only the confirmed 13/13 five-star claim and real testimonials;
- start date, time and language;
- price and payment options;
- refund policy;
- FAQ;
- a clear “Enroll now” button.

The page can stay static for speed and SEO. The button goes to:

`https://app.kushallearningcentre.com/enroll?cohort=nov-2026`

Do not invent a price, discount, seat count or deadline. Those come from Deepika.

---

## 4. Checkout app

Use **Next.js + TypeScript** on Vercel. It handles the checkout, payment APIs and admin.

### Checkout flow

1. Student selects a batch.
2. Enters name, email, WhatsApp number and consent.
3. Optional coupon or referral code.
4. Server validates the price and creates a **Razorpay Order**.
5. Razorpay Checkout opens — UPI, cards, netbanking, wallets, EMI if eligible.
6. Payment succeeds.
7. Razorpay sends a webhook to the app.
8. The app verifies the signature and marks the order paid.
9. Enrollment is created.
10. Receipt and onboarding are sent.
11. Seat count updates.

**Never build a custom card form.** Razorpay handles card data. Your server only stores the order and payment IDs.

### Why a webhook matters

The success screen is not proof of payment. The webhook is.

The webhook must:

- verify `X-Razorpay-Signature`;
- check the order ID, amount and currency;
- check the payment status;
- be idempotent — the same event must not create two enrollments;
- store the raw event;
- retry safely if something fails.

Use a `webhook_events` table with a unique event ID and a unique Razorpay payment ID.

### Seat handling

Do not just check “seats left” on the page. Use a database transaction:

- create a short seat hold when checkout starts;
- confirm the seat when payment is captured;
- release the hold if payment fails or expires;
- show a waitlist when the cohort is full.

Only show real seat counts. No fake countdowns.

---

## 5. Database design

Use Supabase Postgres.

Simplified tables:

| Table | Purpose |
|---|---|
| `programs` | The paid course: title, description, price, currency |
| `cohorts` | Dates, time, language, capacity, enrollment deadline, status |
| `leads` | Phase 1 leads and checkout abandoners |
| `orders` | Razorpay order, amount, coupon, status |
| `payments` | Razorpay payment IDs, method, status |
| `enrollments` | Student ↔ cohort access |
| `students` | Name, email, WhatsApp, consent |
| `coupons` | Code, discount, usage limit, expiry |
| `referrals` | Referrer, referee, reward status |
| `webhook_events` | Raw events and idempotency |
| `message_jobs` | Scheduled reminders and delivery status |
| `admins` | Admin users and roles |

### Security rules

- Public users can read published programs/cohorts only.
- Public users cannot read orders, payments or student rows.
- Students can read only their own records — and only in Phase 3 when student login exists.
- Admin access is role-protected.
- The Supabase service-role key exists only on the server, never in the browser.
- All checkout inputs are validated with Zod on the server.

---

## 6. Coupons and referrals

### Coupons

- Validate on the server, never in the browser.
- Recalculate the final amount before creating the Razorpay order.
- Track usage limits, expiry and who used it.
- Prevent self-referral and repeated use.

### Referrals

- Every paid student gets a referral code/link.
- Store the referral in a cookie for 30 days.
- Attach it to the order at checkout.
- Reward after the refund window, not immediately.
- One level only — no multi-level/MLM structure.
- Admin approves payouts or credits.

---

## 7. Automated reminders

Start with **email** via Resend. Add **WhatsApp Business API** when the client’s WhatsApp Business account and templates are approved.

Do not try to automate a WhatsApp group. Use:

- the group for community;
- 1:1 WhatsApp messages for reminders;
- email as the backup channel.

### Message sequence

- Payment receipt + onboarding.
- 24 hours before session 1.
- 2 hours before session 1.
- After session 1: replay/homework.
- Before sessions 2 and 3.
- After the course: feedback, certificate/referral request.

### Implementation

- Store scheduled messages in `message_jobs`.
- A cron job or worker picks up due messages.
- Use `Asia/Kolkata`.
- Respect opt-in and quiet hours.
- Retry failed sends with backoff.
- Stop messages after refund or opt-out.
- Log every send.

WhatsApp template approval can take time, so start that process in week 1.

---

## 8. Admin dashboard

A simple protected `/admin` on the app:

### Dashboard

- leads this week;
- paid orders;
- revenue;
- seats left per cohort;
- failed payments;
- upcoming sessions.

### Cohorts

- create/edit dates, capacity, price and status;
- open/close enrollment;
- waitlist.

### Orders and students

- filter by cohort, status and source;
- view payment details;
- resend receipt;
- record manual refunds;
- export CSV.

### Coupons and referrals

- create/deactivate coupons;
- see referral attribution;
- mark rewards as paid.

### Messages

- see scheduled/sent/failed reminders;
- resend onboarding.

Do not build a full CRM. Build the five screens Deepika actually needs.

---

## 9. Tracking and attribution

Add purchase tracking:

- GA4 `begin_checkout`;
- GA4 `purchase` — server-side from the webhook;
- Meta `InitiateCheckout` and `Purchase` — client-side and server-side Conversions API;
- `transaction_id` = order ID;
- `value` and `currency: INR`;
- UTM and referral data stored on the order.

Why server-side purchase tracking? Ad blockers and browser restrictions can drop client-side events. The webhook is the source of truth.

Never send raw email/phone to GA4. Hash PII if Meta CAPI requires it.

---

## 10. Legal updates before taking money

Update:

- Privacy Policy — payment data, Razorpay, Supabase, email/WhatsApp providers.
- Terms — paid course, access, conduct, no income guarantee.
- Refund Policy — window, process, exclusions, processing time.
- Contact — payment support and grievance contact.

Checkout must require acceptance of Terms, Refund Policy and Privacy Policy. No pre-checked boxes.

Do not take live payments until these pages are live and reviewed.

---

## 11. Security checklist

- Razorpay `key_secret` and webhook secret only on the server.
- Verify webhook signatures.
- Verify amount and currency server-side.
- Idempotent webhook processing.
- Rate-limit checkout and lead endpoints.
- Cloudflare Turnstile on public forms.
- RLS on every table.
- Admin role checks on every admin route.
- No card data touches your server.
- Test payment failure, duplicate webhook, refund and full cohort.
- Sentry or equivalent for production errors.
- Database backups.

---

## 12. Build timeline

| Week | Work |
|---|---|
| 1 | Offer details, cohort structure, Razorpay test account, Supabase schema, sales page |
| 2 | Checkout, Razorpay order creation, webhook, enrollment creation, receipts |
| 3 | Admin, batches, coupons, referrals, email reminders |
| 4 | WhatsApp API, analytics, QA, security tests, go-live |

**3–4 weeks.** WhatsApp template approval can add 1–2 weeks, so start it in week 1.

### Faster first version

If Deepika needs revenue quickly, do **Phase 2A** first:

- paid course page;
- Razorpay Payment Page or Payment Link;
- manual confirmation;
- manual onboarding by email/WhatsApp.

Then build the full checkout, webhook and admin in 2B. You get paid sooner without building everything at once.

---

## 13. Costs

Approximate, to verify:

- Razorpay: standard transaction fee, currently around 2% + GST.
- Supabase: free tier to start; Pro around $25/month.
- Vercel: free tier to start; Pro around $20/month.
- Resend: free tier, then usage-based.
- WhatsApp API: provider subscription plus conversation charges.
- Domain/email: already covered in Phase 1.

Pass these through at actuals or include them in the retainer.

---

## 14. Acceptance criteria

Phase 2 is done when:

- [ ] A test payment succeeds and creates exactly one enrollment.
- [ ] A duplicate webhook does not create a second enrollment.
- [ ] A failed payment does not create access.
- [ ] The amount cannot be changed from the browser.
- [ ] Coupons and referrals are validated server-side.
- [ ] A full cohort shows a waitlist, not a broken checkout.
- [ ] Receipt and onboarding email arrive.
- [ ] WhatsApp reminders send only with opt-in.
- [ ] Admin can see leads, orders, students, seats and failed payments.
- [ ] Students cannot access other students’ data.
- [ ] Refund updates the order and access status.
- [ ] GA4 and Meta receive the purchase event.
- [ ] Terms, privacy and refund pages are live before payment.
- [ ] The checkout works on a mid-range Android phone.

---

## 15. What I would not build in Phase 2

- A custom card payment form.
- A full student LMS with video hosting.
- A complex subscription/EMI management system.
- A full CRM.
- WhatsApp group automation.
- A custom CMS for every section.
- Multi-level referral/MLM features.

Keep Phase 2 focused on **getting paid and onboarding students reliably**.

---

## How to explain it to Deepika

> “Phase 2 is the enrollment engine. The free workshop stays your front door. After it, people see a clear paid course page, pay by UPI or card, get an instant receipt and onboarding, and receive reminders before each session. You get a simple dashboard showing every lead, payment and seats. I’ll also connect tracking so you know which Instagram posts, referrals and messages actually produce paid students.”
