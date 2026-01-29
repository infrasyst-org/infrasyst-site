(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileNav.hasAttribute("hidden");
      if (isOpen) {
        mobileNav.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.removeAttribute("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
      }
    });

    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileNav.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form: open mail client with prefilled email
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);

      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const subject = encodeURIComponent(`Project inquiry — ${name || "New lead"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n— Sent from infrasyst.com`
      );

      // Change this to your preferred inbox
      const to = "hello@infrasyst.com";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }

  // Timezone label (client side)
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tzEl = document.getElementById("tz");
  if (tzEl && tz) tzEl.textContent = tz;
})();
