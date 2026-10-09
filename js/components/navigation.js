export function initNavigation(data) {
  const header = document.querySelector("#header");

  if (!header) return;

  header.innerHTML = `
    <div class="container">
      <nav class="navbar" aria-label="Main navigation">
        <a href="#hero" class="brand" aria-label="Home">
          <span class="brand__monogram" aria-hidden="true">SKD</span>
        </a>

        <div class="nav-links" id="primary-navigation">
          ${data.navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        </div>

        <div class="nav-actions">
          <button
            class="theme-toggle"
            type="button"
            aria-label="Switch to dark mode"
            aria-pressed="false"
            data-theme-toggle
          >
            <span aria-hidden="true">◐</span
            ><span class="theme-toggle__label">Dark</span>
          </button>
          <a href="#contact" class="btn btn-primary">Hire Me</a>
          <button
            class="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="primary-navigation"
            aria-label="Open navigation"
          >
            <svg class="nav-toggle__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  `;

  const links = [...header.querySelectorAll(".nav-links a")];

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
      });
      link.classList.add("active");
      link.setAttribute("aria-current", "location");
      closeMenu();
      if (window.matchMedia("(max-width: 760px)").matches) {
        const destination = document.querySelector(link.hash);
        if (destination) {
          destination.setAttribute("tabindex", "-1");
          destination.focus({ preventScroll: true });
          destination.addEventListener("blur", () => destination.removeAttribute("tabindex"), { once: true });
        }
      }
    });
  });

  const toggle = header.querySelector(".nav-toggle");
  const menu = header.querySelector(".nav-links");
  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    menu.classList.remove("is-open");
  }
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation",
    );
    menu.classList.toggle("is-open", !isOpen);
  });
  header.addEventListener("keydown", (event) => {
    if (
      event.key !== "Escape" ||
      toggle.getAttribute("aria-expanded") !== "true"
    )
      return;
    closeMenu();
    toggle.focus();
  });

  const desktopQuery = window.matchMedia("(min-width: 761px)");
  desktopQuery.addEventListener?.("change", (event) => {
    if (event.matches) closeMenu();
  });

  const sections = [...document.querySelectorAll("main > section[id]")];
  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!current) return;
      links.forEach((link) => {
        const isCurrent = link.hash === `#${current.target.id}`;
        link.classList.toggle("active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => activeObserver.observe(section));
  }
}
