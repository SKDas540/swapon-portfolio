const footerIcons = {
  email: '<svg class="footer-icon--email" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 20v-7h2.4l.4-3H14V8.1c0-.9.3-1.5 1.5-1.5H17V4a19 19 0 0 0-2.2-.1c-2.2 0-3.8 1.4-3.8 4V10H8.5v3H11v7z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.2 10h2.6v9H5.2zm4.6 0h2.5v1.2h.1a2.8 2.8 0 0 1 2.5-1.4c2.7 0 3.2 1.8 3.2 4V19h-2.6v-4.6c0-1.1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.3V19H9.8z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3a9 9 0 0 0-2.8 17.6c.5.1.6-.2.6-.4v-1.6c-2.5.5-3-.6-3.2-1.1-.1-.3-.6-1.1-1-1.3-.3-.2-.8-.6 0-.6.7 0 1.2.7 1.4 1 .8 1.3 2.1.9 2.7.7.1-.6.4-1 .7-1.2-2.2-.2-4.4-1.1-4.4-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.2 4.7-4.4 4.9.4.3.7.8.7 1.7v2.4c0 .2.1.5.6.4A9 9 0 0 0 12 3"/></svg>',
};

function renderFooterSocialLink(link, personal = {}) {
  const email = link.type?.toLowerCase() === "email" || link.label?.toLowerCase() === "email";
  const label = email ? "Email" : link.label;
  const type = email ? "email" : link.type?.toLowerCase() || label?.toLowerCase();
  const icon = footerIcons[type] || footerIcons[label?.toLowerCase()];
  const href = email ? (personal.email ? `mailto:${personal.email}` : "") : link.url;

  if (!icon || !href || href === "#") return "";

  const isEmail = href.startsWith("mailto:");
  return `<a class="footer__social-link" href="${href}" aria-label="${label}"${isEmail ? "" : ' target="_blank" rel="noreferrer"'}>${icon}</a>`;
}

function renderFooterSocials(socialLinks = [], personal = {}) {
  const requiredIcons = [
    { type: "facebook", label: "Facebook" },
    { type: "github", label: "GitHub" },
    { type: "linkedin", label: "LinkedIn" },
    { type: "email", label: "Email" },
  ];
  const links = requiredIcons.map(({ type, label }) => {
    const link = socialLinks.find((item) =>
      item.label?.toLowerCase() === type || item.type?.toLowerCase() === type,
    );

    if (link) return renderFooterSocialLink(link, personal);
    if (type === "email" && personal.email) {
      return renderFooterSocialLink({ label: "Email", type: "email" }, personal);
    }

    return `<span class="footer__social-link footer__social-link--unavailable" role="img" aria-label="${label}">${footerIcons[type]}</span>`;
  });

  return links.join("");
}

export function renderFooter(data = {}) {
  const footer = document.querySelector("#footer");
  if (!footer) return;

  const footerNavigation = (data.navigation || []).filter(({ label }) =>
    ["Home", "About", "Skills", "Projects", "Contact"].includes(label),
  );

  footer.innerHTML = `
    <div class="container footer__inner">
      <div class="footer__identity">
        <a class="footer__mark" href="#hero" aria-label="${data.personal?.name || "Home"} home">SKD</a>
        <div class="footer__person">
          <strong>${data.personal?.name || ""}</strong>
          <span>${data.personal?.role || ""}</span>
        </div>
      </div>

      <nav class="footer__nav" aria-label="Footer navigation">
        ${footerNavigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>

      <div class="footer__socials" role="group" aria-label="Social and contact links">
        ${renderFooterSocials(data.socialLinks, data.personal)}
      </div>

      <div class="footer__signature">
        <p class="footer__tagline">${data.footer?.tagline || ""}</p>
        <p class="footer__copyright">© ${new Date().getFullYear()} ${data.personal?.name || ""}. ${data.footer?.copyright || ""}</p>
      </div>

      <button class="footer__top-link" type="button" aria-label="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 19V5m-6 6 6-6 6 6"/></svg>
      </button>
    </div>
  `;

  footer.querySelector(".footer__top-link")?.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  });
}
