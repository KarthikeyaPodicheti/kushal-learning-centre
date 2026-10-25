/* Kushal Learning Centre — small, dependency-free interactions.
   Everything degrades: content is visible without JS. */
(function () {
  "use strict";

  var doc = document;
  var head = doc.getElementById("siteHead");
  var menuBtn = doc.getElementById("menuBtn");
  var nav = doc.getElementById("siteNav");
  var ctaBar = doc.getElementById("ctaBar");
  var finalSection = doc.getElementById("join");
  var hero = doc.getElementById("top");
  var finalVisible = false;

  /* ── header state ─────────────────────────────────── */
  var lastState = false;
  function onScroll() {
    /* Keep the header border-free until the hero has fully passed. */
    var threshold = 8;
    if (hero) threshold = Math.max(8, hero.offsetHeight - 2);
    var stuck = window.scrollY > threshold;
    if (stuck !== lastState) {
      head.classList.toggle("is-stuck", stuck);
      lastState = stuck;
    }
    if (ctaBar && !finalVisible) {
      var show = window.scrollY > window.innerHeight * 0.85;
      ctaBar.classList.toggle("is-visible", show);
      doc.body.classList.toggle("has-bar", show);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── mobile menu ──────────────────────────────────── */
  function closeMenu() {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    doc.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
    });
  }

  /* ── scroll reveals ───────────────────────────────── */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = Array.prototype.slice.call(doc.querySelectorAll("[data-reveal]"));

  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var siblings = el.parentElement ? el.parentElement.children : [];
          var i = Array.prototype.indexOf.call(siblings, el);
          el.style.transitionDelay = Math.min(i, 3) * 70 + "ms";
          el.classList.add("in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* ── hide sticky CTA over the final section ───────── */
  if (finalSection && "IntersectionObserver" in window && ctaBar) {
    new IntersectionObserver(
      function (entries) {
        finalVisible = entries[0].isIntersecting;
        if (finalVisible) {
          ctaBar.classList.remove("is-visible");
          doc.body.classList.remove("has-bar");
        } else {
          onScroll();
        }
      },
      { threshold: 0.18 }
    ).observe(finalSection);
  }

  /* ── footer year ──────────────────────────────────── */
  var year = doc.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  onScroll();
})();
