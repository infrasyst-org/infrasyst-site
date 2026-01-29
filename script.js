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

  // Timezone label (client side)
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tzEl = document.getElementById("tz");
  if (tzEl && tz) tzEl.textContent = tz;

  // Email button: opens mail client with a prefilled message
  const emailBtn = document.getElementById("emailBtn");
  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      const to = "info@infrasyst.com";
      const subject = encodeURIComponent("Project inquiry — InfraSyst");
      const body = encodeURIComponent(
        "Hi InfraSyst,\n\nI’d like help with:\n- \n\nContext:\n- \n\nTimeline:\n- \n\nThanks,\n"
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
